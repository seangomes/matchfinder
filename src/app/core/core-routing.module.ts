import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { HomeComponent } from '../shared/components/home/home.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { PagenotfoundComponent } from '../shared/components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from '../shared/components/register/register.component';
import { EditUserComponent } from '../shared/components/edit-user/edit-user.component';

//SERVICES
import { AuthGuard } from './providers/auth/auth.guard';


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
    {
      path: 'edituser',
      component: EditUserComponent
    },
    {
      path: 'chat',
      loadChildren: '../chat/chat.module#ChatModule',
      canActivate: [AuthGuard]
    },
    {
      path: 'users',
      loadChildren: '../user/user.module#UserModule'
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
