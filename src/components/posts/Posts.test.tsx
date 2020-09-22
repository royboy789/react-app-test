import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// types
import { RedditPost } from "../../types/reddit";

// components
import Posts from "./Posts";

// Sample Data
import samplePost from "./samplePostData";

describe("Posts Component", () => {
  let postsComponent: RenderResult;
  let posts: Array<RedditPost> = [samplePost, samplePost];
  let navigationElement: HTMLElement;
  let activePostElement: HTMLElement;

  it("should return loading if no posts", () => {
    let posts = [] as Array<RedditPost>;
    postsComponent = render(<Posts posts={posts} />);
    let loadingElement = postsComponent.getByText("Loading...");
    expect(loadingElement).toBeDefined();
  });

  describe("Posts Navigation", () => {
    beforeEach(() => {
      postsComponent = render(<Posts posts={posts} />);
      navigationElement = postsComponent.getByTestId("posts-navigation");
      activePostElement = postsComponent.getByTestId("posts-active");
    });

    it("should contain as many items as posts", () => {
      // need to add 1 for pagination
      expect(navigationElement.childElementCount).toEqual(posts.length + 1);
    });

    describe("Posts Navigation Item", () => {
      it("should change activePost on click", () => {
        const post: Array<HTMLElement> = postsComponent.getAllByText(
          posts[0].data.title
        );
        const activePostTitle: HTMLElement = postsComponent.getByTestId(
          "ActiveTitle"
        );

        userEvent.click(post[0]);
        expect(activePostTitle.textContent).toEqual(posts[0].data.title);
      });
    });

    describe("Posts Navigation Pagination", () => {
      beforeEach(() => {
        posts = Array(50).fill(samplePost);
        postsComponent = render(<Posts posts={posts} />);
      });
      it("should navigation to page 2", () => {
        userEvent.click(postsComponent.getByText("2"));
        const activePaginationItem = postsComponent.getAllByTestId(
          "active-pagination-item"
        );
        // @TODO : check
        expect(2).toEqual(2);
      });
    });
  });

  describe("Active Post", () => {
    beforeEach(() => {
      postsComponent = render(<Posts posts={[]} />);
    });

    // @TODO
    it("should have the same title as the first post", () => {
      expect(2).toEqual(2);
    });

    // @TODO
    it("should change on navigation change", () => {
      expect(2).toEqual(2);
    });

    // @TODO
    describe("Active Post Awards", () => {
      it("should display awards", () => {
        expect(2).toEqual(2);
      });

      it("should return nothing if awards empty", () => {
        expect(2).toEqual(2);
      });
    });

    // @TODO
    describe("Active Post Thumbnail", () => {
      it("should display thumbnail", () => {
        expect(2).toEqual(2);
      });

      it("should return nothing if no thumbnail set", () => {
        expect(2).toEqual(2);
      });
    });
  });
});
