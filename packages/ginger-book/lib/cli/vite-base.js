import path from "path";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import { globby } from "globby";
import { fileURLToPath } from "url";
import tsconfigPaths from "vite-tsconfig-paths";
import getAppRoot from "./get-app-root.js";
import gingerBookPlugin from "./vite-plugin/vite-plugin.js";
import debug from "./debug.js";
import mergeViteConfigs from "./merge-vite-configs.js";
import getUserViteConfig from "./get-user-vite-config.js";
import mdxPlugin from "./vite-plugin/mdx-plugin.js";
import copyMswWorker from "./copy-msw-worker.js";

/**
 * @param gingerBookConfig {import("../shared/types.js").Config}
 * @param configFolder {string}
 * @param viteConfig {import('vite').InlineConfig}
 */
const getBaseViteConfig = async (
  gingerBookConfig,
  configFolder,
  viteConfig,
) => {
  const _removedgingerBookConfigOptions = [
    "publicDir",
    "enableFlow",
    "babelParserOpts",
    "babelPresets",
    "babelPlugins",
    "vitePlugins",
    "css",
    "envPrefix",
    "define",
    "resolve",
    "optimizeDeps",
    "serve",
    "build",
  ];

  // we moved all vite settings into vite.config.js, fail legacy GingerBook configs
  // remove this later
  let oldKeyUsed = false;
  Object.keys(gingerBookConfig).forEach((configKey) => {
    if (_removedgingerBookConfigOptions.includes(configKey)) {
      console.error(
        `ERROR: ${configKey} was removed from the GingerBook config in v1. Move it to vite.config.js. https://gingersociety.org/ginger-book/docs/config`,
      );
      oldKeyUsed = true;
    }
  });
  oldKeyUsed && process.exit(1);

  const {
    userViteConfig,
    hasReactPlugin,
    hasReactSwcPlugin,
    hasTSConfigPathPlugin,
  } = await getUserViteConfig(
    viteConfig.build ? "build" : "serve",
    viteConfig.mode || "production",
    gingerBookConfig.viteConfig,
  );

  debug("User provided @vite/plugin-react: %s", hasReactPlugin);
  debug("User provided @vite/plugin-react-swc: %s", hasReactSwcPlugin);

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inGingerBookMonorepo = fs.existsSync(
    path.join(__dirname, "../../../../e2e/addons/package.json"),
  );
  debug("Executed from the GingerBook monorepo: %s", inGingerBookMonorepo);

  const resolve = {};
  if (Array.isArray(userViteConfig.resolve?.alias)) {
    resolve.alias = [
      {
        find: "msw/browser",
        replacement: gingerBookConfig.addons.msw.enabled
          ? "msw/browser"
          : path.join(__dirname, "./empty-module.js"),
      },
      {
        find: "msw",
        replacement: gingerBookConfig.addons.msw.enabled
          ? "msw"
          : path.join(__dirname, "./empty-module.js"),
      },
      {
        find: "axe-core",
        replacement: gingerBookConfig.addons.a11y.enabled
          ? "axe-core"
          : path.join(__dirname, "./empty-module.js"),
      },
    ];
  } else {
    resolve.alias = {
      ["msw/browser"]: gingerBookConfig.addons.msw.enabled
        ? "msw/browser"
        : path.join(__dirname, "./empty-module.js"),
      msw: gingerBookConfig.addons.msw.enabled
        ? "msw"
        : path.join(__dirname, "./empty-module.js"),
      ["axe-core"]: gingerBookConfig.addons.a11y.enabled
        ? "axe-core"
        : path.join(__dirname, "./empty-module.js"),
    };
  }

  const storyEntries = (
    await globby(
      Array.isArray(gingerBookConfig.stories)
        ? gingerBookConfig.stories
        : [gingerBookConfig.stories],
    )
  ).map((story) => path.join(process.cwd(), story));

  /**
   * @type {import('vite').InlineConfig}
   */
  const config = {
    ...viteConfig,
    base: gingerBookConfig.base,
    configFile: false,
    publicDir:
      typeof userViteConfig.publicDir === "undefined"
        ? path.join(process.cwd(), "public")
        : userViteConfig.publicDir,
    cacheDir: userViteConfig.cacheDir
      ? userViteConfig.cacheDir
      : path.join(process.cwd(), "node_modules/.vite"),
    root: getAppRoot(),
    css: {
      postcss:
        userViteConfig.css && userViteConfig.css.postcss
          ? userViteConfig.css.postcss
          : process.cwd(),
    },
    envDir: userViteConfig.envDir ? userViteConfig.envDir : process.cwd(),
    resolve,
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react-hotkeys-hook",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-inspector",
        "classnames",
        "debug",
        "history",
        "lodash.merge",
        "query-string",
        "prism-react-renderer",
        "@mdx-js/react",
        "@ladle/react-context",
        ...(gingerBookConfig.addons.a11y.enabled ? ["axe-core"] : []),
        ...(gingerBookConfig.addons.msw.enabled ? ["msw"] : []),
        ...(gingerBookConfig.addons.msw.enabled ? ["msw/browser"] : []),
        ...(inGingerBookMonorepo ? [] : ["@ginger-society/ginger-book"]),
        ...(!!resolve.alias ? [] : ["react-dom/client"]),
      ],
      entries: [
        path.join(process.cwd(), ".ginger-book/components.js"),
        path.join(process.cwd(), ".ginger-book/components.jsx"),
        path.join(process.cwd(), ".ginger-book/components.tsx"),
        path.join(process.cwd(), ".ginger-book/components.ts"),
        ...storyEntries,
      ],
    },
    plugins: [
      mdxPlugin({ mode: viteConfig.mode || "production" }),
      !hasTSConfigPathPlugin &&
        !process.versions.pnp &&
        tsconfigPaths({
          root: process.cwd(),
        }),
      gingerBookPlugin(gingerBookConfig, configFolder, viteConfig.mode || ""),
      !hasReactPlugin && !hasReactSwcPlugin && react(),
    ],
  };
  // initialize msw worker
  if (gingerBookConfig.addons.msw.enabled) {
    copyMswWorker(config.publicDir || "");
  }
  return mergeViteConfigs(userViteConfig, config);
};

export default getBaseViteConfig;
