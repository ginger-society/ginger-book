#!/bin/bash

set -eo pipefail

echo "Running release"

echo "Build @ginger-society/ginger-book"
turbo run build --filter=@ginger-society/ginger-book

echo "Update package.json"
node ./packages/ginger-book/scripts/update-package-types.js

echo "Generate Types":
pnpm --filter @ginger-society/ginger-book types


echo "Revert package.json"
node ./packages/ginger-book/scripts/revert-package-types.js
