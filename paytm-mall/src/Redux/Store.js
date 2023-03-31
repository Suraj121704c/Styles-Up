import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AuthReducer} from './Auth/reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
      AuthReducer 
  });
  
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));