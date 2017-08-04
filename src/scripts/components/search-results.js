import React from 'react';
import _ from 'lodash';

console.log('Search results loaded'); // eslint-disable-line

const elements = [
  <h2 key="0">Search Results</h2>,
  <p key="1">Result 1</p>,
  <p key="2">Result 2</p>,
];

const SearchResults = () => (
  <div>
    { _.each(elements, element => element) }
  </div>
);

export default SearchResults;
