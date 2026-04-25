// Appends CouponMinty UTM parameters to outbound brand URLs
// so that clicks can be tracked across affiliate partners.
export const withUtm = (url: string, campaign = "coupon", content?: string) => {
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", "couponminty");
    u.searchParams.set("utm_medium", "affiliate");
    u.searchParams.set("utm_campaign", campaign);
    if (content) u.searchParams.set("utm_content", content);
    return u.toString();
  } catch {
    return url;
  }
};
