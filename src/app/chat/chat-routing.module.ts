import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

//COMPONENTS


//SERVICES

const routes: Routes = [
    
    {
        path: '',
        component: ChatComponent
      },
    //   {
    //     path: 'register',
    //     component: RegisterComponent
    //   },
    // {
    //   path: 'home',
    //   component: HomeComponent
    // },
    // // {
    // //   path: 'admin',
    // //   canActivate: [AuthGuard],
    // //   loadChildren: '../admin/admin-module.module#AdminModuleModule'
    // // },
    // {
    //   path: '**',
    //   component: PagenotfoundComponent
    // }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ChatRoutingModule { }