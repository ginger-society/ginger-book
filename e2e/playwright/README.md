# Visual Snapshots with Playwright

This package demonstrates how you can quickly automate visual snapshots with GingerBook and Playwright to cover all your stories.

Read the [post](https://gingersociety.org/ginger-book/blog/visual-snapshots) for more information. (The actual source code here a slightly different since it has a double purpose as an e2e test.)

## Run it

Clone this repo, navigate to this folder and run:

```sh
pnpm install
pnpm build #build Ginger Book
pnpm test #run tests
pnpm test:update #update snapshots if there are changes
```
