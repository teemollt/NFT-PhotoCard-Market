import { createStore } from "redux";
import myPageMenuReducer from "./reducer";


const store = createStore(myPageMenuReducer);

export default store;