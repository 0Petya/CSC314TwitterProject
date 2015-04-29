var Twit = require('twit');
var fs = require('fs');

function net(stopTime, doneNetting)
{
	var T = new Twit
	({
	    consumer_key:         'H8XDIUGhj1MbwGrdevTWjAE42'
	  , consumer_secret:      'Gfwhp84TS2hpbooBJ1lYAYbFE9zvtk5BuronpYoOw5fiCuT9oQ'
	  , access_token:         '3171126109-V5djIva6b07Ju9rf4OQiFfN0mqTI8WKmJFIER9K'
	  , access_token_secret:  'zTylnQhRKuGiGhIibKjQU2RGjLyp3fT0JoCokdGnzyMfN'
	})

	var stream = T.stream('statuses/sample')

	i = 0;
	stream.on('tweet', gotTweet)

	function gotTweet(tweet)
	{
		fs.writeFileSync('./unparsedTweets/tweet' + i + '.txt', JSON.stringify(tweet))

		i++;
		if ((Date.now() / 1000 | 0) > stopTime)
		{
			stream.stop();
			console.log('Caught ' + i + ' tweets!');
			doneNetting(i);
		}
	}
}

module.exports = net;