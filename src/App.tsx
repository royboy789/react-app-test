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
  const [subreddit, setSubreddit] = useState("reactjs");
  const RedditService = new RedditApiService(subreddit);
  const [posts, setPosts] = useState([] as any);

  useEffect(() => {
    // eslint-disable-next-line
    RedditService.setSub(subreddit);
    RedditService.getPosts().then((res) => {setPosts(res.children)});

  }, [subreddit]);

  return (
    <div id={"page"}>
      <Header changeSubCallback={setSubreddit}></Header>
      <div id={"current-subreddit"}>
        <h2>{subreddit}</h2>
        <div className={"posts"}>
          <PostsList posts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
