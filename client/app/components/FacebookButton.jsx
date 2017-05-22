import React from 'react';

const FacebookButton = (props) => {
  return (
    <div>
      <div id="fb-root"></div>
        <script>{(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))};</script>
      <div className="fb-share-button" 
            data-href={props.link} 
            data-layout="button" 
            data-size="small" 
            data-mobile-iframe="true">
        <a className="fb-xfbml-parse-ignore" 
            target="_blank" 
            href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'>
          Share</a>
      </div>
    </div>    
  );
};

export default FacebookButton;