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

export const coupons: Coupon[] = [];

export const logoFor = (url: string, size = 64) => {
  try {
    const domain = new URL(url).hostname.replace(/^www\./, "");
    return `https://www.google.com/s2/favicons?sz=${size}&domain=${domain}`;
  } catch {
    return "";
  }
};
