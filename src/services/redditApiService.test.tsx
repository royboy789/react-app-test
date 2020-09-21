import React from "react";
import { render } from "@testing-library/react";

import axios from "axios";
jest.mock("axios");

// types
import { RedditAPIResponse } from "./../types/reddit";

// Service
import RedditApiService from "./redditApiService";

describe("RedditApiService", () => {
  let redditService: RedditApiService;
  beforeEach(() => {
    redditService = new RedditApiService("reactjs");
  });

  describe("redditApiService::setSub", () => {
    it("should set the subreddit properly", () => {
      expect(redditService.setSub("reddit")).toEqual("reddit");
    });
  });

  describe("redditApiService::getPosts", () => {
    it("should fetch posts properly", async () => {
      const data: RedditAPIResponse = {
        after: "string",
        before: "string",
        children: [],
        dis: 0,
        modhash: "string",
      };

      (axios.get as jest.Mock).mockReturnValue({data: Promise.resolve(data)});
      expect(redditService.getPosts()).resolves.toEqual(data);
    });

    it("should fail posts properly", async () => {
      const data: RedditAPIResponse = {
        after: "string",
        before: "string",
        children: [],
        dis: 0,
        modhash: "string",
      };

      (axios.get as jest.Mock).mockReturnValue({data: Promise.reject(data)});
      expect(redditService.getPosts()).rejects.toEqual(data);
    });
  });
});
