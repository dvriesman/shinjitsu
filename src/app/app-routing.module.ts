import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockListComponent } from './block-list/block-list.component'
import { BlockCreateComponent } from './block-create/block-create.component'
import { LoginComponent } from './login/login.component'
import { BlockappComponent } from './blockapp/blockapp.component'
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:"login", component: LoginComponent, data: {profile: null},},
  {
    path:"blockapp", 
    component: BlockappComponent,
    canActivate: [AuthGuard],
    data: {profile: "USER"},
    children: [{
      path:"list", 
      component: BlockListComponent,
      data: {profile: "USER"},
      canActivate: [AuthGuard]
    },
    {
      path:"create", 
      component: BlockCreateComponent,
      data: {profile: "ADMIN"},
      canActivate: [AuthGuard]
    }, {
      path:"", 
      redirectTo: "list",
      pathMatch: "full"
    }
  ]
  },
  {path:"", redirectTo: "blockapp", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
