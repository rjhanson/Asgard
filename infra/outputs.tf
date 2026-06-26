output "bucket_name" {
  description = "S3 bucket the built site is synced to."
  value       = aws_s3_bucket.site.id
}

output "distribution_id" {
  description = "CloudFront distribution ID (used for cache invalidation on deploy)."
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_domain" {
  description = "CloudFront domain name (the *.cloudfront.net endpoint)."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "Canonical site URL."
  value       = "https://${var.domain_name}"
}
