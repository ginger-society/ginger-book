import type { StoryDefault, Story } from "@ginger-society/ginger-book";

export default {
  title: "Root / Examples",
  meta: {
    drink: "coke",
    food: "burger",
  },
} satisfies StoryDefault;

export const First: Story = () => {
  return <h1>first</h1>;
};

export const Second: Story = () => {
  return <h1>second</h1>;
};
Second.storyName = "Second Renamed";
Second.meta = {
  drink: "water",
};
