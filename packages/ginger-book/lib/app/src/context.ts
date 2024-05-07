import * as React from "react";
//@ts-ignore
import GingerBookContext from "@ladle/react-context";
import type { GlobalAction, GlobalState } from "../../shared/types";

export const Context: React.Context<{
  globalState: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}> = GingerBookContext;

export const useGingerBookContext = () =>
  React.useContext<{
    globalState: GlobalState;
    dispatch: React.Dispatch<GlobalAction>;
  }>(GingerBookContext);
