import React from "react";

// types
import { RedditPost } from "./../../types/reddit";

interface PostsListsData {
  posts: Array<RedditPost>;
}

function PostsList(data: PostsListsData) {
  const { posts } = data;
  console.log("listing posts: ", posts);
  
  const Posts = posts.length ? (
    posts.map((post, index) => {
      return <div key={index}>{post.data.title}</div>;
    })
  ) : (
    <div>
      <h3>No Posts Found</h3>
    </div>
  );

  return <div>{Posts}</div>;
}

export default PostsList;
