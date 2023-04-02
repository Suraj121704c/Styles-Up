
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AuthReducer} from './Auth/reducer'
import {reducer as AppReducer} from './App/reducer'
import {reducer as AdminReducer} from './Admin/reducer'
import { reducer as electronicsReducer } from "./ProductReducer/reducer";



const rootReducer = combineReducers({
  AuthReducer,
  AdminReducer,
  electronicsReducer,
  AppReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

