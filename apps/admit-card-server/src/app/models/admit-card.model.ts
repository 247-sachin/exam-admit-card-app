import { RowDataPacket } from 'mysql2';

export interface admitcard extends RowDataPacket {
    id?: number;
    seat_number?: string;
    gender?: string;
    dob?: string;
    school_id?: string;
    exam_date?: string;
    exam_center_code?: string;
    exam_center_name?: string;
    exam_time_1?: string;
    exam_time_2?: string;
}

export interface studentinfo extends RowDataPacket {
    seat_number?: string;
    dob?: string;
}