import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/providers/user/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-connected-userlist',
  templateUrl: './connected-userlist.component.html',
  styleUrls: ['./connected-userlist.component.css']
})
export class ConnectedUserlistComponent implements OnInit {

  onlineUsers$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getOnlineUsers();
  }

  getOnlineUsers() {
    this.onlineUsers$ = this.userService.getOnlineUsers();
  }

}
