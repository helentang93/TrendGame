import React from 'react';

const PocketButton = (props) => {
  return (
    <div>
      <a data-pocket-label="pocket" 
        data-save-url={props.link}
        data-pocket-count="horizontal" 
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
    </div>
  );
};

export default PocketButton;