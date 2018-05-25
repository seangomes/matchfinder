import { Component } from '@angular/core';
import { DummydataService } from './core/providers/dummyData/dummydata.service';
import { AuthService } from './core/providers/auth/auth.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user: User;

  constructor(private dummyDataService: DummydataService, private auth: AuthService) {

    this.auth.user$.subscribe((data) => {
      this.user = data;
      console.log("current-user: ", this.user);
    });

  }

  uploadUsers() {
    this.dummyDataService.addDataUsers();
  }

  uploadChatMessages() {
    this.dummyDataService.addDataChatmessages();
  }
}
