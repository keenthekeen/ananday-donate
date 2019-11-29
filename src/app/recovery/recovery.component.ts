import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseApp } from '@angular/fire';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'and-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  recoveryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebase: FirebaseApp,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.recoveryForm = this.fb.group({
      name: this.fb.control(''),
      telephone: this.fb.control('')
    });
  }

  submit() {
    const lookup = this.firebase.functions().httpsCallable(
      'lookup'
    );
    lookup(this.recoveryForm.value).then(res => {
      if (res.data.success) {
        if (res.data.codes.length === 1) {
          this.router.navigate(['/track', res.data.codes[0]]);
        } else {
          alert(res.data.codes.join(', '));
        }
      } else {
        this.translate
          .get('recovery.not_found')
          .pipe(first())
          .subscribe(t => {
            alert(t);
          });
      }
    });
  }
}
