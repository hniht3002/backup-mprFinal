import { combineReducers } from 'redux';
import orientationReducer from './orientationReducer';
import playerReducer from './playerReducer';
import timerReducer from './timerReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    orientationReducer,
    playerReducer,
    eventReducer
    // Add other reducers here
});

export default rootReducer;