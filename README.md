# Reddit Query App

Show paginated posts for a given reddit

## Challenges

- Currently `cors` for `reddit/r/react.json` and all `.json` are set to not allow
- Pagination must be determined using `after` and using `limit` for per page view

## Installation

- open terminal and set working directory to `reddit-api/app`
- run `npm install`
- run `npm run start:server`
- open a new terminal tab or window in the same directory
- run `npm run start`

### Other Commands

- `build` - build command
- `test` - run tests (jest)
- `npm test -- --coverage --watchAll=false` - run tests with coverage reporting

## Technologies / Libraries

Any libraries used can be found in `/app/package.json` unless listed here. 
- React app created using [facebook/create-react-app](https://github.com/facebook/create-react-app)
- ES6 / TypeScript

## Coverage Report

```
-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |    47.47 |    33.33 |    45.95 |    47.47 |                   |
 src                   |    22.64 |     5.88 |    23.81 |    22.64 |                   |
  App.tsx              |      100 |      100 |      100 |      100 |                   |
  index.tsx            |        0 |      100 |      100 |        0 |              7,17 |
  serviceWorker.tsx    |        0 |        0 |        0 |        0 |... 32,133,135,138 |
 src/components/header |      100 |      100 |      100 |      100 |                   |
  SiteHeader.tsx       |      100 |      100 |      100 |      100 |                   |
 src/components/posts  |      100 |      100 |      100 |      100 |                   |
  Posts.tsx            |      100 |      100 |      100 |      100 |                   |
  samplePostData.js    |        0 |        0 |        0 |        0 |                   |
 src/reducers          |    69.23 |      100 |    33.33 |    69.23 |                   |
  pageReducer.ts       |    69.23 |      100 |    33.33 |    69.23 |       24,25,26,43 |
 src/services          |    53.33 |      100 |       60 |    53.33 |                   |
  redditApiService.ts  |    53.33 |      100 |       60 |    53.33 |... 49,50,51,60,65 |
 src/types             |        0 |        0 |        0 |        0 |                   |
  page.ts              |        0 |        0 |        0 |        0 |                   |
  reddit.ts            |        0 |        0 |        0 |        0 |                   |
-----------------------|----------|----------|----------|----------|-------------------|

Test Suites: 5 passed, 5 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        3.585s
```
