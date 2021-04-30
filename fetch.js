var conn = require('../db_connection');
var connection = conn.getConnection();
connection.connect();
var express = require('express');
const { Router } = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
connection.query('select * from employees', (err, Array, fields)=>{
    res.send(Array);
});


});

module.exports = router;
