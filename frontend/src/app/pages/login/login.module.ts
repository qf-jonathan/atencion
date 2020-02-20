import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule} from "@angular/router";
import {LoginInputComponent} from './login-input/login-input.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [LoginComponent, LoginInputComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginComponent
      }
    ]),
  ]
})
export class LoginModule {
}
