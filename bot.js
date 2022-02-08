require("dotenv").config();
const twit = require("twit");
const _ = require("lodash");
const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const T = new twit(config);

let responses = [
  "git gud scrub",
  "get off twitter nerd",
  "how's your blood pressure?",
  "WWMZD?",
  "you should delete this app, it's bad for you",
  "trust the process bro",
  "#sprots",
  "OK boomer",
  "typical fedboi",
];

function replyToTweet(idString, reply) {
  T.post(
    "statuses/update",
    {
      status: reply,
      in_reply_to_status_id: idString,
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}

function getTweets() {
  T.get(
    "statuses/user_timeline",
    { user_id: "49189455" },
    (error, data, res) => {
      const mostRecentId = data.shift().id_str;
      const randomId = _.sample(data).id_str;
      const id = Math.random() < 0.5 ? mostRecentId : randomId;
      const reply = "@_jason_777" + " " + _.sample(responses);
      replyToTweet(id, reply);
    }
  );
}

getTweets();