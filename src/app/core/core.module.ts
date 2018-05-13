import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

//SEVICES
import { AuthService } from './providers/auth/auth.service';
import { DummydataService } from "./providers/dummyData/dummydata.service";
import { UserService } from "./providers/user/user.service";
import { LoaderService } from './providers/loader/loader.service';
import { AuthGuard } from './providers/auth/auth.guard';

//MODULES
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    CoreRoutingModule,
    CommonModule
  ],
  providers: [AuthService, DummydataService, UserService, LoaderService, AuthGuard],
  declarations: [],
  exports: [RouterModule]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule, private afs: AngularFirestore) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    const settings = { timestampsInSnapshots: true };
    this.afs.firestore.settings( settings );
  }

 }
