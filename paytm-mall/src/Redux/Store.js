import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./Admin/reducer";
import { reducer as electronicsReducer } from "./ProductReducer/reducer";
const rootReducer = combineReducers({
  AuthReducer,
  AdminReducer,
  electronicsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
