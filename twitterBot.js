var net = require('./net.js');
var parser = require('./parser.js');
var TwitterBot = require('prompt');

process.stdout.write('\u001B[2J\u001B[0;0f');
TwitterBot.start();
console.log('Please select whether you want to make a filter request, or a sample request.');
TwitterBot.get(['request'], requestRecieved);

function requestRecieved(err, result)
{
	if (result.request == 'filter')
		filterRequest();
	else if (result.request == 'sample')
		sampleRequest();
	else
		console.log('Invalid request, check your spelling.');
}

function filterRequest()
{
	process.stdout.write('\u001B[2J\u001B[0;0f');
	TwitterBot.start();
	console.log('Please specify what string you are looking for, and for how many seconds would you like to capture tweets.');
	TwitterBot.get(['string', 'time'], filterRequestRecieved);

	function filterRequestRecieved(err, filterResult)
	{
		time = filterResult.time * 1000;
		net.filter(time, filterResult.string, parser);
	}
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