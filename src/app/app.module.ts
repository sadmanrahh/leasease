import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environment/environment';
import { RegisterComponent } from './component/register/register.component';
import { OverviewComponent } from './component/overview/overview.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './component/contact/contact.component';
import { FAQComponent } from './component/faq/faq.component';
import { PropertiesComponent } from './component/properties/properties.component';
import { LeaseOptionComponent } from './component/lease-option/lease-option.component';
import { VieweditLeaseComponent } from './component/viewedit-lease/viewedit-lease.component';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

;
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OverviewComponent,
    ContactComponent,
    FAQComponent,
    PropertiesComponent,
    LeaseOptionComponent,
    VieweditLeaseComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





