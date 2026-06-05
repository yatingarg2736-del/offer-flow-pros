export type Store = {
  name: string;
  cb: string;
  deals: number;
  url: string;
  color: string;
  category: string;
};

export type Coupon = {
  brand: string;
  title: string;
  code: string;
  tag: string;
  url: string;
  expiry: string;
};

export const stores: Store[] = [
  { name: "Amazon", cb: "8%", deals: 142, url: "https://www.amazon.in", color: "from-amber-500 to-orange-500", category: "Shopping" },
  { name: "Flipkart", cb: "7.5%", deals: 128, url: "https://www.flipkart.com", color: "from-blue-500 to-indigo-600", category: "Shopping" },
  { name: "Myntra", cb: "10%", deals: 96, url: "https://track.vcommission.com/click?campaign_id=10882&pub_id=129716", color: "from-pink-500 to-rose-500", category: "Fashion" },
  { name: "Ajio", cb: "12%", deals: 74, url: "https://www.ajio.com", color: "from-fuchsia-500 to-purple-600", category: "Fashion" },
  { name: "Nykaa", cb: "9%", deals: 88, url: "https://www.nykaa.com", color: "from-rose-500 to-red-500", category: "Beauty" },
  { name: "Swiggy", cb: "15%", deals: 52, url: "https://www.swiggy.com", color: "from-orange-500 to-amber-500", category: "Food" },
  { name: "Zomato", cb: "12%", deals: 47, url: "https://www.zomato.com", color: "from-red-500 to-rose-600", category: "Food" },
  { name: "MakeMyTrip", cb: "6%", deals: 63, url: "https://www.makemytrip.com", color: "from-sky-500 to-blue-600", category: "Travel" },
  { name: "boAt", cb: "10%", deals: 38, url: "https://www.boat-lifestyle.com", color: "from-slate-700 to-slate-900", category: "Electronics" },
  { name: "Puma", cb: "8%", deals: 41, url: "https://in.puma.com", color: "from-zinc-700 to-black", category: "Fashion" },
  { name: "H&M", cb: "9%", deals: 56, url: "https://www2.hm.com/en_in", color: "from-red-600 to-red-700", category: "Fashion" },
  { name: "Adidas", cb: "11%", deals: 49, url: "https://www.adidas.co.in", color: "from-neutral-800 to-black", category: "Fashion" },
];

export const coupons: Coupon[] = [
  { brand: "Myntra", title: "Flat 70% OFF plus Extra 10% Cashback", code: "MINT70", tag: "Fashion", url: "https://track.vcommission.com/click?campaign_id=10882&pub_id=129716", expiry: "31 Dec 2026" },
  { brand: "Amazon", title: "Up to ₹15,000 OFF on Smartphones", code: "DEALMINT", tag: "Electronics", url: "https://www.amazon.in", expiry: "30 Jun 2026" },
  { brand: "Swiggy", title: "60% OFF up to ₹120 plus 15% Cashback", code: "EATMINT", tag: "Food", url: "https://www.swiggy.com", expiry: "31 May 2026" },
  { brand: "Nykaa", title: "Min 40% OFF on Beauty plus 9% Cashback", code: "GLOWMINT", tag: "Beauty", url: "https://www.nykaa.com", expiry: "15 Jul 2026" },
  { brand: "Ajio", title: "Flat ₹500 OFF on ₹1,499 plus 12% CB", code: "MINT500", tag: "Fashion", url: "https://www.ajio.com", expiry: "31 Aug 2026" },
  { brand: "Flipkart", title: "₹2,000 Instant Discount on Laptops", code: "TECHMINT", tag: "Electronics", url: "https://www.flipkart.com", expiry: "30 Jun 2026" },
  { brand: "MakeMyTrip", title: "Flat ₹3,000 OFF on Domestic Flights", code: "FLYMINT", tag: "Travel", url: "https://www.makemytrip.com", expiry: "30 Sep 2026" },
  { brand: "Zomato", title: "50% OFF up to ₹100 plus Free Delivery", code: "ZOMINT50", tag: "Food", url: "https://www.zomato.com", expiry: "31 May 2026" },
];

export const logoFor = (url: string, size = 64) => {
  try {
    const domain = new URL(url).hostname.replace(/^www\./, "");
    return `https://www.google.com/s2/favicons?sz=${size}&domain=${domain}`;
  } catch {
    return "";
  }
};
