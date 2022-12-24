import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { OverviewComponent } from './component/overview/overview.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'overview', component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
