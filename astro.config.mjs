import { defineConfig } from 'astro/config';

// Static output is the default — Astro emits plain HTML/CSS into ./dist,
// ideal for an S3 bucket served through CloudFront.
// Set `site` to the production URL so canonical links / sitemaps resolve.
export default defineConfig({
  site: 'https://russelljhanson.com',
});
