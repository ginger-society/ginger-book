// @ts-ignore
import { useGingerBookContext } from "@ginger-society/ginger-book";

function Context() {
  const { globalState } = useGingerBookContext();
  return <div id="context-div">{JSON.stringify(globalState)}</div>;
}

export default Context;
