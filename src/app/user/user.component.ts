import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../core/providers/user/user.service';

import { User } from '../shared/models/user';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {

  users$ : Observable<User[]>;
  // loader : boolean = false;
  constructor(private userService: UserService) {


   }

  ngOnInit() {

    this.getAllUsers();
  }

  getAllUsers() {
    this.users$ = this.userService.users$;
  }



}
