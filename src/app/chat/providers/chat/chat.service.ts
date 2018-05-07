import { Injectable } from '@angular/core';
import { ChatMessage } from "../../models/chatmessage";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ChatService {

  private messagesSubject : BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  public messages$ : Observable<ChatMessage[]> = this.messagesSubject.asObservable();


  constructor() {

    //init messages data
    let messages : ChatMessage[] = [
      {id: "1", date:"07-05-2018", content: "Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst", postedby: "Killerboy"},
      {id: "2", date:"07-05-2018", content: "Lorem Ipsum har ikke alene overlevet", postedby: "Jammer"},
      {id: "3", date:"07-05-2018", content: "I modsætning til hvad mange tror, er Lorem Ipsum ikke bare tilfældig tekst. Det stammer fra et stykke litteratur på latin fra år 45 f.kr., hvilket gør teksten over 2000 år gammel. Richard McClintock, professor i latin fra Hampden-Sydney universitet i Virginia, ", postedby: "PaperMe"},
      {id: "4", date:"07-05-2018", content: "Lorem Ipsum, og fandt frem til dets oprindelse", postedby: "BahhhMe"},
      {id: "5", date:"07-05-2018", content: "Standardafsnittet af Lorem Ipsum, som er brugt siden 1500-tallet, er gengivet nedenfor for de, der er interesserede. Afsnittene 1.10.32 og 1.10.33 fra de Finibus Bonorum et Malorum af Cicero er også gengivet i deres nøjagtige udgave i selskab med den engelske udgave fra oversættelsen af H. Rackham fra 1914.", postedby: "Thebear"},
    ]

    if(messages.length > 0 ){
      this.messagesSubject.next(messages);
    }

   }

   getMessages() : Observable<ChatMessage[]> {
     return this.messages$;
   }

   sendMessage(message: string) {

    let dateNow = new Date().toDateString();

    let messageObj : ChatMessage = {
      content: message,
      postedby: "Sean",
      date: dateNow,
    }

    let messageList = this.messagesSubject.getValue();

    messageList.push(messageObj);

    this.messagesSubject.next(messageList);


   }

}
