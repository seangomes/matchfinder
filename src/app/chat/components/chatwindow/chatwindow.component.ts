import { Component, OnInit } from '@angular/core';
import { ChatMessage } from "../../models/chatmessage";
import { ChatService } from '../../providers/chat/chat.service';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../../../core/providers/loader/loader.service';
import 'rxjs/add/operator/do';
import { MatchfilterPipe } from '../../../shared/pipes/matchfilter.pipe';



@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.css']
})
export class ChatwindowComponent implements OnInit {

  loader: Observable<boolean>;
  messages$ : Observable<ChatMessage[]>;


  constructor(private chatService: ChatService, private loaderService: LoaderService) { }

  ngOnInit() {

    this.messages$ = this.chatService.messages$
      .do(data => this.loaderService.hideLoader()
    );
    this.loaderService.showLoader();
  }

}
