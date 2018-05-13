import { Injectable } from '@angular/core';
import * as chatmesssagedata from './chatmessages';
import * as usersdata from './users';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ChatMessage } from '../../../chat/models/chatmessage';
import { User } from '../../../shared/models/user';


@Injectable()
export class DummydataService {

  private chatMessagesCollection: AngularFirestoreCollection<ChatMessage>;
  private chatMessagesItems : ChatMessage[] = [];

  private userCollection : AngularFirestoreCollection<User>;
  private userList : User[] = [];

  constructor(private afs: AngularFirestore) {

    this.chatMessagesCollection = afs.collection<ChatMessage>('chatmessages');
    this.userCollection = afs.collection<User>('users');
    this.chatMessagesItems = chatmesssagedata.chatmessages;
    this.userList = usersdata.onlineUsers;
   }


  addDataChatmessages() {
    //upload to firestore with new ID
    this.chatMessagesItems.forEach(chatmessage => {
      this.chatMessagesCollection.add(chatmessage)
        .then((docRef) => {
          docRef.update({
            id: docRef.id
          });
      });
    });
  }

  addDataUsers() {
    this.userList.forEach(users => {
      this.userCollection.add(users)
        .then((docRef) => {
          docRef.update({
            uid: docRef.id
          });
        });
    });
  }

}
