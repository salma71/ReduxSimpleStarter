import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
//just renaming reducer to formreducer
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
