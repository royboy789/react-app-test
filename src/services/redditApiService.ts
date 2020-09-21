// types
import { RedditAPIResponse, RedditPost } from "./../types/reddit";

import axios, { AxiosError } from "axios";

export default class RedditApiService {
  /**
   * Defaults
   */
  private redditBase: string = "https://reddit.com/r/";
  private subreddit: string;
  private perPage: number = 10;
  private page: number = 1;
  private lastID: string;


  public constructor(subreddit: string) {
    this.subreddit = subreddit;
    this.lastID = "";
  }


  /**
   * Set Subreddit - internal method
   * 
   * @param subreddit 
   */
  private setSubreddit(subreddit: string) {
    this.subreddit = subreddit;
    return this.subreddit;
  }

  /**
   * Set Subreddit - public method
   * 
   * @param subreddit
   */
  public setSub(subreddit: string) {
    return this.setSubreddit(subreddit);
  }

  /**
   * Get Posts from subreddit
   */
  public async getPosts() {
    const url = new URL(this.redditBase + this.subreddit + ".json");
    url.searchParams.append("limit", this.perPage.toString());

    let posts : any = [];
    posts = await this.fetchPosts(url);
    return posts;
  }

  /**
   * Fetch posts from node
   * 
   * @param url 
   */
  private async fetchPosts(url: URL)  {
    const res = await axios.get("http://localhost:8080/?url=" + url.href, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    
    const data = await res.data;
    return data;
  }
}
