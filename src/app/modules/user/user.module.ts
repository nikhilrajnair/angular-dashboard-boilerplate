import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
