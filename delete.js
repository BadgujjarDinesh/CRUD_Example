var con = require('../db_connection');
var connection = con.getConnection();
connection.connect();
var express = require('express');
const e = require('express');

var router = express.Router();

router.post('/',(req, res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_salary = req.body.e_salary;
    connection.query("delete from employees where e_id = '+e_id+'", 
     (err, result)=>{
         if(err){
             res.send({"delete":"fail"});
         }
         else{
             res.send({"delete":"success"});
         }

    });
});

module.exports = router;