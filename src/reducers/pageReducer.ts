import { Reducer } from "react";
import { RedditPost } from "../types/reddit";

// types
import { Page, PageAction } from "./../types/page";

// services
import RedditApiService from "./../services/redditApiService";

// globals
export const PAGE_ACTIONS = {
  SET_SUBREDDIT: "set-subreddit",
  SET_POSTS: "set-posts",
};

export const initialPage: Page = {
  subreddit: "",
  posts: <RedditPost[]>[],
  page: 1,
  per_page: 10,
};

const pageReducer: Reducer<Page, PageAction> = (
  state: Page,
  action: PageAction
) => {
  let newPage = {} as Page;
  switch (action.type) {
    case PAGE_ACTIONS.SET_SUBREDDIT:
      newPage = { ...state, subreddit: action.payload?.subreddit };
      return newPage;
    case PAGE_ACTIONS.SET_POSTS:
      newPage = { ...state, posts: action.payload?.posts };
      return newPage;
  }
  return state;
};

export default pageReducer;
