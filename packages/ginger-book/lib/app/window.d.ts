import type { SetupWorker } from "msw/browser";

declare global {
  interface Window {
    __ginger_book_msw: SetupWorker;
  }
}
