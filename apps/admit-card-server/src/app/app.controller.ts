import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

import { AppService } from './app.service';
import apiConstants from './api-constants/api-constants';
import { admitcard, studentinfo } from './models/admit-card.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(apiConstants.getStudentData)
  getStudentData(@Body() studentdata : studentinfo) {
    console.log("studentdata", studentdata);
    try{
      return this.appService.getAdmitCard(studentdata);
    }
    catch(e){
      console.log(e);
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR); 
    }
  }

  @Post(apiConstants.admitCardDataUpload)
  uploadExcelData(@Body() excelJson : admitcard[]){
    console.log("Input body:", excelJson);
    try{
      return this.appService.uploadExcel(excelJson);
    }
    catch(e){
      console.log(e);
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR); 
    }
  }
}
