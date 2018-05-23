import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { User } from "../../../shared/models/user";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { UserService } from '../user/user.service';
import { FirebaseAuth } from '@firebase/auth-types';

@Injectable()
export class AuthService {

  private userCollection: AngularFirestoreCollection<User>;

  public user$: Observable<User>;
  public users$: Observable<User[]>;
  public currentUser: User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    //// Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          //
          this.userCollection.doc(user.uid).update({
            online: true
          })
          return this.afs.doc<User>('users/' + user.uid).valueChanges();
        }
        else {
          return Observable.of(null);
        }
      });

    this.userCollection = afs.collection<User>('users');
    this.users$ = this.userCollection.valueChanges();

    this.user$.subscribe((data) => {
      this.currentUser = data;
    });

  }

  get getCurrentUser(): User {
    return this.currentUser;
  }

  loginWithEmailAndPassword(email: string, password: string, rememberme: boolean) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userData) => {
        //update online status for user
        this.userCollection.doc(userData.uid).update({
          online: true
        })
          .then(() => {
            //Sets the localstore value for remember me
            if (rememberme) {
              localStorage.setItem('currentuser', JSON.stringify(this.currentUser));
            }
            this.router.navigate(['home']);
          })
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/wrong-password':
            return error.message;
          case 'auth/user-not-found':
            return error.message;
          case 'auth/user-disabled':
            return error.message;
          case 'auth/invalid-email':
            return error.message;
        }
      });
  }

  register(email: string, password: string, username: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      if (user.photoUrl === undefined) {
        user.photoUrl = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
      }

      let newUser: User = {
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
    this.afAuth.auth.signOut().then(() => {

      this.userCollection.doc(this.currentUser.uid).update({
        online: false
      })
        .then(() => {
          this.currentUser = new User;
          localStorage.removeItem('currentuser');
          this.router.navigate(['/home']);
        });
    })
  }

  changeUser(user: User) {
    if (user) {
      this.updateExistingUserData(user);
    }
  }

  //Helpers
  private getUserFromFSDb(authUser: any) {
    let user = this.afs.collection('users').doc(authUser.uid).valueChanges();
    user.subscribe(data => this.currentUser = data as User);
  }

  private updateUserData(userData: User): void {
    this.userCollection.doc(userData.uid).set(userData)
      .then((docRef) => {
        this.router.navigate(['home']);
      });
  }

  private updateExistingUserData(userData: User): void {
    this.userCollection.doc(userData.uid).update(userData)
      .then((docRef) => {
        
      });
  }

}
