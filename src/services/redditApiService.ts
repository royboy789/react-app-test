// types
import { RedditAPIResponse } from "./../types/reddit";

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
    console.log( 'setting subreddit: ' + this.subreddit );
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
  public getPosts(): any {
    const url = new URL(this.redditBase + this.subreddit + ".json");
    url.searchParams.append("limit", this.perPage.toString());

    let promiseReturn = new Promise((resolve, reject) => {
      this.fetchPosts(url)
        .then((res: any) => {
          const returnData: RedditAPIResponse = res.data;
          this.afterFetchUpdate(returnData);
          resolve(returnData);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });

    return promiseReturn;
  }

  /**
   * Fetch posts from node
   * 
   * @param url 
   */
  private fetchPosts(url: URL) {
    return axios.get("http://localhost:8080/?url=" + url.href, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  private afterFetchUpdate(data: RedditAPIResponse) {}
}
