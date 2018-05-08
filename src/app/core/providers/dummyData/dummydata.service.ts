import { Injectable } from '@angular/core';
import * as chatmesssagedata from './chatmessages';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ChatMessage } from '../../../chat/models/chatmessage';


@Injectable()
export class DummydataService {

  private chatMessagesCollection: AngularFirestoreCollection<ChatMessage>;
  private chatMessagesItems : ChatMessage[] = [];

  constructor(private afs: AngularFirestore) {

    this.chatMessagesCollection = afs.collection<ChatMessage>('chatmessages');

    this.chatMessagesItems = chatmesssagedata.chatmessages;
    
   }


  addDataChatmessages() {
    //upload to firestore
    this.chatMessagesItems.forEach(chatmessage => {
      //generate new ID
      let autoId = this.afs.createId();
      chatmessage.id = autoId;
      this.chatMessagesCollection.add(chatmessage);
    });
  }

}
