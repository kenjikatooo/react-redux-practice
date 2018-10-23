import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyC-GccWxz4p8G7c6xlLGOLzXfmJ3Dv88II';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// create a new component. this component should produce some HTML

class App extends Component {
  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

// take this component's  generated HTML and put it
// on the page ( in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
