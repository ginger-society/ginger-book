import type { GlobalProvider, SourceHeader } from "@ginger-society/ginger-book";
import { createContext } from "react";

export const MyContext = createContext("my-context");

export const Provider: GlobalProvider = ({ children, storyMeta }) => (
  <MyContext.Provider value="some-context">
    {storyMeta?.myMeta && <p id="myMeta">{storyMeta.myMeta}</p>}
    {children}
    <p>rendered by provider</p>
  </MyContext.Provider>
);

//@ts-ignore
const config: string = GINGER_BOOK_PROJECT_PATH;

export const StorySourceHeader: SourceHeader = ({ path, locStart, locEnd }) => {
  return (
    <span id="source-header">
      {config}
      {path}
      {locStart}-{locEnd}
    </span>
  );
};
