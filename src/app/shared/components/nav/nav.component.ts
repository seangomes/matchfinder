import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/providers/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() user: User;


  constructor(private auth: AuthService) {
   }

  ngOnInit() {

  }

  logout() {
    this.auth.signOut();
  }

}
