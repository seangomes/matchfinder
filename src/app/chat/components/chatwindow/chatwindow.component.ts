import { Component, OnInit } from '@angular/core';
import { ChatMessage } from "../../models/chatmessage";

import { ChatService } from '../../providers/chat/chat.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.css']
})
export class ChatwindowComponent implements OnInit {


  messages$ : Observable<ChatMessage[]>;


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages$ = this.chatService.getMessages();
  }

}
