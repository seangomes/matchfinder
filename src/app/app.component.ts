import { Component } from '@angular/core';
import { DummydataService } from './core/providers/dummyData/dummydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 
  constructor(private dummyDataService: DummydataService) {
    
    
  }

  uploadChatMessages() {
    this.dummyDataService.addDataChatmessages();
  }
}
