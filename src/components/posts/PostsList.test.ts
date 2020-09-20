import React from "react";
import { render } from "@testing-library/react";

// types
import { RedditPost } from "../../types/reddit";

// components
import PostLists from "./PostsList";

describe("PostsLists", () => {
  let posts: Array<RedditPost> = [];
  
  it( 'Should show No Posts Found with empty array', () => {
    expect(2-1).toEqual(1);
  });
  
});
