import { Injectable } from '@angular/core';
import { User } from "../../../shared/models/user";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {

  private userCollection : AngularFirestoreCollection<User>;
  private onlineUserCollection : AngularFirestoreCollection<User>;

  public users$ : Observable<User[]>;
  public onlineUsers$ : Observable<User[]>;

  constructor(private afs: AngularFirestore) {

    this.userCollection = afs.collection<User>('users');
    this.users$ = this.userCollection.valueChanges();

    this.getOnlineUsers();

   }



   getOnlineUsers() : Observable<User[]> {
    this.onlineUserCollection = this.afs.collection<User>('users', ref => ref.where('online', '==', true));
    this.onlineUsers$ = this.onlineUserCollection.valueChanges();
    return this.onlineUsers$;
   }
}
