import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../../shared/models/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }

}
