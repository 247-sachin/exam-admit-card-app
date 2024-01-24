import mysql from "mysql2";

export default  mysql.createConnection({
    host: "admit-card.c70mgci0m5j4.ap-south-1.rds.amazonaws.com",
    user: "admit_card_user",
    password: "Sunny123##",
    database: "admit_card_db"
})