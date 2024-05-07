// @ts-ignore
import { useLadleContext } from "@ginger-society/ginger-book";

function Context() {
  const { globalState } = useLadleContext();
  return <div id="context-div">{JSON.stringify(globalState)}</div>;
}

export default Context;
