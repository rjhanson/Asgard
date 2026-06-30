# Infrastructure

Terraform for hosting the static site on AWS:

- **S3** (private bucket, name = apex domain) holds the built site
- **CloudFront** serves it over HTTPS, reading S3 via Origin Access Control
- **CloudFront Function** redirects `www` → apex and rewrites pretty URLs to `index.html`
- **ACM** TLS certificate (in `us-east-1`, as CloudFront requires)
- **Route53** A/AAAA alias records for apex and `www`

The Route53 hosted zone for the domain is assumed to **already exist** (it's
looked up as a data source, not created).

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install) >= 1.6 (`brew install terraform`)
- AWS CLI configured with credentials that can manage S3/CloudFront/ACM/Route53

## AWS credentials

Do **not** use AWS root credentials or create root access keys. Set up a
dedicated identity scoped to just what this project touches.

Recommended: **IAM Identity Center (SSO)** with a custom permission set whose
inline policy is [`iam-deploy-policy.json`](iam-deploy-policy.json) (least
privilege — S3, CloudFront, ACM, Route53). After assigning yourself that
permission set, configure the CLI:

```bash
aws configure sso              # enter your SSO start URL + region, name a profile
export AWS_PROFILE=<profile>   # e.g. russell-site (Terraform and deploy.sh honor this)
aws sts get-caller-identity    # confirm it works
```

SSO sessions expire; run `aws sso login` to re-authenticate when they do.

(The same `iam-deploy-policy.json` works as an inline policy on a plain IAM
user if you opt for long-lived access keys instead.)

## First-time setup

With `AWS_PROFILE` exported (see above):

```bash
cd infra
terraform init
terraform plan      # review
terraform apply
```

ACM DNS validation and the CloudFront distribution can take 5–30 minutes on
first apply — Terraform waits for them.

Variables have sensible defaults (`infra/variables.tf`); override the domain
with `-var 'domain_name=example.com'` if needed.

## Deploying site changes

From the repo root, after infra exists:

```bash
./scripts/deploy.sh
```

It builds the site, syncs `dist/` to S3 (long cache for hashed assets, no-cache
for HTML), and invalidates the CloudFront cache. Bucket and distribution IDs are
read from Terraform outputs — nothing is hardcoded.

## Tearing down

```bash
cd infra
terraform destroy
```

Note: the S3 bucket has versioning enabled; you may need to empty it
(including old versions) before destroy will remove it.
