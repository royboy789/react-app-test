import React, { useEffect, useState } from "react";
import "./App.scss";

// Types
import { RedditAPIResponse } from "./types/reddit";

// Services
import RedditApiService from "./services/redditApiService";

// Components
import Header from "./components/header/SiteHeader";
import Posts from "./components/posts/Posts";

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
          <Posts posts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
