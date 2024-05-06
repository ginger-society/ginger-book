---
id: programmatic
title: Programmatic
---

Ladle can be also used through its JavaScript API:

```tsx
import serve from "@ginger-book/react/serve";
import build from "@ginger-book/react/build";
import preview from "@ginger-book/react/preview";

await serve({
  // config: {}
});
await build({
  // config: {}
});
await preview({
  // config: {}
});
```

Explore all config.mjs [options](./config#ladleconfigmjs).
