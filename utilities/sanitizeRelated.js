module.exports = (list) => {
  var receivedData = list.default.rankedList[0].rankedKeyword.slice(1, 11);
  
  var cleanData = [];
  receivedData.map((data) => {
    cleanData.push(data.query);
  });
  console.log(cleanData);
  return cleanData;
};