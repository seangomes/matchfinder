import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { User } from "../../models/user";
import 'rxjs/add/operator/switchMap'
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

  private userCollection : AngularFirestoreCollection<User>;

  public user$: Observable<User>;
  public users$ : Observable<User[]>;
  public currentUser : User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    //// Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState
      .switchMap(user => {
        if(user) {
          //this.currentUser = user;
          this.userCollection.doc(user.uid).update({
            online: true
          });
          return this.afs.doc<User>('users/'+ user.uid).valueChanges();
        }
        else {
          return Observable.of(null);
        }
      });

      this.userCollection = afs.collection<User>('users');
      this.users$ = this.userCollection.valueChanges();
  }

  get getCurrentUserId() : User {
    return this.currentUser;
  }

  loginWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userData) => {
        //update online status for user
        this.currentUser = userData;
        this.userCollection.doc(userData.uid).update({
          online: true
        })
        .then(() => {

          this.router.navigate(['home']);
        })
      })
      .catch((error) => console.log(error));
  }

  register(email: string, password: string, username: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      if(user.photoUrl === undefined) {
        user.photoUrl = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
      }

      let newUser : User = {
        email: user.email,
        photoUrl: user.photoUrl,
        username: username,
        online: false,
        clan: '',
        uid: user.uid,
        rank: '',
        firstname: '',
        lastname: '',
        favweap: '',
        country: '',
      }
      this.updateUserData(newUser);
    }).catch((error) => console.log(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then((userData) => {
      this.currentUser = null;
      this.userCollection.doc(userData.uid).update({
        online: false
      })
      .then(() => {
        this.router.navigate(['/home']);
      });
    })
  }

  //Helpers

  private updateUserData(userData: User) : void {
    this.userCollection.doc(userData.uid).set(userData)
        .then((docRef) => {
          this.router.navigate(['home']);
        });
  }

}
