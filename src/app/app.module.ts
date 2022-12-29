import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environment/environment';

import { RegisterComponent } from './component/register/register.component';
import { OverviewComponent } from './component/overview/overview.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './component/contact/contact.component';
import { FAQComponent } from './component/faq/faq.component';
import { PropertiesComponent } from './component/properties/properties.component';
import { LeaseOptionComponent } from './component/lease-option/lease-option.component';
import { VieweditLeaseComponent } from './component/viewedit-lease/viewedit-lease.component';

import { AngularFireModule } from '@angular/fire/compat';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddTenantComponent } from './component/properties/components/add-tenant/add-tenant.component';
import { TenantDetailsComponent } from './component/properties/components/tenant-details/tenant-details.component';
import { TenantsListComponent } from './component/properties/components/tenants-list/tenants-list.component';
// import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
// import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OverviewComponent,
    ContactComponent,
    FAQComponent,
    PropertiesComponent,
    LeaseOptionComponent,
    VieweditLeaseComponent,
    // AddTutorialComponent,
    AddTenantComponent,
    TenantDetailsComponent,
    TenantsListComponent,
    // TutorialDetailsComponent,
    // TutorialsListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





