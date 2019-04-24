import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'and-tracking-details',
  templateUrl: './tracking-details.component.html',
  styleUrls: ['./tracking-details.component.scss']
})
export class TrackingDetailsComponent implements OnInit {
  tracking$: Observable<any>;

  constructor(
    private afd: AngularFireDatabase,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tracking$ = this.route.paramMap.pipe(
      map(p => p.get('id')),
      switchMap(id => {
        return this.afd.object(`donations/${id}`).valueChanges();
      })
    );
  }
}
