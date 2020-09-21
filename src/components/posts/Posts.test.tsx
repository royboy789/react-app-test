import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// types
import { RedditPost } from "../../types/reddit";

// components
import Posts from "./Posts";

// Sample Data
import samplePost from './samplePostData';

describe("Posts", () => {
  let postsElement : RenderResult;
  let posts: Array<RedditPost> = [samplePost, samplePost];
  let navigationElement: HTMLElement;
  let activePostElement: HTMLElement;
  
  describe('Component with posts', () => {
    beforeEach(() => {
      postsElement = render(<Posts posts={posts}/>);
      navigationElement = postsElement.getByTestId('posts-navigation');
      activePostElement = postsElement.getByTestId('posts-active');
    });

    describe('Posts Navigation', () => {

      it('should contain as many items as posts', () => {
        expect(navigationElement.childElementCount).toEqual(posts.length);
      });
  
      describe('Posts Navigation Item', () => {
  
        it('should change activePost on click', () => {
          const post : Array<HTMLElement> = postsElement.getAllByText(posts[0].data.title);
          const activePostTitle : HTMLElement = postsElement.getByTestId('ActiveTitle');
  
          userEvent.click(post[0]);
          expect(activePostTitle.textContent).toEqual(posts[0].data.title);
        });
      });
  
    });
  });

  describe('Component without posts', () => {
    beforeEach(() => {
      postsElement = render(<Posts posts={[]}/>);
    });

    it('should show No Posts Found heading', () => {
      const noPostsFoundTitle = postsElement.getByTestId('no-posts-found-title');
      expect(noPostsFoundTitle.textContent).toContain('No Posts Found');
    });


  });
  
});
