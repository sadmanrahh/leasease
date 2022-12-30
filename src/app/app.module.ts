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
import { LeaseOptionComponent } from './component/lease-option/lease-option.component';
import { VieweditLeaseComponent } from './component/viewedit-lease/viewedit-lease.component';
import { SettingsComponent } from './component/settings/settings.component';

import { AngularFireModule } from '@angular/fire/compat';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { UploadleaseComponent } from './component/uploadlease/uploadlease.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OverviewComponent,
    ContactComponent,
    FAQComponent,
    LeaseOptionComponent,
    VieweditLeaseComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    SettingsComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    UploadleaseComponent,
    AboutusComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





