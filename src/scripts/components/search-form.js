import React from 'react';
import _ from 'underscore';

console.log('Search form loaded'); // eslint-disable-line

const elements = [
  <h2 key="0">Search Form</h2>,
  <p key="1"><a href="/search">Search</a></p>,
];

const SearchForm = () => (
  <div>
    { _.each(elements, element => element) }
  </div>
);

export default SearchForm;
