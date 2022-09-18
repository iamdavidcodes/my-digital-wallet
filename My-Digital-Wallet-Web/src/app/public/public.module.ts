import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public.routing';
import { LoginComponent } from './pages/login/login.component';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [LoginComponent, PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PublicModule { }
