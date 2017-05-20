const backDateByMonths = require('./backDate');
const sanitizeRelated = require('./sanitizeRelated');
const axios = require ('axios');

module.exports = (keyword, callback) => {
  const options = {
    keyword: keyword,
    startTime: backDateByMonths(15),
  };

  axios.get('http://dummytrend.herokuapp.com/', {
    params: options,
  }).then(result => {
    callback(null, sanitizeRelated(result.data));
  }).catch(error => {
    callback(error, null);
  });
};
