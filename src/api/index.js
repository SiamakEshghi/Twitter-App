import axios from 'axios';
import oauth_signature from 'oauth-signature';

const BASE_URL = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const CONSUMER_API_KEY = 'NYacu91G3zZP7ljQUcWoiS1kB';
const CONSUMER_API_SECRET_KEY = 'y4oFGPMhdDrf8xiePMKAh2Uz2KJlr7shby5RFJMBHr8udBKTE9';
const ACCESS_TOKEN = '1020146905-suczRMj63WSVSdMFX9s4sxzLhUUcFLuuWX8LkET';
const ACCESS_TOKEN_SECRET = 'vnC0jAyRcO2OV4B596YpZ10vHD41v1HZfHokUWDlyXFtZ';
let unixtime=Math.round((new Date()).getTime() / 1000.0);
let nonce = randomString(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
let parameters = {
    oauth_consumer_key : CONSUMER_API_KEY,
    oauth_nonce : nonce,
    oauth_signature_method : 'HMAC-SHA1',
    oauth_timestamp : unixtime,
    oauth_token : ACCESS_TOKEN,
    oauth_version : '1.0',
    screen_name:'twitterapi',
    callback: 'twitterCallback'
}
const httpMethod = 'GET';
var signature = oauth_signature.generate(httpMethod, BASE_URL, parameters, CONSUMER_API_SECRET_KEY, ACCESS_TOKEN_SECRET,
    { encodeSignature: true});

const MAX_TWEETS = 10;

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}
export const getTweets = (twitter) => {
    // console.log(`Nonc: ${nonce}`);
    // console.log(`Unixtime: ${unixtime}`);
    // console.log(`Signature: ${signature}`);
    return new Promise((resolve, reject) => {
        axios({
            baseURL: BASE_URL,
            headers: {
                'Authorization':
                    'OAuth oauth_consumer_key=\"' + 
                    CONSUMER_API_KEY + 
                    "\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"" + 
                    unixtime + 
                    "\", oauth_nonce=\"" + 
                    nonce + 
                    "\", oauth_version=\"1.0\", oauth_token=\"" + ACCESS_TOKEN + 
                    "\", oauth_signature=\"" + signature + "\""
            },
            params: {
                screen_name: twitter,
                count: MAX_TWEETS
            }
        }).then((result) => {
            resolve(result.data.map((tweet) => tweet.text))
        })
        .catch((err) => reject(err));
    })
}