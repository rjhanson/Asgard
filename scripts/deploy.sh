#!/usr/bin/env bash
#
# Build the site and deploy it to S3 + CloudFront.
#
# Reads the target bucket and distribution from Terraform outputs, so there's
# nothing to hardcode here. Run `terraform apply` in infra/ at least once first.
#
# Usage:  ./scripts/deploy.sh
# Requires: node/npm, aws CLI (configured), terraform.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "==> Reading Terraform outputs"
BUCKET="$(terraform -chdir=infra output -raw bucket_name)"
DIST_ID="$(terraform -chdir=infra output -raw distribution_id)"
echo "    bucket:       $BUCKET"
echo "    distribution: $DIST_ID"

echo "==> Building site"
npm run build

echo "==> Syncing to s3://$BUCKET"
# Hashed assets (Astro fingerprints these) get a long, immutable cache.
aws s3 sync dist/ "s3://$BUCKET" \
  --delete \
  --exclude "*.html" \
  --cache-control "public, max-age=31536000, immutable"

# HTML is mutable — always revalidate so deploys show up immediately.
aws s3 sync dist/ "s3://$BUCKET" \
  --delete \
  --exclude "*" \
  --include "*.html" \
  --cache-control "public, max-age=0, must-revalidate" \
  --content-type "text/html; charset=utf-8"

echo "==> Invalidating CloudFront cache"
aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' --output text

echo "==> Done. $(terraform -chdir=infra output -raw site_url)"
