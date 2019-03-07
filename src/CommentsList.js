import React from 'react';
import Comment from './CommentContainer';

class CommentsList extends React.Component {
  constructor({comments, addComment}){
    super({comments, addComment});
    this.state  = {
      value: ''
    }
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addComment(this.state.value);
  }

  render() {
    return  (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type={'text'} placeholder={'Comment'} onChange={this.handleChange}/>
        <button type={'submit'}>Add Comment</button>
      </form>
      <ul>
        {this.props.comments.map(comment => <Comment key={comment.id} {...comment}/>)}
      </ul>
      </div>
    );
  }
}
/*
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
*/
export default CommentsList;
