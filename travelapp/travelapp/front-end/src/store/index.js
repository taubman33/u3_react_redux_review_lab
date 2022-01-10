import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import DestinationReducer from "./reducers/DestinationReducer";

const reducer = combineReducers({
  destinationState: DestinationReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
