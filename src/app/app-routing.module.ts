import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './component/overview/overview.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactComponent } from './component/contact/contact.component';
import { FAQComponent } from './component/faq/faq.component';
import { LeaseOptionComponent } from './component/lease-option/lease-option.component';
import { PropertiesComponent } from './component/properties/properties.component';
import { VieweditLeaseComponent } from './component/viewedit-lease/viewedit-lease.component';
import { HeaderTestingComponent } from './component/header-testing/header-testing.component';

const routes: Routes = [
  {path: '', redirectTo:'overview',pathMatch:'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'lease-option', component: LeaseOptionComponent},
  {path: 'viewedit_lease', component: VieweditLeaseComponent},
  {path: 'header-testing', component: HeaderTestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
