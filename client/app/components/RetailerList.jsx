import React from 'react';
import Retailer from './Retailer.jsx';

const RetailerList = (props) => {
  let trend = props.trend;
  let retailers;

  if (trend !== '') {
    retailers = (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2 className="h4 mb-4">
                <strong>Where</strong> can you find <strong className="text-lowercase">{trend}</strong>?
              </h2>
            </div>
          </div>
          <div className="row">
            {props.foundRetailers.map(retailer => {
              return <Retailer key={retailer.id} retailer={retailer}/>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    retailers = <div></div>;
  }
  return retailers;
};

export default RetailerList;
