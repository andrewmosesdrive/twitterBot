const config = require('./config');
const twit = require('twit');

const T = new twit(config);

// setInterval(postTweet, 60*60*1000);

function postTweet() {
    T.post('statuses/update', { status: 'hmmmm.' })
}

postTweet();

