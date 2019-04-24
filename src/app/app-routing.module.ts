import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './tracking/tracking.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { TrackingDetailsComponent } from './tracking-details/tracking-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'track',
    component: TrackingComponent
  },
  {
    path: 'track/:id',
    component: TrackingDetailsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
