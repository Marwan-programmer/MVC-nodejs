const express = require('express')
const app = express();
const mysql = require('mysql');
const { send } = require('process');

app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())

const routerUse=require('./routes/users')
app.use('/',routerUse)








app.listen(3000,()=>{

    console.log("you are listing to port 3000")
})