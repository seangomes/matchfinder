import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat/chat.service';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {


  message : string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    if(this.message !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

}
