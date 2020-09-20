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
All files              |    10.81 |        0 |       10 |    10.96 |                   |
 src                   |        0 |        0 |        0 |        0 |                   |
  App.tsx              |        0 |      100 |        0 |        0 |... 17,19,21,22,26 |
  index.tsx            |        0 |      100 |      100 |        0 |              7,17 |
  serviceWorker.tsx    |        0 |        0 |        0 |        0 |... 32,133,135,138 |
 src/components/header |        0 |      100 |        0 |        0 |                   |
  SiteHeader.tsx       |        0 |      100 |        0 |        0 |        3,4,6,8,13 |
 src/components/posts  |        0 |        0 |        0 |        0 |                   |
  PostsList.tsx        |        0 |        0 |        0 |        0 |    11,12,14,16,24 |
 src/services          |    53.33 |      100 |       50 |    53.33 |                   |
  redditApiService.ts  |    53.33 |      100 |       50 |    53.33 |... 49,50,51,60,65 |
 src/types             |        0 |        0 |        0 |        0 |                   |
  reddit.ts            |        0 |        0 |        0 |        0 |                   |
-----------------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 failed, 2 passed, 3 total  
Tests:       1 failed, 3 passed, 4 total
```
