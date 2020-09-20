import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// types
import { HeaderProps } from "./SiteHeader";

// components
import SiteHeader from "./SiteHeader";

describe("SiteHeader", () => {
  describe("changeSubCallback", () => {
    it("should fire when form submitted", () => {
      const changeHandler = jest.fn();
      const header = render(<SiteHeader changeSubCallback={changeHandler} />);
      const inputElement = header.getByLabelText('Change Subreddit:');
      const newSubreddit = "hiroy";

      const event = {
        target: { value: "the-value" },
      };

      userEvent.type(inputElement, newSubreddit);
      userEvent.click(header.getByTestId('change-subreddit-submit'));

      expect(inputElement).toHaveValue(newSubreddit);
      expect(changeHandler).toHaveBeenCalledTimes(1);
      expect(changeHandler).toBeCalledWith(newSubreddit);
    });
  });
});
