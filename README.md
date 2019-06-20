## wizard-ui
### A Design System with React

[![Build Status](https://travis-ci.org/xsky-fe/wizard-ui.svg?branch=master)](https://travis-ci.org/xsky-fe/wizard-ui)

- React 16+
- Typescript
- UI Development Environment with [React Storybook](https://storybook.js.org/)
- [Documentation With  Gatsby (WIP)](https://xsky-fe.github.io/wizard-ui/)

## Install and Usage
Add in package.json
```
"wizard-ui": "git+ssh://git@github.com:xsky-fe/wizard-ui.git"
```

## Unit Test Coverage
```
-------------------------------|----------|----------|----------|----------|-------------------|
File                           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------|----------|----------|----------|----------|-------------------|
All files                      |     50.5 |       50 |    41.46 |    51.21 |                   |
 src                           |        0 |        0 |        0 |        0 |                   |
  index.ts                     |        0 |        0 |        0 |        0 |                   |
  interface.tsx                |        0 |        0 |        0 |        0 |                   |
 src/components                |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |                   |
 src/components/Badge          |      100 |      100 |      100 |      100 |                   |
  index.tsx                    |      100 |      100 |      100 |      100 |                   |
 src/components/DropdownButton |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |... 7,70,71,89,154 |
 src/components/Icon           |      100 |      100 |      100 |      100 |                   |
  index.tsx                    |      100 |      100 |      100 |      100 |                   |
 src/components/Loader         |      100 |      100 |      100 |      100 |                   |
  index.tsx                    |      100 |      100 |      100 |      100 |                   |
 src/components/Modal          |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |... 14,15,18,47,68 |
 src/components/Steps          |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |     9,10,11,14,27 |
 src/components/SubMenu        |        0 |      100 |        0 |        0 |                   |
  index.tsx                    |        0 |      100 |        0 |        0 |          7,8,9,19 |
 src/components/Switch         |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |... 15,17,20,23,33 |
 src/components/Tabs           |      100 |      100 |      100 |      100 |                   |
  index.tsx                    |      100 |      100 |      100 |      100 |                   |
 src/components/TimePicker     |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |... 40,45,47,59,74 |
 src/components/Tooltip        |     87.1 |    68.75 |      100 |    89.29 |                   |
  index.tsx                    |     87.1 |    68.75 |      100 |    89.29 |          37,40,43 |
 src/components/Tree           |        0 |        0 |        0 |        0 |                   |
  index.tsx                    |        0 |        0 |        0 |        0 |... 19,20,21,31,43 |
 src/components/UsageBar       |       90 |     83.1 |      100 |       90 |                   |
  index.tsx                    |       90 |     83.1 |      100 |       90 | 16,18,20,73,74,75 |
 src/utils                     |    49.44 |    41.38 |       60 |    51.22 |                   |
  bem-class.ts                 |       70 |    55.56 |      100 |       70 |            3,6,14 |
  bulk.ts                      |     5.26 |        0 |        0 |     5.88 |... 38,40,41,42,44 |
  index.ts                     |        0 |        0 |        0 |        0 |                   |
  xbytes.ts                    |       60 |    50.82 |       50 |    61.82 |... 06,109,114,121 |
-------------------------------|----------|----------|----------|----------|-------------------|
```