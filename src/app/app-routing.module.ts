import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './component/overview/overview.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { FAQComponent } from './component/faq/faq.component';
import { LeaseOptionComponent } from './component/lease-option/lease-option.component';
import { VieweditLeaseComponent } from './component/viewedit-lease/viewedit-lease.component';
import { UploadleaseComponent } from './component/uploadlease/uploadlease.component';
import { SettingsComponent } from './component/settings/settings.component';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';



const routes: Routes = [
  {path: '', redirectTo:'overview',pathMatch:'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'lease-option', component: LeaseOptionComponent},
  {path: 'viewedit_lease', component: VieweditLeaseComponent},
  {path: 'modify', component: TutorialsListComponent},
  {path: 'add', component: AddTutorialComponent},
  {path: 'upload-lease', component: UploadleaseComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
