import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';



//COMPONENTS
import { ChatwindowComponent } from './components/chatwindow/chatwindow.component';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { ChatComponent } from './chat.component';

//SERVICES
import { ChatService } from "./providers/chat/chat.service";
import { SharedModule } from '../shared/shared.module';
import { MatchmakerComponent } from './components/matchmaker/matchmaker.component';


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ChatwindowComponent, MessageboxComponent, ChatComponent, MatchmakerComponent],
  providers: [ChatService]
})
export class ChatModule { }
