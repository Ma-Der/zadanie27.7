import React from 'react';
import Comment from './CommentContainer';
import {addComment} from './action.js';

const CommentsList = ({comments}) => {
console.log('commen', comments);
let text;
  return  (
    <div>
    <form onSubmit={ (e) => {addComment(text); e.preventDefault(); console.log(addComment(text));}}>
      <input type={'text'} placeholder={'Comment'} onChange={(e) => {text = e.target.value; console.log(e.target.value);}}/>
      <button type={'submit'}>Add Comment</button>
    </form>
    <ul>
      {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
    </ul>
    </div>
  )
}

export default CommentsList;
