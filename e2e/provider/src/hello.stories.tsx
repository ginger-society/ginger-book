import type { Story } from "@ginger-society/ginger-book";
import { useContext } from "react";
import { MyContext } from "../.ginger-book/components";

export const World: Story = () => {
  const value = useContext(MyContext);
  return <h1>Hello World - {value}</h1>;
};
