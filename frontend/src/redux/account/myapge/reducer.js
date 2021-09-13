import { MY_PAGE_MENU } from "./types";

const initialState = {
  myPageMenu: 0,
};
const myPageMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PAGE_MENU:
      return {
        ...state,
        myPageMenu: action.payload,
      };
    default:
      return state;
  }
};

export default myPageMenuReducer;
