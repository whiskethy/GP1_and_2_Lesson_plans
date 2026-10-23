#!/bin/sh
# MkDocs won't use the repo root as docs_dir, so stage the content into a hidden
# folder first. Every non-hidden file in the repo publishes; that's the rule.
set -e
cd "$(dirname "$0")/.."
rm -rf .build && mkdir -p .build/docs
rsync -a --exclude='.*' --exclude=mkdocs.yml ./ .build/docs/
cp -R .theme/. .build/docs/
mkdocs build "$@"
