import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule, UserRoutingModule, FormsModule, MatFormFieldModule, MatInputModule],
})
export class UserModule {}
