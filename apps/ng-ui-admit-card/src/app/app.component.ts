import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FileUploadComponent } from './file-upload/file-upload.component'

@Component({
  // imports: [NxWelcomeComponent, FileUploadComponent, RouterModule],
  selector: 'admit-card-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-ui-admit-card';

  
}
