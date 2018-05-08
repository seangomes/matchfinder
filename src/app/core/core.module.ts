import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//COMPONENTS
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FooterComponent } from './components/footer/footer.component';


//SEVICES
import { AuthService } from './providers/auth/auth.service';
import { DummydataService } from "./providers/dummyData/dummydata.service";

//MODULES
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
    CoreRoutingModule,
    CommonModule
  ],
  providers: [AuthService, DummydataService],
  declarations: [NavComponent, HomeComponent, LoginComponent, RegisterComponent, PagenotfoundComponent, FooterComponent],
  exports: [RouterModule , NavComponent, FooterComponent]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

 }
