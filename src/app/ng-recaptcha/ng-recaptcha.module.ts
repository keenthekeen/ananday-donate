  import { NgModule } from '@angular/core';

import { RecaptchaCommonModule } from './ng-recaptcha-common.module';
import { RecaptchaLoaderService } from './ng-recaptcha-loader.service';
import { RecaptchaComponent } from './ng-recaptcha.component';

@NgModule({
  exports: [
    RecaptchaComponent,
  ],
  imports: [
    RecaptchaCommonModule,
  ],
  providers: [
    RecaptchaLoaderService,
  ],
})
export class RecaptchaModule {}
