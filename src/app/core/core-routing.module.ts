import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';

//SERVICES

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    {
      path: 'home',
      component: HomeComponent
    },
    // {
    //   path: 'admin',
    //   canActivate: [AuthGuard],
    //   loadChildren: '../admin/admin-module.module#AdminModuleModule'
    // },
    {
      path: '**',
      component: PagenotfoundComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CoreRoutingModule { }