import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./Admin/reducer";
import { reducer as electronicsReducer } from "./ProductReducer/reducer";
import { reducer as CarouselReducer } from "./HomeReducer/reducer";

const rootReducer = combineReducers({
  AdminReducer,
  electronicsReducer,
  CarouselReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
