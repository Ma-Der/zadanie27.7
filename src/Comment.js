import React from 'react';

const Comment = ({text, votes, id, thumbsUp, thumbsDown, removeComment}) => {
  return (
  <li>
    {text} {' '}
    <span>votes: {votes}</span>
    <button onClick={() => thumbsUp(id)}>Thumb up</button>
    <button onClick={() => thumbsDown(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>X</button>
  </li>
)};

export default Comment;
