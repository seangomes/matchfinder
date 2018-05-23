//ref: http://javasampleapproach.com/frontend/angular/angular-4-firebase-upload-file-to-storage
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FileUpload } from '../../../shared/models/upload';


@Injectable()
export class UploadService {

  private uploadCollection: AngularFirestoreCollection<FileUpload>;
  private basePath: string = '/uploads';

  constructor(private afs: AngularFirestore) {
    this.uploadCollection = afs.collection<FileUpload>('uploads');
  }

  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }, userId?: string, clanId?: string) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        if(userId) {
          fileUpload.userId = userId;
        }
        if(clanId) {
          fileUpload.clanId = clanId;
        }
        this.saveFileData(fileUpload)
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    this.uploadCollection.add(fileUpload);
    // this.db.list(`${this.basePath}/`).push(fileUpload);
  }



}
