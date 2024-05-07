import fs from "fs";

const pkgJson = JSON.parse(
  fs.readFileSync("./packages/ginger-book/backup-package.json"),
);
// write updates to package.json
fs.writeFileSync(
  "./packages/ginger-book/package.json",
  JSON.stringify(pkgJson, null, 2),
);
// remove backup file
fs.rmSync("./packages/ginger-book/backup-package.json");
