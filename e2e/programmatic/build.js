import build from "@ginger-society/ginger-book/build";

build({
  port: 61105,
  host: "127.0.0.1",
  storyOrder: ["hello--world", "hello--ayo"],
});
