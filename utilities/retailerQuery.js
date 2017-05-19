const backDateByMonths = require('./backDate');
const sanitizeTrend = require('./sanitizeTrend');
const axios = require ('axios');
const key = require('../lib/env/shopStyleApiKey');

module.exports = (trend, callback) => {
  const options = {
    keyword: trend,
  };
  console.log('retailerQuery: ', `http://api.shopstyle.com/api/v2/products?pid=${key}&fts=${ trend }&offset=0&limit=10`);
  axios.get(`http://api.shopstyle.com/api/v2/products?pid=${key}&fts=${trend}&offset=0&limit=10`, {
    params: options
  }).then(result => {
    console.log('retailerQuery results: ', result);
    // callback(null, result.data);
  }).catch(error => {
    callback(error, null);
  });
};
