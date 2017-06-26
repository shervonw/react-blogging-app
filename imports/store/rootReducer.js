import { combineReducers } from 'redux';
import { authReducer as auth } from '../ui/modules/auth';
import { appReducer as app } from '../ui/modules/home';

const rootReducer = combineReducers({ auth, app });

export default rootReducer;