import React from "react";
import { render } from "@testing-library/react";

import axios from "axios";
jest.mock("axios");
const axiosMock = <jest.Mock<typeof axios.get>><unknown>axios.get;

// types
import { RedditAPIResponse } from "./../types/reddit";

// Service
import RedditApiService from "./redditApiService";

describe("redditApiService::setSub", () => {
  const redditService = new RedditApiService("reactjs");

  it("should set the subreddit properly", () => {
    expect(redditService.setSub("reddit")).toEqual("reddit");
  });

  it("should fetch posts properly", async () => {
    const data : RedditAPIResponse = {
      after: 'string',
      before: 'string',
      children: [],
      dis: 0,
      modhash: 'string'
    }

    axiosMock.mockImplementationOnce(() => <any>Promise.resolve(data));
  });
});
