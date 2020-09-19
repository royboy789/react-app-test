import React, { useEffect, useState } from "react";
import "./App.scss";

// Types
import { RedditAPIResponse } from "./types/reddit";

// Services
import RedditApiService from "./services/redditApiService";

// Components
import Header from "./components/header/SiteHeader";
import PostsList from "./components/posts/PostsList";

function App() {
  const [subreddit, setSubreddit] = useState("react");
  const RedditService = new RedditApiService(subreddit);
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    // eslint-disable-next-line
    RedditService.setSub(subreddit);
    
    // in useEffect for dependency
    function refreshPosts() {
      RedditService.getPosts().then((redditData: RedditAPIResponse) => {
        setPosts(redditData.children);
      }).catch((err : any) => {
        setPosts([]);
      });
    }
    refreshPosts();

  }, [subreddit]);

  return (
    <div id={"page"}>
      <Header changeSubCallback={setSubreddit}></Header>
      <div id={"content"}>
        <h2>{subreddit}</h2>
        <div className={"posts"}>
          <PostsList posts={posts}></PostsList>
        </div>
      </div>
    </div>
  );
}

export default App;
