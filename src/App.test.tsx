import React from 'react';
import { render, RenderResult, cleanup } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import userEvent from "@testing-library/user-event";

// Types
import { RedditAPIResponse } from "./types/reddit";

// Services
import RedditApiService from './services/redditApiService';
// make RedditApiServica a mock
jest.mock('./services/redditApiService');
RedditApiService.prototype.getPosts = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve({
      children: []
    });
  });
});

// reducers
// @TODO - make this a mock to remove it from App tests
import pageReducer from './reducers/pageReducer';

// Components
import App from './App';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

describe('App', () => {

  let app: RenderResult;
  let subreddit: string = 'reactjs';
  let redditApi : RedditApiService;

  describe('default render', () => {

    beforeEach(async () => {
      await act(async() => {
        app = render(<App/>);
      });
    });

    it('should set reactjs as the default subreddit', () => {
      const titleElement = app.getByTestId('current-subreddit-title');
      expect(titleElement.textContent).toContain('reactjs');
    });

    it('should fire dispatch when form is header is submitted', async () => {
      const inputElement = app.getByLabelText("Change Subreddit:");
      userEvent.type(inputElement, 'wordpress');
      let titleElement: any;
      
      await act(async() => {
        userEvent.click(app.getByTestId("change-subreddit-submit"));
        titleElement = app.getByTestId('current-subreddit-title');
      });

      expect(titleElement.textContent).toContain('wordpress');
    });

  })

});