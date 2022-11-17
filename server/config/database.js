const mysql = require('mysql2/promise');
require("dotenv").config();

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: '0329',
    database: 'umc_test',
});


module.exports = {
    pool: pool
};