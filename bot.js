const config = require('./config');
const twit = require('twit');
const _ = require('lodash');

const T = new twit(config);

let siegwardQuotes = [
    'Hmm... Mmmmmm...',
    'Pardon me, I was absorbed in thought.',
    "To be honest, I'm in a bit of a pickle.",
    "Have you ever walked near a white birch, only to be struck by a great arrow?",
    "I've got to use my head. And think.",
    "Don't disappear like that. You had me downright worried.",
    "Thanks to you, an epiphany has struck me sqaure in the head.",
    "I've unravelled the riddle of this inscrutable lift!",
    "I'm not exactly sure what happened.",
    "Now, now, think twice before you go down that road.",
    "Well, it's too late now.",
    "We Unkindled must put our duties first.",
    "To your valour, my sword, and our victory together. Long may the Sun shine!",
    "Well, I'm going to have myself a little nap. The only thing to do, really, after a nice toast.",
    "I'm loathe to admit it, but I've been had.",
    "I'm in quite a pickle indeed.",
];

let quote = _.sample(siegwardQuotes); ;

function postTweet() {
    T.post('statuses/update', { status: quote })
}

setInterval(postTweet(), 60*60*1000)

