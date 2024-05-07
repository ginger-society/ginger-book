import { preparePackageJsonForPublish } from "./package-types-helpers.js";
import fs from "fs";

const pkgJson = JSON.parse(
  fs.readFileSync("./packages/ginger-book/package.json"),
);
// write out old package.json to a temp file that won't be published
fs.writeFileSync(
  "./packages/ginger-book/backup-package.json",
  JSON.stringify(pkgJson, null, 2),
);
// update existing package.json
preparePackageJsonForPublish(pkgJson);
// write updates to package.json
fs.writeFileSync(
  "./packages/ginger-book/package.json",
  JSON.stringify(pkgJson, null, 2),
);
