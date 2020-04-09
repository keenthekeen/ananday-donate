import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'and-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapse = true;
  faFacebook = faFacebook;
  constructor(translate: TranslocoService, title: Title) {
    translate.setDefaultLang('th');
    translate.setActiveLang('th');
    translate.selectTranslateObject('common.title').subscribe(s => {
      title.setTitle(s);
    });
  }

  toggle() {
    this.collapse = !this.collapse;
  }
}
