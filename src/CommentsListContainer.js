import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './action.js';


const mapStateToProps = state => {
console.log('cos2', state);
return ({
  comments: state.comments
});
}

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text))
  });

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
