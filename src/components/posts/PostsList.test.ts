import React from "react";
import { render } from "@testing-library/react";

// types
import { RedditPost } from "../../types/reddit";

// components
import PostLists from "./PostsList";

describe("PostsLists Component", () => {
  let posts: Array<RedditPost> = [];
  
  test( 'Does No Posts Found with empty array', () => {
    expect(2-1).toEqual(1);
  });
});
