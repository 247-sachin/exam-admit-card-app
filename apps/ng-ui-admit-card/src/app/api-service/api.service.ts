import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from  '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://fzwmeedie3.execute-api.ap-south-1.amazonaws.com/test/api/'; // 'http://localhost:3300/';
  uploadAdmitCardData(data:any){
    return this.http.post(this.apiUrl+'admit-card-data-upload', data)
  }

  fetchStudentIdCard(studentDetails:any){
    const headers  = {
      "X-API-KEY" : "YATSB59eFU4PbR80TpnXs4k78uGDVEDS1sB5YSXZ"
    }
    return this.http.post(this.apiUrl+"student-profile", studentDetails, {headers: headers})
  }
}
