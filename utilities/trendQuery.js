const googleTrends = require('google-trends-api');
const backDateByMonths = require('./backDate');
const sanitizeTrend = require('./sanitizeTrend');
const axios = require ('axios');

module.exports = (keyword, callback) => {
  const options = {
    keyword: keyword,
    startTime: backDateByMonths(15),
  };

  axios.get('http://dumbgoogletrends.herokuapp.com/', {
    //url: 'http://dummytrend.herokuapp.com/', 
    params: options,
  }).then(result => {
    callback(null, sanitizeTrend(result.data));
  }).catch(error => {
    callback(error, null);
  });
};
