import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AuthReducer} from './Auth/reducer'
import thunk from "redux-thunk";
import {reducer as AdminReducer} from './Admin/reducer'
import { reducer as electronicsReducer } from "./ProductReducer/reducer";
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
  AuthReducer ,
  AdminReducer,
  electronicsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

