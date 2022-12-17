import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import musicReducer from "./music-reduser";
import musicPlaybackReduser from "./musicPlayback-reduser";


let reducers = combineReducers({
   music: musicReducer,
   playback: musicPlaybackReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;