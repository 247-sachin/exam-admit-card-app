"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = require("mysql2");
exports.default = mysql2_1.default.createConnection({
    host: "admit-card.c70mgci0m5j4.ap-south-1.rds.amazonaws.com",
    user: "admit_card_user",
    password: "Sunny123##",
    database: "admit_card_db"
});
//# sourceMappingURL=db.connect.js.map