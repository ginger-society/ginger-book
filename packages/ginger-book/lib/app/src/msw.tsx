import * as React from "react";
import type { RequestHandler } from "msw";

const Msw = ({
  children,
  msw,
}: {
  children: React.ReactElement;
  msw: RequestHandler[];
}) => {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const initMsw = async () => {
      if (msw.length > 0) {
        const { setupWorker } = await import("msw/browser");
        if (!window.__ginger_book_msw) {
          window.__ginger_book_msw = setupWorker();
          window.__ginger_book_msw.use(...msw);
          window.__ginger_book_msw
            .start({
              serviceWorker: {
                url: `${(import.meta as any).env.BASE_URL}mockServiceWorker.js`,
              },
            })
            .then(() => {
              setReady(true);
            });
        } else {
          window.__ginger_book_msw.use(...msw);
          setReady(true);
        }
      }
    };
    initMsw();
    return () => {
      if (window.__ginger_book_msw) {
        window.__ginger_book_msw.resetHandlers();
      }
    };
  }, [msw]);
  if (msw.length === 0) return children;
  if (!ready) return null;
  return children;
};

export default Msw;
