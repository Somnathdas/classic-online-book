import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
    onlineBook: bookReducer
});

export default rootReducer;