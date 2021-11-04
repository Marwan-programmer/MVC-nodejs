const express=require('express')
const router=express.Router()
const getUser=require('../controlers/users')



router.get('/',getUser.getusers)
    
    module.exports=router;