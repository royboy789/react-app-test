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
 * @param param
 */
function Posts({ posts }: PostsListsData) {
  const [activePost, setActivePost] = useState(0);
  const [navPage, setNavpage] = useState(1);

  /**
   * Display a Thumbnail
   *
   * @param thumb
   */
  function Thumb(thumb: string) {
    // find images in thumb string (data reveleated other strings)
    const matches = thumb.match(/[^/]+(jpg|png|gif)$/);
    if (!matches || !matches.length) {
      return;
    }

    return (
      <div className={"post-thumbnail"}>
        <img src={thumb} alt={'alt text for post'} />
      </div>
    );
  }

  /**
   * Display Awards
   *
   * @param awards
   */
  function Awards(awards: Array<any>) {
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

  /**
   * Simple pagination - 10
   */
  function PaginationItems() {
    const totalPages = Math.ceil(posts.length/10);
    const pagination = Array.from({length: totalPages}, (_, k) => {
      let className = navPage - 1 === k ? 'active' : '';
      let testId = navPage - 1 === k ? 'active-pagination-item' : '';
      k+=1;
      return (
        <span data-testid={testId} key={k} className={`single-pagination ${className}`} onClick={() => setNavpage(k)}>
          {k}
        </span>
      );
    });
    return pagination;
  }

  // Posts for navigation
  // @TODO this is oversimplified, should be another component
  function PostNavigation() {   
    let minKey = (navPage-1) * 10;

    // splice out the correct posts from the array
    let pagePosts = [...posts];
    pagePosts = pagePosts.splice(minKey, 10);
    
    if (pagePosts.length) {
      return (
        <div data-testid={"posts-navigation"}>
          {pagePosts.map((post, index) => {
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
          <div className={"posts-navigation-pagination"} data-testid={'posts-navigation-pagination'}>
            {PaginationItems()}
          </div>
        </div>
      );
    }
  }

  // ActivePost markup
  function ActivePost (activePostKey: number) {
    const activePost = posts[activePostKey] as RedditPost;
    const { data } = activePost;
    return (
      <div className={"post"}>
        <h3 className={"post-title"} data-testid={"ActiveTitle"}>
          {data.title}
        </h3>
        {Thumb(data.thumbnail)}
        <div className={"post-link"}>
          <a href={`https://reddit.com${data.permalink}`} target={"_blank"} rel={'noopener noreferrer'}>
            {`https://reddit.com${data.permalink}`}
          </a>
        </div>
        {Awards(data.all_awardings)}
      </div>
    );
  };

  if ( posts.length ) {
    return (
      <div id={"posts-container"}>
        <div className={"posts-nav"}>{PostNavigation()}</div>
        <div className={"posts-active"} data-testid={"posts-active"}>
          <div>{ActivePost(activePost)}</div>
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }
}

export default Posts;
