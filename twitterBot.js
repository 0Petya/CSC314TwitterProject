var net = require('./net.js');
var parser = require('./parser.js');

var time = 5;
var currentTime = (Date.now() / 1000 | 0);
var stopTime = currentTime + time;

net(stopTime, parser);