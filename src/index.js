import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC-GccWxz4p8G7c6xlLGOLzXfmJ3Dv88II';


// create a new component. this component should produce some HTML

const App = function() {
  return <div>Hi!!</div>;
}

// take this component's  generated HTML and put it
// on the page ( in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
