import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './admin.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [AdminGuard],
    data: {
      auth: false
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    data: {
      auth: true
    }
  },
  {
    path: 'dashboard/:id',
    component: EditComponent,
    canActivate: [AdminGuard],
    data: {
      auth: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class AdminRoutingModule {}
