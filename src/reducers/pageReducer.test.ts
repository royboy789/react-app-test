import React, { Reducer } from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// types
import { Page, PageAction } from "./../types/page";
import { RedditPost } from "../types/reddit";

// reducer
import pageReducer, { initialPage, PAGE_ACTIONS } from './pageReducer';

describe('pageReducer', () => {

  it('should return the initial state', () => {
    const initialPageReturn = pageReducer(initialPage, {} as PageAction);
    expect(initialPageReturn).toEqual(initialPage);
  });

  it('should set subreddit properly', () => {
    const newSub = 'wordpress';
    const changeSubredditReturn = pageReducer(initialPage, {type: PAGE_ACTIONS.SET_SUBREDDIT, payload: { subreddit: newSub }});
    expect(changeSubredditReturn.subreddit).toEqual(newSub);
  });

  it('should set posts properly', () => {
    const newPosts = [{} as RedditPost, {} as RedditPost];
    const changePostsReturn = pageReducer(initialPage,{
      type: PAGE_ACTIONS.SET_POSTS,
      payload: {
        posts: newPosts
      }
    });
    expect(changePostsReturn.posts.length).toEqual(newPosts.length);
  });
});