var express = require('express');
var app = express();
var loginApi = require('./router/login.js');
var cors = require('cors');
app.use(cors());


app.use('/',loginApi);
app.listen(3000);