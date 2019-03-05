import React from 'react';

const Comment = ({text, votes, id, thumbsUp}) => {
  return (
  <li>
    {text} {' '}
    <span>votes: {votes}</span>
    <button onClick={() => thumbsUp(id)}>Thumb up</button>
  </li>
)};

export default Comment;
