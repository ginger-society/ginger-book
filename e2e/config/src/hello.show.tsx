import type { Story } from "@ginger-book/react";

export const World: Story = () => {
  return <h1>Hello World</h1>;
};

export const Styles: Story = () => {
  return (
    <>
      <p className="file">text</p>
      <p className="append">append</p>
    </>
  );
};