import { PassPipe } from './pass.pipe';

describe('PassPipe', () => {
  it('create an instance', () => {
    const pipe = new PassPipe();
    expect(pipe).toBeTruthy();
  });
});
