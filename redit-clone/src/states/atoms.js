import { atom } from "recoil";
export const postState = atom({
  key: "posting",
  default: [],
});

export const commentState = atom({
  key: "commenting",
  default: [],
});

export const userState = atom({
  key: "users",
  default: [],
});

export const addNewPost = atom({
  key: "addNewPost",
  default: {
    firstName: "",
    lastName: "",
    image: "",
    reactions: 0,
    title: "",
    text: "",
    tags: [],
  },
});

export const allDatasState = atom({
  key: "allData",
  default: [],
});

export const searchBarState = atom({
  key: "searchBaren",
  default: "",
});

export const likePostState = atom({
  key: "likePostState",
  default: 0,
});

export const likeCommentsState = atom({
  key: "likeCommentsState",
  default: 0,
});
