var net = require('./net.js');
var parser = require('./parser.js');
var TwitterBot = require('prompt');

process.stdout.write('\u001B[2J\u001B[0;0f');
TwitterBot.start();
console.log('Please select whether you want to make a sample, track, or location request.');
TwitterBot.get(['request'], requestRecieved);

function requestRecieved(err, result)
{
	if (result.request == 'sample')
		sampleRequest();
	else if (result.request == 'track')
		trackRequest();
	else if (result.request == 'location')
		locationRequest();
	else
		console.log('Invalid request, check your spelling.');
}

function sampleRequest()
{
	process.stdout.write('\u001B[2J\u001B[0;0f');
	TwitterBot.start();
	console.log('Please specify for how many seconds would you like to capture tweets.');
	TwitterBot.get(['time'], sampleRequestRecieved);

	function sampleRequestRecieved(err, sampleResult)
	{
		time = sampleResult.time * 1000;
		net.sample(time, parser);
	}
}

function trackRequest()
{
	process.stdout.write('\u001B[2J\u001B[0;0f');
	TwitterBot.start();
	console.log('Please specify what string you are looking for, and for how many seconds would you like to capture tweets.');
	TwitterBot.get(['string', 'time'], trackRequestRecieved);

	function trackRequestRecieved(err, trackResult)
	{
		time = trackResult.time * 1000;
		net.track(time, trackResult.string, parser);
	}
}

function locationRequest()
{
	process.stdout.write('\u001B[2J\u001B[0;0f');
	TwitterBot.start();
	console.log('Please specify the bounding box of coordinates of where you would like to look, and for how many seconds would you like to capture tweets.');
	TwitterBot.get(['coordinates', 'time'], locationRequestRecieved);

	function locationRequestRecieved(err, locationResult)
	{
		time = locationResult.time * 1000;
		net.location(time, locationResult.coordinates, parser);
	}
}