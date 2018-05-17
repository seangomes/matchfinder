import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { ConnectedUserlistComponent } from "./components/connected-userlist/connected-userlist.component";
import { LoaderComponent } from './components/loader/loader.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ConnectedUserlistComponent, LoaderComponent, NavComponent, HomeComponent, LoginComponent, RegisterComponent, PagenotfoundComponent, FooterComponent],
  exports: [ConnectedUserlistComponent, LoaderComponent, NavComponent, HomeComponent, LoginComponent, RegisterComponent, PagenotfoundComponent, FooterComponent]
})
export class SharedModule { }
