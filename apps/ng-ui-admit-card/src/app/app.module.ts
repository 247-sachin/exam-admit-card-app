import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { AdmitCardComponent } from './admit-card/admit-card.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FileUploadComponent,
    LoginComponent,
    AdmitCardComponent,
    NotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
