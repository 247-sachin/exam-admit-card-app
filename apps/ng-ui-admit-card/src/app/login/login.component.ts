import { Component } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { AdmitCard } from '../types/admitcard.model';

@Component({
  selector: 'admit-card-app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  dob:any;
  dob_text:string;
  seat_number:any;
  showAdmitCard = false;
  showLoader = false;
  student_data = new AdmitCard('', '','', '','', '','', '','', '','', '');
  maxDate:string;
  constructor(private apiService : ApiService){
    this.dob_text = '';
    let currentDate = new Date();
    console.log(currentDate);
    const month = currentDate.getMonth() > 9 ? currentDate.getMonth()+1 : '0'+(currentDate.getMonth()+1);
    this.maxDate = currentDate.getFullYear()+ '-' + month + '-' + currentDate.getDate();
    console.log(this.maxDate);
  }

  fetchStudentAdmitCard(){
    if(!this.seat_number){
      return alert("Exam seat number is required.")
    }
    
    const data = {
      "dob": this.dob_text,
      "seat_number": this.seat_number
    }
    this.showLoader = true;
    this.apiService.fetchStudentIdCard(data).subscribe((res:any)=>{
      console.log(res);
      this.showLoader = false;
      if(res.length == 0){
        this.showAdmitCard = false;
        alert("Record Not found, Please use correct seat number and Date of birth.");
      }
      else{
        this.student_data = res[0];
        this.student_data.exam_date = this.student_data.exam_date?.replace(/\//g, '-');
        console.log(this.student_data);
        this.showAdmitCard = true;
      }
    })
   }

  public convetToPDF() {
    let data = document.getElementById('admitCard')!;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 700;
      var pageHeight = 521;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/jpeg', 1.0);
      let pdf = new jspdf('p', 'pt', [canvas.width, canvas.height]); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, ((canvas.width-400)/5), 20, 400, 293)
      pdf.save(this.seat_number+'-RTS2024-Exam-Hall-Ticket.pdf'); // Generated PDF
    });
  }

  changeDate(){
    console.log("dob on change ",this.dob, typeof this.dob);
    if(this.dob){
      const selectedDate = this.dob.split('-');
      this.dob_text = selectedDate[2].replace(/^0+/,"") + '/' + selectedDate[1].replace(/^0+/,"") + '/' +  selectedDate[0];
    }
  }
}
