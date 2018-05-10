import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user$: Observable<User>;


  constructor(private auth: AuthService) {
    this.user$ = this.auth.user$;

    // this.user$.subscribe((data) => {
    //   console.log(data);
    // })

   }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

}
