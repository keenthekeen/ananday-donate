import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import axios from 'axios';
import { generate } from 'randomstring';
import { extension } from 'mime-types';
const dataurl = require('dataurl');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

firebase.initializeApp();

export const register = functions.https.onCall(async (data, context) => {
  const secret = functions.config().recaptcha.secret;
  const response = (await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    {},
    {
      params: {
        secret,
        response: data.reCaptchaResponse
      }
    }
  )).data;
  if (response.success) {
    let code: string;
    let continueKey: boolean;
    do {
      code = generate({
        length: 6,
        charset: 'alphanumeric',
        capitalization: 'uppercase',
        readable: true
      });
      const query = await firebase
        .database()
        .ref('donations')
        .orderByChild('track_code')
        .equalTo(code)
        .once('value');
      if (query.numChildren() === 0) {
        continueKey = false;
      } else {
        continueKey = true;
      }
    } while (continueKey);
    const { reCaptchaResponse, slip_file, ...rawData } = data;
    const { data: slip_data, mimetype } = dataurl.parse(slip_file);
    const ext = extension(mimetype);
    const filename = `${code}.${ext}`;
    const filepath = `donations/${filename}`;
    const stream = firebase
      .storage()
      .bucket()
      .file(filepath)
      .createWriteStream();
    stream.write(slip_data);
    stream.end();
    await firebase
      .database()
      .ref('donations')
      .child(code)
      .update({
        register: {
          ...rawData,
          track_code: code,
          slip_fileName: filename,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        }
      });
    await firebase
      .database()
      .ref('lookup')
      .push({
        key: `${(rawData.name as string).trim()}|||${(rawData.telephone as string).trim()}`,
        code
      });
    return {
      track_code: code,
      success: true
    };
  } else {
    return {
      success: false
    };
  }
});

export const lookup = functions.https.onCall(async (data, context) => {
  const { name, telephone } = data;
  const snapshot = (await firebase
    .database()
    .ref('lookup')
    .orderByChild('key')
    .equalTo(`${name.trim()}|||${telephone.trim()}`)
    .once('value'));
  console.log(`${name.trim()}|||${telephone.trim()}`);
  console.log(snapshot.val())
  if (snapshot.hasChildren()) {
    const codes: string[] = [];
    snapshot.forEach(s => {
      codes.push(s.val().code);
    });
    return {
      success: true,
      codes
    }
  } else {
    return {
      success: false
    };
  }
});
