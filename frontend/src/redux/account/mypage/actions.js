import { MY_PAGE_MENU } from "./types";

export const myPageMenu = (id) => {
  return {
    type: MY_PAGE_MENU,
    payload: id,
  };
};
