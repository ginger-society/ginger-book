module.exports = {
  someSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      items: ["introduction", "setup", "stories", "decorators"],
    },
    {
      type: "category",
      label: "Features",
      items: [
        "css",
        "hotkeys",
        "mdx",
        "meta",
        "mock-date",
        "providers",
        "typescript",
        "visual-snapshots",
      ],
    },
    {
      type: "category",
      label: "Addons",
      items: [
        "addons",
        "a11y",
        "actions",
        "background",
        "controls",
        "links",
        "msw",
        "source",
        "width",
      ],
    },
    {
      type: "category",
      label: "Recipes",
      items: ["nextjs"],
    },
    {
      type: "category",
      label: "Configuration",
      items: ["cli", "config", "programmatic", "babel", "http2"],
    },
    {
      type: "category",
      label: "Help",
      items: [
        "troubleshooting",
        {
          type: "link",
          label: "Contributing",
          href: "https://github.com/ginger-society/ginger-book/blob/main/CONTRIBUTING.md",
        },
      ],
    },
  ],
};
