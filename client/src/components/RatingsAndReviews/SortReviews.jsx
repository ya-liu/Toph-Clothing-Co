import React from 'react';

const SortReviews = (props) => (
  <select value="relevance">
    <option value="relevance">relevance</option>
    <option value="newest">newest</option>
    <option value="helpful">helpful</option>
  </select>
);

export default SortReviews;