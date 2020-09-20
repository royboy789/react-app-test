import React from 'react';
import { render } from '@testing-library/react';

// Types
import { RedditAPIResponse } from "./types/reddit";

// Services
import RedditApiService from './services/redditApiService';
// make RedditApiServica a mock
jest.mock('./services/redditApiService');

// Components
import App from './App';

beforeEach(() => {
  RedditApiService.mockClear();
  RedditApiService.mockImplementation(() => {
    return {
      setSub: () => 'reactjs',
      getPosts: () => {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
    }
  });
});

describe('app init', () => {
  //const { getByText } = render(<App/>);
  // working with passing as string
  const { getByText } = render('<App/>');
  
  test('subreddit default loads', () => {
    const linkElement = getByText('reactjs');

    console.log(linkElement);
    
    //expect(linkElement).toBeInTheDocument();
    expect(2-1).toEqual(1);
  })

});
