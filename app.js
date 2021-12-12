var express = require('express');
var app = express();
const path = require('path')
var routing = require('./routing');
app.use('/',routing);
app.use(express.static(__dirname))
app.listen(5050);
console.log('serever is running..!')