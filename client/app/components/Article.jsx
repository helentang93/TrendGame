import React from 'react';
import pocketButton from './../../public/pocketButton';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: this.props.story.media
    };
  }

  handleBrokenImage(event) {
    this.setState({media: ''});
  }


  render() {
    console.log(pocketButton);
    return (
      <div className="col-12 col-md-6">
        <a data-pocket-label="pocket" 
          data-save-url={this.props.story.url}
          data-pocket-count="none" 
          className="pocket-btn" 
          data-lang="en">
        </a>
        <script type="text/javascript">
          {!function (d, i) {
            if (!d.getElementById(i)) {
              var j = d.createElement('script');
              j.id = i;
              j.src = 'https://widgets.getpocket.com/v1/j/btn.js?v=1';
              var w = d.getElementById(i);
              d.body.appendChild(j);
            }
          }( document, 'pocket-btn-js')};
        </script>
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
