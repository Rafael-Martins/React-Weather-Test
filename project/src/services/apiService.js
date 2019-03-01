import axios from "axios";
import crypto from "crypto";
import OAuth from "oauth-1.0a";

function hashFunctionSha1(baseString, key) {
  return crypto
    .createHmac("sha1", key)
    .update(baseString)
    .digest("base64");
}

const oauth = OAuth({
  consumer: {
    key: "dj0yJmk9MTM4TXBrMzVOZFBNJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWU0",
    secret: "8c248f9488e193311ef5d89ff6f05fe020e3e031"
  },
  signature_method: "HMAC-SHA1",
  hash_function: hashFunctionSha1
});

const getForecastRss = location => {
  const requestData = {
    url: `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json&u=c&language=pt-br`,
    method: "get"
  };

  return axios
    .get(requestData.url, {
      headers: {
        ...oauth.toHeader(oauth.authorize(requestData)),
        "Yahoo-App-Id": "9WTQzP5c"
      }
    })
    .then(res => {
      return res.data;
    });
};

export { getForecastRss };
