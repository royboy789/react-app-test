import React, { useState } from "react";
import "./posts.scss";

// types
import { RedditPost } from "../../types/reddit";

interface PostsListsData {
  posts: Array<RedditPost>;
}

function Posts({ posts }: PostsListsData) {
  const [activePost, setActivePost] = useState(0);

  const Posts = posts.length ? (
    <div data-testid={"posts-navigation"}>
      {posts.map((post, index) => {
        let activeClass = activePost === index ? "active" : "";
        return (
          <div
            key={index}
            className={`posts-nav-single ${activeClass}`}
            onClick={() => setActivePost(index)}
          >
            {post.data.title}
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <h3 data-testid={'no-posts-found-title'}>No Posts Found</h3>
    </div>
  );

  const ActivePost = posts[activePost] ? (
    <div className={"post"}>
      <h3 className={"post-title"} data-testid={"ActiveTitle"}>
        {posts[activePost].data.title}
      </h3>
    </div>
  ) : '';

  return (
    <div id={"posts-container"}>
      <div className={"posts-nav"}>
        <h3>Posts</h3>
        {Posts}
      </div>
      <div className={"posts-active"} data-testid={"posts-active"}>
        {ActivePost}
      </div>
    </div>
  );
}

export default Posts;
