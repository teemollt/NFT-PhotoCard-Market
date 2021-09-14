import { createStore } from "redux";
import myPageMenuReducer from "./account/mypage/reducer";


const store = createStore(myPageMenuReducer);

export default store;