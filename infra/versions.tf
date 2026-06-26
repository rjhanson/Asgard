terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40"
    }
  }
}

# Primary provider — region where the S3 bucket lives.
provider "aws" {
  region = var.region
}

# CloudFront requires its ACM certificate to be in us-east-1, regardless of
# where the bucket lives. This aliased provider is used only for the cert.
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
