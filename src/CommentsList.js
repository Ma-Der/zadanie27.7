import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) => {
console.log('commen', comments);
let text;
  return  (
    <div>
    <form onSubmit={ (e) => {addComment(text); e.preventDefault(); }}>
      <input type={'text'} placeholder={'Comment'} onChange={(e) => {text = e.target.value;}}/>
      <button type={'submit'}>Add Comment</button>
    </form>
    <ul>
      {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
    </ul>
    </div>
  )
}

export default CommentsList;
