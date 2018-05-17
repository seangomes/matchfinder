import { Component, OnInit } from '@angular/core';
import { ChatMessage } from './models/chatmessage';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './providers/chat/chat.service';
import { LoaderService } from '../core/providers/loader/loader.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService, private loaderService: LoaderService) { }

  messages$ : Observable<ChatMessage[]>;
  

  ngOnInit() {
    this.messages$ = this.chatService.messages$
      .do(data => this.loaderService.hideLoader()
    );
    this.loaderService.showLoader();
  }

}
