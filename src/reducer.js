import {combineReducers} from 'redux';
import {comments} from './comments';
import {users} from './users';

export const app = combineReducers({
  comments,
  users
});

export default app;
