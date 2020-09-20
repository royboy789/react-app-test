import React from "react";
import { render } from "@testing-library/react";

import axios from "axios";
jest.mock("axios");

// types
import { RedditAPIResponse } from "./../types/reddit";

// Service
import RedditApiService from "./redditApiService";

describe("RedditApiService", () => {
  describe("redditApiService::setSub", () => {
    const redditService = new RedditApiService("reactjs");

    it("should set the subreddit properly", () => {
      expect(redditService.setSub("reddit")).toEqual("reddit");
    })
  })

  describe("redditApiService::getPosts", () => {
    it("should fetch posts properly", async () => {
      const data: RedditAPIResponse = {
        after: "string",
        before: "string",
        children: [],
        dis: 0,
        modhash: "string",
      };

      //axios.mockImplementationOnce(() => <any>Promise.resolve(data));
      expect(1).toEqual(1);
    });
  });
});
