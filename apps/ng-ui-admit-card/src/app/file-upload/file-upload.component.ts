import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import  * as XLSX  from 'xlsx';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'admit-card-app-file-upload',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  fileToUpload:any;
  constructor(private apiService: ApiService){

  }
  fileChange(event:any){
    if(event.target.files.length != -1) this.fileToUpload = event.target.files[0];
  }

  uploadFile(){
    if(!this.fileToUpload){
      return alert("No file selected.");
    }
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(this.fileToUpload);
    fileReader.onload = (fileEvent:any)=>{
      console.log(fileEvent);
      let binaryData = fileEvent.target.result;
      let workbook = XLSX.read(binaryData, {type: 'binary' }); //, 
      workbook.SheetNames.forEach(sheet=>{
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {raw: false});
        // for(const d of data){
        //   d["EXAM DATE"] = this.ExcelDateToJSDate(d["EXAM DATE"]);
        // }
        data.map((d:any)=>{
          console.log("DATE OF BIRTH", d["DATE OF BIRTH"]);
          if(typeof d["EXAM DATE"] !== "string")
          d["EXAM DATE"] = this.ExcelDateToJSDate(d["EXAM DATE"]);

          if(typeof d["DATE OF BIRTH"] !== "string")
          d["DATE OF BIRTH"] = this.ExcelDateToJSDate(d["DATE OF BIRTH"]);
        })
        console.log(data);
      })
    }
  }

  ExcelDateToJSDate(serial:number) {
    const utc_days  = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;                                
    const date_info = new Date(utc_value * 1000);
       
    console.log("date_info", date_info);
    return  `${date_info.getDate()}/${date_info.getMonth() +1}/${date_info.getFullYear()}`;
 }

 

}
