import serve from "@ginger-society/ginger-book/serve";

serve({
  port: 61105,
  host: "127.0.0.1",
  storyOrder: ["hello--world", "hello--ayo"],
});
