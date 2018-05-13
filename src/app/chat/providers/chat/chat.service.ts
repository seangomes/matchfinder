import { Injectable } from '@angular/core';
import { ChatMessage } from "../../models/chatmessage";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/providers/auth/auth.service';

@Injectable()
export class ChatService {

  private messagesCollection :AngularFirestoreCollection<ChatMessage>;
  public messages$ : Observable<ChatMessage[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.messagesCollection = afs.collection<ChatMessage>('chatmessages');
    this.messages$ = this.messagesCollection.valueChanges();

   }

   getMessages() : Observable<ChatMessage[]> {
     return this.messages$;
   }

   sendMessage(message: string) {

    let dateNow = new Date().toDateString();

    let currentUser = this.authService.getCurrentUser;

    let messageObj : ChatMessage = {
      content: message,
      postedby: currentUser.username,
      date: dateNow,
      matchtype: "5vs5"
    }

    this.messagesCollection.add(messageObj);
   }

}
