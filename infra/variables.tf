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

variable "budget_limit_usd" {
  description = "Monthly cost alert threshold in USD."
  type        = string
  default     = "5"
}

variable "budget_alert_email" {
  description = "Email address that receives budget alerts."
  type        = string
  default     = "russelljhanson@gmail.com"
}

variable "tags" {
  description = "Tags applied to all resources."
  type        = map(string)
  default = {
    Project   = "russelljhanson.com"
    ManagedBy = "terraform"
  }
}
