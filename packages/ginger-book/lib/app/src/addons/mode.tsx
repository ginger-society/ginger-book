import queryString from "query-string";
import { Preview } from "../icons";
import { ModeState, AddonProps, ActionType } from "../../../shared/types";
import config from "../get-config";

export const getQuery = (locationSearch: string) => {
  const mode = queryString.parse(locationSearch).mode as string;
  switch (mode) {
    case ModeState.Full:
      return ModeState.Full;
    case ModeState.Preview:
      return ModeState.Preview;
    default:
      return config.addons.mode.defaultState;
  }
};

export const Button = ({ dispatch }: AddonProps) => {
  const text = `Open fullscreen mode. Can be toggled by pressing ${config.hotkeys.fullscreen.join(
    " or ",
  )}.`;
  return (
    <li>
      <button
        aria-label={text}
        title={text}
        onClick={() =>
          dispatch({ type: ActionType.UpdateMode, value: ModeState.Preview })
        }
        type="button"
      >
        <Preview />
        <span className="ginger-book-addon-tooltip">{text}</span>
        <label>Open fullscreen mode</label>
      </button>
    </li>
  );
};
