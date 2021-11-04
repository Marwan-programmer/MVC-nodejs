const { createConnection } = require("mysql")
const mysql=require('mysql')
const confg = {

    host: 'sql4.freemysqlhosting.net',
    user: 'sql4444727',
    password: '9kYNfevp2u',
    database: 'sql4444727'
}

/////test database

const pool=mysql.createPool(confg);

module.exports=pool;

