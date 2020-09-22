import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// types
import { HeaderProps } from "./SiteHeader";

// components
import SiteHeader from "./SiteHeader";

describe("SiteHeader", () => {
  let changeHandler: jest.Mock<any, any>;
  let header: RenderResult;
  let inputElement: HTMLElement;
  let newSubreddit: string;

  beforeEach(async () => {
    changeHandler = jest.fn();
    header = render(<SiteHeader changeSubreddit={changeHandler} />);
    inputElement = header.getByLabelText("Change Subreddit:");
    newSubreddit = "wordpress";
  });

  it("should set input field properly", () => {
    userEvent.type(inputElement, newSubreddit);
    expect(inputElement).toHaveValue(newSubreddit);
  });

  describe("changeSubCallback", () => {
    it("should be called with a string", () => {
      userEvent.type(inputElement, newSubreddit);
      userEvent.click(header.getByTestId("change-subreddit-submit"));
      expect(changeHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toBeCalledWith(newSubreddit);
    });

    it("should not be called when input field is empty", () => {
      expect(inputElement).toBeEmpty();
      userEvent.click(header.getByTestId("change-subreddit-submit"));
      expect(changeHandler).toHaveBeenCalledTimes(0);
    });
  });
});
