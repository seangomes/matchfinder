import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { UserPipe } from './components/userlist/user.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [UserComponent, UserlistComponent, UserdetailsComponent, UserPipe]
})
export class UserModule { }
