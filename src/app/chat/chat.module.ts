import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';


//COMPONENTS
import { ConnectedUserlistComponent } from './components/connected-userlist/connected-userlist.component';
import { ChatwindowComponent } from './components/chatwindow/chatwindow.component';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { ChatComponent } from './chat.component';

//SERVICES



@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ConnectedUserlistComponent, ChatwindowComponent, MessageboxComponent, ChatComponent]
})
export class ChatModule { }
