<p align="center">
</p>
<br/>

ginger-book is an environment to develop, test, and share your React components faster.

## Quick start

```bash
mkdir my-ginger-book
cd my-ginger-book
pnpm init
pnpm add @ginger-society/ginger-book react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
pnpm ginger-book serve
```

with yarn

```bash
mkdir my-ginger-book
cd my-ginger-book
yarn init --yes
yarn add @ginger-society/ginger-book react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
yarn ginger-book serve
```

with npm

```bash
mkdir my-ginger-book
cd my-ginger-book
npm init --yes
npm install @ginger-society/ginger-book react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
npx ginger-book serve
```
