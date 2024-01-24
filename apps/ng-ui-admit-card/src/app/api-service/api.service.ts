import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = '';
  uploadAdmitCardData(data:any){
    return this.http.post(this.apiUrl,data)
  }
}
