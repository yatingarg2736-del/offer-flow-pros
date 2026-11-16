import { describe, expect, it } from "vitest";
import { coupons as affiliateCoupons } from "@/data/affiliateData";
import { coupons as homepageCoupons } from "@/lib/dealsData";

describe("coupon listings", () => {
  it("does not publish unverified affiliate coupon codes", () => {
    expect(affiliateCoupons).toEqual([]);
  });

  it("does not publish unverified homepage coupon offers", () => {
    expect(homepageCoupons).toEqual([]);
  });
});