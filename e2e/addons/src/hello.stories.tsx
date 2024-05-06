import type { Story } from "@ginger-book/react";
import { useLink } from "@ginger-book/react";
import Context from "./context";

export const World: Story = () => {
  const link = useLink();
  return (
    <>
      <Context />
      <h1>Hello World</h1>
      <button id="btn" onClick={() => link("hello--linked")}>
        Go to Linked Story
      </button>
    </>
  );
};

export const Linked: Story = () => {
  return <h2>Linked Story</h2>;
};
