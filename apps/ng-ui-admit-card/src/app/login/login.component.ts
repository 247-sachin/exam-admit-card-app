import { Component } from '@angular/core';
import { ApiService } from '../api-service/api.service';


@Component({
  selector: 'admit-card-app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dob:any;
  seat_number:any;
  showAdmitCard = false;
  constructor(private apiService : ApiService){}

  fetchStudentAdmitCard(){
    const data = {
      "dob": this.dob,
      "seat_number": this.seat_number
    }
    this.apiService.fetchStudentIdCard(data).subscribe((res)=>{
      console.log(res);
      this.showAdmitCard = true;
    })
   }
}
