import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AdmitCardComponent } from './admit-card/admit-card.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Route[] = [
    { path:  '', component:  LoginComponent},
    { path:  'admit-card', component:  AdmitCardComponent},
    { path: 'data-upload', component: FileUploadComponent},
    { path: '**', component: NotFoundComponent}
];
