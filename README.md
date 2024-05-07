<p align="center">
</p>
<br/>

Ladle is an environment to develop, test, and share your React components faster.

- [Documentation](https://www.ladle.dev)
- [Demo](https://baseweb.design/ladle)
- [Twitter](https://twitter.com/ladlejs)
- [StackBlitz](https://ladle.dev/new)
- [Discord](https://discord.gg/H6FSHjyW7e)

## Quick start

```bash
mkdir my-ladle
cd my-ladle
pnpm init
pnpm add @ginger-society/ginger-book react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
pnpm ladle serve
```

with yarn

```bash
mkdir my-ladle
cd my-ladle
yarn init --yes
yarn add @ginger-society/ginger-book react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
yarn ladle serve
```

with npm

```bash
mkdir my-ladle
cd my-ladle
npm init --yes
npm install @ginger-society/ginger-book react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
npx ladle serve
```
