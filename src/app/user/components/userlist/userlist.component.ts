import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../shared/models/user';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { UserPipe } from "./user.pipe";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  userSelectSubject : BehaviorSubject<User> = new BehaviorSubject<User>(null);
  userSelected: Observable<User> = this.userSelectSubject.asObservable();

  //Filters
  searchUsername: string = '';
  searchClanname: string = '';
  searchRank: string = '';

  @Input() users:User[];


  ngOnInit() {
  }

  selectUser(user: User) {
    this.userSelectSubject.next(user);
  }

}
