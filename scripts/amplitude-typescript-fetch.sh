#!/bin/bash

REPO_URL="https://github.com/amplitude/Amplitude-TypeScript"
if [ -z "$TAG" ]; then
  echo "Error: TAG environment variable is not set."
  echo "Please specify a tag to clone (e.g., export TAG=v1.0.0)."
  exit 1
fi
CLONED_REPOS_DIR="$PWD/cloned_repos"
echo "Making directory $CLONED_REPOS_DIR..."
mkdir -p "$CLONED_REPOS_DIR"
cd "$CLONED_REPOS_DIR"
rm -rf amplitude_typescript
echo "Cloning repository $REPO_URL at tag $TAG into $CLONED_REPOS_DIR..."
git clone --depth 1 --branch "$TAG" "$REPO_URL" amplitude_typescript
if [ $? -ne 0 ]; then
  echo "Error: Git clone failed."
  exit 1
fi
cd amplitude_typescript

yarn install
yarn build

#change back to the original directory
cd ..

# exit 0 for success
exit 0
