import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC-GccWxz4p8G7c6xlLGOLzXfmJ3Dv88II';


// create a new component. this component should produce some HTML

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// take this component's  generated HTML and put it
// on the page ( in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
