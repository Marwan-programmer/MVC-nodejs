const getDataUsers=require('../module/users')

const getusers=async(req,res)=>{
    try{
    const fetchusers= await getDataUsers.getUsers();
      res.json(fetchusers)
    }catch(err){
        res.send(err)
    }
}


module.exports={getusers}

    
    