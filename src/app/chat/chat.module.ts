import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';



//COMPONENTS
import { ChatwindowComponent } from './components/chatwindow/chatwindow.component';

import { ChatComponent } from './chat.component';

//SERVICES
import { ChatService } from "./providers/chat/chat.service";
import { SharedModule } from '../shared/shared.module';
import { MatchmakerComponent } from './components/matchmaker/matchmaker.component';
import { FilterchatComponent } from './components/filterchat/filterchat.component';

//PIPES
import { MatchfilterPipe } from "./components/filterchat/matchfilter.pipe";
import { ChatTabNavComponent } from './components/chat-tab-nav/chat-tab-nav.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ChatwindowComponent, ChatComponent, MatchmakerComponent, FilterchatComponent, MatchfilterPipe, ChatTabNavComponent],
  providers: [ChatService]
})
export class ChatModule { }
