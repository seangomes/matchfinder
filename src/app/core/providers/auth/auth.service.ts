import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { User } from "../../models/user";
import 'rxjs/add/operator/switchMap'

@Injectable()
export class AuthService {

  
  user: Observable<User>;


  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if(user) {
          return this.afs.doc<User>('users/'+ user.uid).valueChanges();
        }
        else {
          return Observable.of(null);
        }
      });
  }


  loginWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }

  register(email: string, password: string, username: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    })
  }

  //Helpers

  private updateUserData() : void {
    //const userDoc = 
  }

}
