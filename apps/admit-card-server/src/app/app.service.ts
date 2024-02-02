import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import dbConnect from './config/db.connect';
import { admitcard, studentinfo } from './models/admit-card.model';
import { OkPacket } from "mysql2";


@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  /**
   * Function to upload excel data to database
   * @param excelArray 
   * @returns 
   */
  async uploadExcel(excelArray:admitcard[]):Promise<any> {
    return new Promise(async (resolve, reject)=>{
      const bulkinsertions = this.stringUtility(excelArray);
      console.log("bulkinsertions", bulkinsertions);
      console.log(`INSERT INTO admit_card_user_data 
      (seat_number, student_name, gender, dob, school_id, school_name, exam_date, exam_center_code, exam_center_name,  exam_time_1, exam_time_2, standard) 
      VALUES  ${bulkinsertions}`);
      dbConnect.query<OkPacket>(`INSERT INTO admit_card_user_data 
      (seat_number, student_name, gender, dob, school_id, school_name, exam_date, exam_center_code, exam_center_name,  exam_time_1, exam_time_2, standard) 
      VALUES  ${bulkinsertions}`,
      (err, res)=>{
        if(err){
          console.log(err);
          reject(err);
        }
        else{
          console.log("Database response:");
          console.log(res);
          resolve(res);
        }
      })
    });
  }

  async getAdmitCard(studentInfo: studentinfo){

    return new Promise(async (resolve, reject)=>{
      // console.log("Connecting to db");
      // await dbConnect.connect();
      // console.log("Connected Successfully");
      const dobarray = studentInfo.dob.split('/');
      const adding20 =  '20'+ dobarray[2];
      dobarray[2] = adding20;
      const fullDOB = dobarray.join('/');

      dbConnect.query<admitcard[]>(`select * from admit_card_user_data where seat_number = '${studentInfo.seat_number}' and (dob = '${studentInfo.dob}' or dob = '${fullDOB}')`,(err, res)=>{
        if(err){
          console.log(err);
          // dbConnect.end();
          reject(err);
        }
        else{
          console.log("Database response:");
          console.log(res);
          // dbConnect.end();
          // console.log("dbConnect ended");
          resolve(res);
        }
      })
    });
  }

  stringUtility(input: any[]){
    let stringarray = [];
    for(let i of input){
      stringarray.push(
      `('${i["EXAM SEAT NO."]}', '${i["STUDENT NAME"]}', '${i["GENDER"]}', '${i["DATE OF BIRTH"]}', '${i["SCHOOL UDISE"]}', '${i["SCHOOL NAME"]}', '${i["EXAM DATE"]}',
      '${i["CENTRE CODE"]}', '${i["EXAM CENTRE NAME"]}', '${i["PAPAR 1"]}', '${i["PAPAR 2"]}', '${i["STANDERD"]}')`
      )
    }
    return stringarray.toString();
  }
}
