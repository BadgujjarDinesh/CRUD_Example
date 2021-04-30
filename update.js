var con = require('../db_connection');
var connection = con.getConnection();
connection.connect();
var express = require('express');

var router = express.Router();

router.post('/',(req, res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_salary = req.body.e_salary;
    connection.query('update employee set e_name= "+e_name+", e_salary= "+e_salary+" where e_id= "e_id"', 
     (err, result)=>{
         if(err){
             res.send({"update":"fail"});
         }
         else{
             res.send({"update":"success"});
         }

    });
});

module.exports = router;