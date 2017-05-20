import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ chartData, collectData, findRetailers, storyPoint, history, relatedTopics}) => {
  return (
    <div>
      <div className="container">
        <Header/>
        <Body
          chartData={chartData}
          findRetailers={findRetailers}
          collectData={collectData}
          storyPoint={storyPoint}
          history={history}
          relatedTopics={relatedTopics}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
