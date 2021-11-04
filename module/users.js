const pool=require('../confg/confg')



function getUsers()
{
    return new Promise(function(resolve, reject) {
        // The Promise constructor should catch any errors thrown on
        // this tick. Alternately, try/catch and reject(err) on catch
        pool.query('Select * from Posts',(err,result)=>{
            if(err){ return reject (err)}
    
            resolve(result) 
            
            })
    });
}




module.exports={getUsers}