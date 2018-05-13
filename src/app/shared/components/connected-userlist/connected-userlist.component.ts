import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../core/providers/user/user.service';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../../../core/providers/loader/loader.service';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-connected-userlist',
  templateUrl: './connected-userlist.component.html',
  styleUrls: ['./connected-userlist.component.css']
})
export class ConnectedUserlistComponent implements OnInit {

  onlineUsers$: Observable<User[]>;

  constructor(private userService: UserService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.onlineUsers$ = this.userService.onlineUsers$;
    //   .do(data => this.loaderService.hideLoader()
    // );
    //this.loaderService.showLoader();
  }



}
