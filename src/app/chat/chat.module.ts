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
import { FilterchatComponent } from './components/filterchat/filterchat.component';

//PIPES
import { MatchfilterPipe } from "./components/filterchat/matchfilter.pipe";

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ChatwindowComponent, MessageboxComponent, ChatComponent, MatchmakerComponent, FilterchatComponent, MatchfilterPipe],
  providers: [ChatService]
})
export class ChatModule { }
