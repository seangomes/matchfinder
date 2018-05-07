import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';



//COMPONENTS
import { ConnectedUserlistComponent } from './components/connected-userlist/connected-userlist.component';
import { ChatwindowComponent } from './components/chatwindow/chatwindow.component';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { ChatComponent } from './chat.component';

//SERVICES
import { ChatService } from "./providers/chat/chat.service";


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ],
  declarations: [ConnectedUserlistComponent, ChatwindowComponent, MessageboxComponent, ChatComponent],
  providers: [ChatService]
})
export class ChatModule { }
