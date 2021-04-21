require('dotenv').config();
const twit = require('twit');
const _ = require('lodash');
const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const T = new twit(config);

let siegwardQuotes = [
    'Hmm... Mmmmmm...',
    'Pardon me, I was absorbed in thought.',
    "To be honest, I'm in a bit of a pickle.",
    "Have you ever walked near a white birch, only to be struck by a great arrow?",
    "I've got to use my head. And think.",
    "Don't disappear like that. You had me downright worried.",
    "Thanks to you, an epiphany has struck me square in the head.",
    "I've unravelled the riddle of this inscrutable lift!",
    "I'm not exactly sure what happened.",
    "Now, now, think twice before you go down that road.",
    "Well, it's too late now.",
    "We Unkindled must put our duties first.",
    "To your valour, my sword, and our victory together. Long may the Sun shine!",
    "Well, I'm going to have myself a little nap. The only thing to do, really, after a nice toast.",
    "I'm loathe to admit it, but I've been had.",
    "I'm in quite a pickle indeed.",
    "On some days, I begin to doubt myself.",
    "I'm no coward, and I've a steady hand, but that thing makes my skin crawl.",
    "Long may the Sun shine!",
    "Great planning begets great fortune. An old tenet of the Knights of Catarina.",
    "My liberation requires a key. But the key is outside... Hmm... A riddle for the ages..."
];

let quote = _.sample(siegwardQuotes);

function postTweet() {
    console.log('Siegward just tweeted: ' + quote)
    T.post('statuses/update', { status: quote })
}

postTweet();


