import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { UserInfoComponent } from './views/user-info/user-info.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'userInfo/:id',component:UserInfoComponent},
  {path:'edit/:id',component:EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
