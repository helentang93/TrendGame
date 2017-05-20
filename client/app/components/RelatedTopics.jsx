import React from 'react';
import RelatedTopicsItem from './RelatedTopicsItem';

const RelatedTopics = ({ relatedTopics, collectData, findRetailers }) => {
  return (
    <div className="row mb-5">
      <div className="col text-center">
        <small>Related searches</small>
        <ul className="list-inline text-center text-muted">
          {relatedTopics.map((term, index) => {
            return <RelatedTopicsItem key={term} term={term} index={index} collectData={collectData} findRetailers={findRetailers}/>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RelatedTopics;
