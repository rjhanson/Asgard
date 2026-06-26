variable "domain_name" {
  description = "Apex domain, e.g. russelljhanson.com. This is the canonical host; www redirects here."
  type        = string
  default     = "russelljhanson.com"
}

variable "region" {
  description = "AWS region for the S3 bucket."
  type        = string
  default     = "us-east-1"
}

variable "tags" {
  description = "Tags applied to all resources."
  type        = map(string)
  default = {
    Project   = "russelljhanson.com"
    ManagedBy = "terraform"
  }
}
