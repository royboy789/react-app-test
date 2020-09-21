import React, { useEffect, useState, useReducer } from "react";
import "./App.scss";

// Types
import { RedditAPIResponse } from "./types/reddit";
import { Page } from "./types/page";

// Services
import RedditApiService from "./services/redditApiService";

// Reducers
import pageReducer, { initialPage, PAGE_ACTIONS } from "./reducers/pageReducer";

// Components
import Header from "./components/header/SiteHeader";
import Posts from "./components/posts/Posts";

/**
 * Main App
 */
function App() {
  const [pageState, pageDispatch] = useReducer(pageReducer, initialPage);
  const { subreddit, posts } = pageState;

  /**
   * Initial Render - set reactjs as default subreddit
   */
  useEffect(() => {
    pageDispatch({
      type: PAGE_ACTIONS.SET_SUBREDDIT,
      payload: {
        subreddit: "reactjs",
      },
    });
  }, []);

  /**
   * When Subreddit Changes
   */
  useEffect(() => {
    if (!subreddit) {
      return;
    }
    // inititate new service
    // @TODO - check performance implications over multiple changes
    const redditService = new RedditApiService(subreddit);
    redditService.getPosts().then((res) => {
      // set page posts
      pageDispatch({
        type: PAGE_ACTIONS.SET_POSTS,
        payload: {
          posts: res.children,
        },
      });
    });
  }, [subreddit]);

  /**
   * Callback From Header - sets subreddit on form submit
   *
   * @param subreddit
   */
  function setSubreddit(subreddit: string) {
    pageDispatch({
      type: PAGE_ACTIONS.SET_SUBREDDIT,
      payload: {
        subreddit: subreddit,
      },
    });
  }

  /**
   * @TODO - add react-area where I can
   */
  return (
    <div id={"page"} className={"page"} data-testid={"page"}>
      <Header changeSubreddit={setSubreddit}></Header>
      <h2
        className={"current-subreddit-title"}
        data-testid={"current-subreddit-title"}
      >
        {subreddit}
      </h2>
      <div
        className={"current-subreddit-posts"}
        data-testid={"current-subreddit-posts"}
      >
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default App;
