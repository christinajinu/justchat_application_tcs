import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
path : '',
redirectTo:'/home',
pathMatch:'full'
  },
  {
  path : 'home',
  component : HomeComponent
},
{
  path : 'register',
  component : RegisterComponent
},
{
  path : 'login',
  component : LoginComponent
},
{
  path : 'chat',
  component : ChatRoomComponent,
  // canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
