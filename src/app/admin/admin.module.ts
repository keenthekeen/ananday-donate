import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusPipe } from './status.pipe';
import { TimestampPipe } from './timestamp.pipe';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PassPipe } from './pass.pipe';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forChild()
  ],
  declarations: [LoginComponent, DashboardComponent, StatusPipe, TimestampPipe, EditComponent, PassPipe]
})
export class AdminModule { }
