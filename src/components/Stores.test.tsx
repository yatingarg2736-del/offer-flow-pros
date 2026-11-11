import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Stores, { featuredBrandSlugs } from "@/components/Stores";

describe("homepage featured brands", () => {
  it("shows the requested brands in order and links each card to its brand page", () => {
    const { container } = render(
      <MemoryRouter>
        <Stores />
      </MemoryRouter>,
    );

    const cards = Array.from(container.querySelectorAll("a[href^='/brands/']"));

    expect(featuredBrandSlugs).toEqual([
      "global-delight",
      "economy-bookings",
      "the-unity-soft",
      "gift-republic",
      "vista-social",
      "sky-view-observatory",
      "view-boston",
      "cloudwalker-slippers",
      "retechtronics",
      "the-view-from-the-shard",
    ]);
    expect(cards.map((card) => card.getAttribute("href"))).toEqual(
      featuredBrandSlugs.map((slug) => `/brands/${slug}`),
    );
    expect(cards).toHaveLength(10);
    expect(container.textContent).not.toMatch(/cashback|active deals/i);
  });
});