export interface RedditPost {
  kind: string;
  data: {
    approved_at_utc: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: Array<any>;
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: any;
    top_awarded_type: any;
    hide_score: boolean;
    name: string;
  };
}

export interface RedditAPIResponse {
  after: string;
  before: string;
  children: RedditPost[];
  dis: number;
  modhash: string;
}
