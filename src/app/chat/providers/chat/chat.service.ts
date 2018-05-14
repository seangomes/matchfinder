import { Injectable } from '@angular/core';
import { ChatMessage } from "../../models/chatmessage";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/providers/auth/auth.service';

@Injectable()
export class ChatService {

  private messagesCollection: AngularFirestoreCollection<ChatMessage>;
  public messages$: Observable<ChatMessage[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.messagesCollection = afs.collection<ChatMessage>('chatmessages');
    this.messages$ = this.messagesCollection.valueChanges();

  }

  getMessages(): Observable<ChatMessage[]> {
    return this.messages$;
  }

  sendMessage(data: any)  {
    let dateNow = this.genereateDate();
    let currentUser = this.authService.getCurrentUser;
    let mapstring = data.maps.toString();
    let message = data.matchType + " - " + mapstring + " - " + data.rank;

    let messageObj: ChatMessage = {
      content: message,
      postedby: currentUser.username,
      date: dateNow,
      matchtype: data.matchType
    }
    return this.messagesCollection.add(messageObj);
  }

  genereateDate() {
    var date = new Date(),
    year = date.getFullYear(),
    month = (date.getMonth() + 1).toString(),
    formatedMonth = (month.length === 1) ? ("0" + month) : month,
    day = date.getDate().toString(),
    formatedDay = (day.length === 1) ? ("0" + day) : day,
    hour = date.getHours().toString(),
    formatedHour = (hour.length === 1) ? ("0" + hour) : hour,
    minute = date.getMinutes().toString(),
    formatedMinute = (minute.length === 1) ? ("0" + minute) : minute,
    second = date.getSeconds().toString(),
    formatedSecond = (second.length === 1) ? ("0" + second) : second;
    return formatedDay + "-" + formatedMonth + "-" + year + " " + formatedHour + ':' + formatedMinute + ':' + formatedSecond;
  }
}
