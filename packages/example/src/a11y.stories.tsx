import {
  useGingerBookContext,
  ActionType,
  ThemeState,
  action,
} from "@ginger-society/ginger-book";
import type { Story } from "@ginger-society/ginger-book";

const empty = "";
export const Responsive: Story = () => {
  return (
    <>
      <div
        style={{
          width: "100",
          background: "#000",
          color: "#FFF",
          padding: "32px 32px",
          border: "1px solid black",
          fontFamily: "arial",
          fontSize: 28,
        }}
      >
        Header
      </div>
      <button
        style={{
          padding: "16px 102px",
          fontFamily: "arial",
          fontSize: 22,
          margin: 32,
          borderRadius: 8,
          color: "#174291",
          border: "2px solid #174291",
          background: "#FFF",
        }}
      >
        Ginger Book
      </button>
    </>
  );
};
Responsive.meta = {
  width: "xsmall",
};

export const Issues: Story = () => {
  const { globalState, dispatch } = useGingerBookContext();
  return (
    <>
      <input />
      <button
        style={{ backgroundColor: `red${empty}`, color: "darkRed" }}
        onClick={() => action("test")()}
      >
        Inaccessible button
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.UpdateTheme,
            value:
              globalState.theme === ThemeState.Dark
                ? ThemeState.Light
                : ThemeState.Dark,
          })
        }
      >
        Switch theme
      </button>
      <p style={{ background: "white" }}>Theme: {globalState.theme}</p>
      <img />
    </>
  );
};
