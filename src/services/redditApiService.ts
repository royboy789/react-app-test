// types
import { RedditAPIResponse } from "./../types/reddit";

import axios from "axios";

export default class RedditApiService {
  /**
   * Defaults
   */
  private redditBase: string = "https://reddit.com/r/";
  private subreddit: string;

  private perPage: number = 98;
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
   * 
   */
  public async getPosts() {
    const url = new URL(this.redditBase + this.subreddit + ".json");
    
    // @TODO make this an argument
    url.searchParams.append("limit", this.perPage.toString());
    let redditResponse = await this.fetchPosts(url);
    return redditResponse.data;
  }

  /**
   * Fetch posts from node
   * 
   * @param url 
   */
  private async fetchPosts(url: URL)  {
    const res : RedditAPIResponse = await axios.get("http://localhost:8080/?url=" + url.href, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res;
  }
}
