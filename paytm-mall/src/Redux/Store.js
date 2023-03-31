import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as electronicsReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({
  electronicsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
