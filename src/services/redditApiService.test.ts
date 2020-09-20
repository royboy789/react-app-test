import React from 'react';
import { render } from '@testing-library/react';

// types
import { RedditAPIResponse } from "./../types/reddit";

// Service
import RedditApiService from './redditApiService';


describe('redditApiService', () => {
  describe('redditApiService::setSub', () => {
    const redditService = new RedditApiService('reactjs');
    
    test('setting subreddit', () => {
      expect(redditService.setSub('reddit')).toEqual('reddit');
    })
  })
})