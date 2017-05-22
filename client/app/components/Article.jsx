import React from 'react';
import PocketButton from './PocketButton';
import FacebookButton from './FacebookButton';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: this.props.story.media,
      link: this.props.story.url
    };
  }

  handleBrokenImage(event) {
    this.setState({media: ''});
  }

  render() {
    return (
      <div className="col-12 col-md-6">
        <div className="container-fluid">
          <div className="row"> 
            <FacebookButton link={this.state.link}/>
            <PocketButton link={this.state.link}/>
          </div>
        </div>
        <a href={this.props.story.url} target="_blank" className="card-clickable">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={this.state.media}
              onError={e => { this.handleBrokenImage(e); }}
            />
            <div className="card-block">
              <h3 className="h4 card-title">{this.props.story.headline}</h3>
              <p className="card-text">{this.props.story.summary}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Article;
