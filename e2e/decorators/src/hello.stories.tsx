import type { StoryDefault, Story } from "@ginger-society/ginger-book";

export default {
  decorators: [
    (Stories: React.FC) => (
      <>
        Decorator 1<Stories />
      </>
    ),
    (Stories: React.FC) => (
      <>
        Decorator 2<Stories />
      </>
    ),
  ],
} satisfies StoryDefault;

export const World: Story = () => {
  return <h2>world</h2>;
};

World.decorators = [
  (Stories: React.FC) => (
    <>
      Decorator 3<Stories />
    </>
  ),
];
