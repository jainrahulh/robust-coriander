#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://api.stackbit.com/project/5f6767b40fd029001d39b28b/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5f6767b40fd029001d39b28b

curl -s -X POST https://api.stackbit.com/project/5f6767b40fd029001d39b28b/webhook/build/ssgbuild > /dev/null
gatsby build

# wait for studio-build.js
wait

curl -s -X POST https://api.stackbit.com/project/5f6767b40fd029001d39b28b/webhook/build/publish > /dev/null
echo "stackbit-build.sh: finished build"
