import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
  providers: [],
})
export class LoginModule {}
