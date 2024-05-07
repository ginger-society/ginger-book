export default {
  stories: ["src/**/*.show.{js,jsx,ts,tsx}", "src/specific-file.custom.tsx"],
  viteConfig: "ginger-book-vite.config.js",
  appendToHead: `<style>.append {color: green}</style>`,
  storyOrder: () => ["specific*", "Hello*"],
};
