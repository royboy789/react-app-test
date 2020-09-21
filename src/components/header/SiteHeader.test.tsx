import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// types
import { HeaderProps } from "./SiteHeader";

// components
import SiteHeader from "./SiteHeader";

describe("SiteHeader", () => {
  describe("changeSubCallback", () => {

    let changeHandler : jest.Mock<any, any>;
    let header : RenderResult;
    let inputElement : HTMLElement;
    let newSubreddit : string;

    beforeEach(async() => {
      changeHandler = jest.fn();
      header = render(<SiteHeader changeSubCallback={changeHandler} />);
      inputElement = header.getByLabelText("Change Subreddit:");
      newSubreddit = "hiroy";
    });

    it("should set input field properly", () => {
      userEvent.type(inputElement, newSubreddit);
      expect(inputElement).toHaveValue(newSubreddit);
    });

    it("should call set subreddit callback when string", () => {
      userEvent.type(inputElement, newSubreddit);
      userEvent.click(header.getByTestId("change-subreddit-submit"));
      expect(changeHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toBeCalledWith(newSubreddit);
    });

    it('should not call callback if no value', () => {
      expect(inputElement).toBeEmpty();
      userEvent.click(header.getByTestId("change-subreddit-submit"));
      expect(changeHandler).toHaveBeenCalledTimes(0);
    });
  });
});
