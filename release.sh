#!/bin/bash

set -eo pipefail

echo "Running release"

echo "Build @ginger-book/react"
turbo run build --filter=@ginger-book/react

echo "Update package.json"
node ./packages/ladle/scripts/update-package-types.js

echo "Generate Types":
pnpm --filter @ginger-book/react types

echo "Changeset publish"
changeset publish

echo "Revert package.json"
node ./packages/ladle/scripts/revert-package-types.js
