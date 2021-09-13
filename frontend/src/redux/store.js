import { createStore } from "redux";
import myPageMenuReducer from "./account/myapge/reducer";
const store = createStore(myPageMenuReducer);

export default store;
