import { RedditPost } from './reddit';

export interface Page {
  subreddit: string;
  page: number;
  per_page: number;
  posts: Array<RedditPost>;
}

export interface PageAction {
  type: string;
  payload?: any;
}