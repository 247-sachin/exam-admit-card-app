import mysql from "mysql2";

export default  mysql.createConnection({
    host: process.env['HOST'],
    user: process.env['USERNAME'],
    password: process.env['PASS'],
    database: process.env['DATABASE'],
})