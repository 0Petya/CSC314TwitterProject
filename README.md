You can install node.js here:
https://nodejs.org/

To run the program, you can just run with 

````
$ node twitterBot.js
````

Currently, it just runs for 5 seconds. It'll grab the tweets, and place them in the unparsedTweets folder. Then it'll seperate the tweet by fields and place it in the parsedTweets folder.

twitterBot.js is the main program that starts everything.
net.js is what captures the tweets.
parser.js seperates the tweet into it's respective fields.