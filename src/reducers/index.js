import counterReducer from './countReducers';
import loginReducer from './isLogged';

// combine reducers combines all reducers 
import {combineReducers} from 'redux';

 //Combine reducers accepts all reducer objects
const allReducers= combineReducers({
    counter:counterReducer, 
    login:loginReducer});

export default allReducers;