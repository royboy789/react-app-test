import React, { useState } from "react";
import "./posts.scss";

// types
import { RedditPost } from "../../types/reddit";

interface PostsListsData {
  posts: Array<RedditPost>;
}

/**
 * Posts Component
 *
 * @param param0
 */
function Posts({ posts }: PostsListsData) {
  const [activePost, setActivePost] = useState(0);

  /**
   * Display a Thumbnail
   *
   * @param thumb
   */
  function displayThumb(thumb: string) {
    // find images in thumb string (data reveleated other strings)
    const matches = thumb.match(/[^/]+(jpg|png|gif)$/);
    if (!matches || !matches.length) {
      return;
    }

    return (
      <div className={"post-thumbnail"}>
        <img src={thumb} />
      </div>
    );
  }

  /**
   * Display Awards
   *
   * @param awards
   */
  function displayAwards(awards: Array<any>) {
    if (!awards.length) {
      return;
    }
    return (
      <div className={"post-awards"}>
        <h3>Awards: </h3>
        {awards.map((award: any, index: number) => (
          <img
            key={index}
            src={award.icon_url}
            alt={"icon for award: " + award.id}
          />
        ))}
      </div>
    );
  }

  // Posts for navigation
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
      <h3 data-testid={"no-posts-found-title"}>No Posts Found</h3>
    </div>
  );

  // ActivePost markup
  const ActivePost = (activePostKey: number) => {
    if (!posts.length) {
      return <div>loading...</div>;
    }
    const activePost = posts[activePostKey] as RedditPost;
    const { data } = activePost;
    return (
      <div className={"post"}>
        <h3 className={"post-title"} data-testid={"ActiveTitle"}>
          {data.title}
        </h3>
        {displayThumb(data.thumbnail)}
        <div className={"post-link"}>
          <a href={`https://reddit.com${data.permalink}`} target={"_blank"}>
            {`https://reddit.com${data.permalink}`}
          </a>
        </div>
        {displayAwards(data.all_awardings)}
      </div>
    );
  };

  return (
    <div id={"posts-container"}>
      <div className={"posts-nav"}>{Posts}</div>
      <div className={"posts-active"} data-testid={"posts-active"}>
        <div>{ActivePost(activePost)}</div>
      </div>
    </div>
  );
}

export default Posts;
