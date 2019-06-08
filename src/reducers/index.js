import {combineReducers} from 'redux';
import commentsReducers from './Comments';

export  default combineReducers({
    comments:commentsReducers
})

