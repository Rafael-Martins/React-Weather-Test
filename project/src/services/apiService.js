import axios from "axios";
import crypto from "crypto";
import OAuth from "oauth-1.0a";

function hash_function_sha1(base_string, key) {
  return crypto
    .createHmac("sha1", key)
    .update(base_string)
    .digest("base64");
}

const oauth = OAuth({
  consumer: {
    key: "dj0yJmk9MTM4TXBrMzVOZFBNJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWU0",
    secret: "8c248f9488e193311ef5d89ff6f05fe020e3e031"
  },
  signature_method: "HMAC-SHA1",
  hash_function: hash_function_sha1
});

const GET_FORECAST_RSS = location => {
  const request_data = {
    url: `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json&u=c&language=pt-br`,
    method: "get"
  };

  return axios
    .get(request_data.url, {
      headers: {
        ...oauth.toHeader(oauth.authorize(request_data)),
        "Yahoo-App-Id": "9WTQzP5c"
      }
    })
    .then(res => {
      return res.data;
    });
};

export { GET_FORECAST_RSS };
