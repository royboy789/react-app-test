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

```@text
 PASS  src/reducers/pageReducer.test.ts
 PASS  src/components/posts/Posts.test.tsx
 PASS  src/components/header/SiteHeader.test.tsx
 PASS  src/services/redditApiService.test.tsx
 PASS  src/App.test.tsx
-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |      100 |      100 |      100 |      100 |                   |
 src                   |      100 |      100 |      100 |      100 |                   |
  App.scss             |      100 |      100 |      100 |      100 |                   |
  App.tsx              |      100 |      100 |      100 |      100 |                   |
  react-app-env.d.ts   |        0 |        0 |        0 |        0 |                   |
 src/components/header |      100 |      100 |      100 |      100 |                   |
  SiteHeader.tsx       |      100 |      100 |      100 |      100 |                   |
 src/components/posts  |      100 |      100 |      100 |      100 |                   |
  Posts.tsx            |      100 |      100 |      100 |      100 |                   |
  posts.scss           |      100 |      100 |      100 |      100 |                   |
  samplePostData.js    |        0 |        0 |        0 |        0 |                   |
 src/reducers          |      100 |      100 |      100 |      100 |                   |
  pageReducer.ts       |      100 |      100 |      100 |      100 |                   |
 src/services          |      100 |      100 |      100 |      100 |                   |
  redditApiService.ts  |      100 |      100 |      100 |      100 |                   |
 src/types             |        0 |        0 |        0 |        0 |                   |
  page.ts              |        0 |        0 |        0 |        0 |                   |
  reddit.ts            |        0 |        0 |        0 |        0 |                   |
-----------------------|----------|----------|----------|----------|-------------------|

Test Suites: 5 passed, 5 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        3.939s
```
