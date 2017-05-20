import React from 'react';

class Retailer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      media: props.retailer.image.sizes.Best.url
    };

  }

  handleBrokenImage(event) {
    this.setState({media: 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'});
  }

  render() {

    return (
      <div className="col-12 col-md-6">
        <a href={this.props.retailer.clickUrl} className="card-clickable">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={this.state.media}
              onError={e => { this.handleBrokenImage(e); }}
            />
            <div className="card-block">
              <h3 className="h4 card-title">{this.props.retailer.brandedName}</h3>
              <p className="card-text">{this.props.retailer.description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Retailer;
