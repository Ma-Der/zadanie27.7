import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbsUp} from './action.js';

const mapDispatchToProps = dispatch => ({
  thumbsUp: (id) => dispatch(thumbsUp(id))
});

export default connect(null, mapDispatchToProps)(Comment);
