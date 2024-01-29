import mysql from "mysql2";

export default  mysql.createConnection({
    host: process.env['HOST'],//"admit-card.c70mgci0m5j4.ap-south-1.rds.amazonaws.com",
    user: process.env['USERNAME'],//"admit_card_user",
    password: process.env['PASS'],//"Sunny123##",
    database: process.env['DATABASE'],//"admit_card_db"
})