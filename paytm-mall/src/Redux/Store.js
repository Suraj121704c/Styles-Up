<<<<<<< HEAD

import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AuthReducer} from './Auth/reducer'
import {reducer as AppReducer} from './App/reducer'
import {reducer as AdminReducer} from './Admin/reducer'
import { reducer as electronicsReducer } from "./ProductReducer/reducer";


=======
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from './Admin/reducer'
>>>>>>> main


import { reducer as electronicsReducer } from "./ProductReducer/reducer";
const rootReducer = combineReducers({
  AuthReducer,
  AdminReducer,
  electronicsReducer,
<<<<<<< HEAD
  AppReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

=======
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> main
