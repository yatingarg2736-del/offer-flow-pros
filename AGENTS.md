# Structure

- Brands/coupons data lives in `src/data/affiliateData.ts` (232 brands, 60 coupons, 16 categories); pages `/brands`, `/brands/:slug`, `/coupons`, `/coupons/:category` pre-render via `getStaticPaths` in `src/App.tsx`. Zero-coupon pages are noindex and excluded from the sitemap (`scripts/generate-sitemap.mjs`). New pages for these datasets should follow this pattern.
- Homepage featured-brand cards use the ordered brand records in `src/data/affiliateData.ts` and link to `/brands/:slug`, preserving the existing SEO behavior for each brand page.
