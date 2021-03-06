var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');



 var app = express();

  app.use(bodyParser.json);
  app.use(bodyparser.urlencoded({extended:false}));
  app.use(cors());
  

  var fetch = require('./fetch/fetch');
  app.use('/fetch', fetch);

  var insert = require('./insert/insert');
  app.use('/insert', insert);

  var update = require('./update/update');
  app.use('/update',update);\

  var remove = require('./delete/delete');
  app.use('/delete',remove);


  app.listen(8080);
  console.log('server listening on port number 8080'); 