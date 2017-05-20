const backDateByMonths = require('./backDate');
const sanitizeTrend = require('./sanitizeTrend');
const axios = require ('axios');
const key = require('../lib/env/shopStyleApiKey');

module.exports = (trend, callback) => {
  const options = {
    keyword: trend,
  };
  axios.get(`http://api.shopstyle.com/api/v2/products?pid=${key}&fts=${trend}&offset=0&limit=10`, {
    params: options
  }).then(result => {
    callback(null, result.data.products);
  }).catch(error => {
    callback(error, null);
  });
};
