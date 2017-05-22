import React from 'react';
import TrendChart from './Chart';
import Input from './Input';
import History from './History';
import RelatedTopics from './RelatedTopics';
import ArticleList from './ArticleList';
import RetailerList from './RetailerList';

const Body = ({ collectData, findRetailers, history, chartData, storyPoint, relatedTopics }) => {
  return (
    <div className="row">
      <div className="col col-m-10 offset-m-1 col-lg-8 offset-lg-2">
        <Input collectData={collectData} findRetailers={findRetailers}/>
        <History history={history} collectData={collectData} findRetailers={findRetailers}/>
        <RelatedTopics relatedTopics={relatedTopics} collectData={collectData} findRetailers={findRetailers}/>
        <TrendChart chartData={chartData} storyPoint={storyPoint}/>
        <div className="container-fluid">
          <div className="row"> 
            <RetailerList trend={chartData.trend} foundRetailers={chartData.retailers}/>
            <ArticleList trend={chartData.trend} storyPoint={storyPoint}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

