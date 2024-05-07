#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import {
  preparePackageJsonForPublish,
  revertPackageJson,
} from "./scripts/package-types-helpers.js";

const pkgJson = JSON.parse(fs.readFileSync("./package.json"));
console.log(`Publishing @ginger-society/ginger-book ${pkgJson.version}`);

preparePackageJsonForPublish(pkgJson);
fs.writeFileSync("./package.json", JSON.stringify(pkgJson, null, 2));

try {
  execSync("npm publish --tag latest");
} catch (e) {
  console.log(e);
  console.log("Publish failed, reverting package.json");
}

// pkgJson.version = oldVersion;
revertPackageJson(pkgJson);
fs.writeFileSync("./package.json", JSON.stringify(pkgJson, null, 2));
