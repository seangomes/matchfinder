import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

//COMPONENTS
import { AppComponent } from './app.component';

//SERVICES

//MODULES
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

//FIREBASE DATABASE CONN
const fbConfig = {
  apiKey: "AIzaSyBMXvfxePCPxcrZDYfbhEp3O0dS5TedJWQ",
  authDomain: "aktieporfolio.firebaseapp.com",
  databaseURL: "https://aktieporfolio.firebaseio.com",
  projectId: "aktieporfolio",
  storageBucket: "aktieporfolio.appspot.com",
  messagingSenderId: "797606110857"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fbConfig),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
