import skincare from "@/assets/seidenperle-woman-8606998.webp";
import holi from "@/assets/blog-holi.webp";
import valentine from "@/assets/blog-valentine.webp";
import streetwear from "@/assets/blog-streetwear.webp";
import health from "@/assets/blog-health.webp";
import wellness from "@/assets/blog-wellness.webp";

export type BlogProduct = { name: string; price: string; cb: string; url: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  tag: string;
  image: string;
  highlights?: string[];
  products?: BlogProduct[];
  content: string[]; // paragraphs
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-skincare-brands-2026-cashback",
    title: "Top 5 Skin Care Brands of 2026: Wallet-Friendly Picks With Real Cashback",
    excerpt:
      "We tested 30 plus skincare brands available in India and shortlisted the 5 most-loved names that pair clean ingredients with serious savings on CouponMinty.",
    author: "Priya Sharma",
    date: "Apr 22, 2026",
    read: "9 min",
    tag: "Beauty",
    image: skincare,
    featured: true,
    products: [
      { name: "Plum Green Tea Toner", price: "₹390", cb: "12% CB", url: "https://plumgoodness.com" },
      { name: "Mamaearth Vitamin C Serum", price: "₹599", cb: "10% CB", url: "https://mamaearth.in" },
      { name: "The Derma Co Niacinamide", price: "₹525", cb: "9% CB", url: "https://thedermaco.com" },
    ],
    content: [
      "Skincare in India has changed a lot in the past two years. The shelves are crowded, prices have crept up, and figuring out what actually works is harder than ever. We spent three months trying products from 30 plus brands so you do not have to.",
      "Plum Goodness leads the pack for sensitive skin. Their Green Tea range is gentle, fragrance light and priced under ₹500 for most SKUs. Stack the brand sale with CouponMinty cashback and you save close to a fourth of the cart value.",
      "Mamaearth still wins on trust. The Vitamin C Serum is a beginner friendly option that does not sting. We saw real glow after about three weeks of nightly use. Pair it with their face wash for the best combo deal.",
      "The Derma Co is for shoppers who want science forward formulas. Their Niacinamide and Salicylic Acid lines are the most reordered products in our test group. Cashback runs 8 to 10 percent through CouponMinty most of the year.",
      "Minimalist and Dot and Key round out our top five. Both brands focus on transparent ingredient lists and skip the marketing fluff. Use their app for the first order discount, then route through CouponMinty for the cashback boost.",
      "Quick savings tip: most skincare brands run a flash sale around the 1st and the 15th of each month. Add to cart, wait for the SMS, then check CouponMinty for an extra coupon before paying. This single habit saves regular shoppers 800 to 1500 rupees a month.",
    ],
  },
  {
    slug: "world-health-day-2026-free-habits",
    title: "World Health Day 2026: Free Habits That Cut Your Doctor Visits",
    excerpt:
      "Seven daily routines, backed by Indian doctors, that boost immunity and save you thousands on medical bills. Plus the best wellness brand offers this month.",
    author: "Dr. Ananya Iyer",
    date: "Apr 18, 2026",
    read: "7 min",
    tag: "Wellness",
    image: health,
    highlights: ["7 daily wellness habits", "Best Indian wellness brands", "Cashback on Pharmeasy & 1mg"],
    content: [
      "Most of us spend more on health when we ignore the basics. The seven habits below cost nothing and are recommended by doctors at Apollo, Fortis and AIIMS for everyday Indians juggling work, family and traffic.",
      "Start with sleep. Seven hours, same time daily. Skip the late night doom scroll and your immune system thanks you within a week. No supplement matches what consistent sleep does.",
      "Walk twenty minutes after dinner. This single habit improves digestion, lowers post meal sugar spikes and helps you sleep better. You do not need a treadmill or a fancy tracker.",
      "Hydrate with intent. Three litres a day for most adults, more if you are outdoors. Carry a one litre bottle and finish three of them before sundown.",
      "Cut sugar in your chai by half over a month. Your taste buds adjust quickly and the energy crashes after lunch disappear.",
      "Use CouponMinty cashback when you do need pharmacy or wellness products. Pharmeasy, 1mg and HyugaLife all have running offers we update weekly. Stacking these with bank card discounts often gets you 15 to 25 percent off the cart.",
    ],
  },
  {
    slug: "bonkers-corner-streetwear-case-study",
    title: "Case Study: The Rise of Bonkers Corner in Indian Streetwear",
    excerpt:
      "How a small Hyderabad-based label became India's most-talked-about streetwear brand, and how to grab their pieces with stacked CouponMinty cashback.",
    author: "Karan Mehta",
    date: "Apr 15, 2026",
    read: "8 min",
    tag: "Fashion",
    image: streetwear,
    highlights: ["Brand story breakdown", "Best-selling pieces", "Exclusive CouponMinty code"],
    content: [
      "Bonkers Corner started in a small studio in Hyderabad in 2018. Today they ship over a lakh orders a month and have a waiting list for limited drops. The story is a great example of how Indian D2C brands are winning by going niche.",
      "Their early bet was simple: oversized fits, bold prints and pricing under ₹1500. That hit a sweet spot for college students who wanted streetwear without the global brand markup.",
      "The hoodies and the cargo pants are the heroes. The fleece quality is solid for the price and the print stays fresh past 30 washes in our test.",
      "Drops sell out within hours. Sign up for their SMS list and check CouponMinty about ten minutes before the launch. Our exclusive code BONK40 stacks on top of the brand discount during most launches.",
      "Returns and exchange policy is fair, sizing runs slightly large so size down if you are between two numbers.",
    ],
  },
  {
    slug: "hyugalife-coupons-offers",
    title: "HyugaLife Coupon Codes & Offers on CouponMinty",
    excerpt:
      "A full breakdown of every running HyugaLife discount, bank offer and the extra 10 percent cashback you only get through CouponMinty.",
    author: "Neha Kapoor",
    date: "Apr 10, 2026",
    read: "5 min",
    tag: "Wellness",
    image: wellness,
    highlights: ["All active HyugaLife codes", "Bank card offers", "Stacking guide"],
    content: [
      "HyugaLife has quickly become one of the most loved wellness destinations in India. They stock supplements, sports nutrition, healthy snacks and grooming under one roof.",
      "The current best deal is the HYUGA25 code which gives 25 percent off across categories. Stack it with the 10 percent CouponMinty cashback and you are saving close to a third on most carts.",
      "ICICI and HDFC credit cards usually add another 10 percent on Saturdays. Always check the offer banner at the top of the HyugaLife homepage before paying.",
      "Subscriptions for protein and multivitamins get an additional 5 percent. If you order monthly, this adds up over a year.",
      "Quick tip: do not split your order into multiple small carts. One big cart usually crosses the free shipping threshold and qualifies for the higher cashback slab.",
    ],
  },
  {
    slug: "holi-sale-2026-coupon-codes",
    title: "Holi Sale 2026: Best Coupon Codes & Brand Discounts on CouponMinty",
    excerpt:
      "From fashion to electronics, here are the verified Holi 2026 deals worth your money plus ready-to-copy codes from 40 plus top Indian brands.",
    author: "Rahul Verma",
    date: "Mar 12, 2026",
    read: "10 min",
    tag: "Festive",
    image: holi,
    highlights: ["40 plus brand deals", "Up to 80 percent off", "Limited-time codes"],
    content: [
      "Holi sales in India are no longer just about ethnic wear. From smartphones to skincare, every category drops prices for a full week around the festival.",
      "Amazon and Flipkart kick things off three days before Holi. The first 24 hours have the best deals on phones and large appliances. After that, prices climb back up.",
      "Myntra and Ajio dominate fashion. Look for the bigger brands like Levi's and Puma where the discount is real. Smaller listed brands often inflate the MRP.",
      "Beauty and personal care from Nykaa, Tira and Purplle run buy two get one offers. Stack with CouponMinty cashback to push the saving past 50 percent on regular use products.",
      "Travel brands like MakeMyTrip and EaseMyTrip add festive promo codes on hotels and flights. Booking dates that avoid Holi week itself usually returns the steepest savings.",
    ],
  },
  {
    slug: "valentines-day-2026-deals",
    title: "Valentine's Day Sales 2026: Top Brands Offering Unmissable Deals in India",
    excerpt:
      "Gifting ideas under ₹500, ₹1,000 and ₹2,500 with the highest cashback. Perfect for last-minute shoppers who still want to save.",
    author: "Aditya Rao",
    date: "Feb 08, 2026",
    read: "6 min",
    tag: "Festive",
    image: valentine,
    highlights: ["Gift ideas by budget", "Same-day delivery brands", "Best couple deals"],
    content: [
      "Valentine's gifting in India has gone way beyond chocolates and roses. Brands now build special bundles a week in advance, and many ship same day in metros.",
      "Under ₹500 the safe bet is FNP for flowers and a small cake combo. Add the CouponMinty code at checkout for 10 percent cashback.",
      "Under ₹1000 try a curated grooming set from Beardo or a skincare set from Plum. Both brands run buy two get one offers in the first week of February.",
      "Under ₹2500 a Boat Airdopes pair or a Caratlane silver pendant works for almost everyone. Caratlane gives a free engraving which makes the gift feel personal without spending more.",
      "Last minute tip: most brands stop accepting same day delivery orders by 2 pm on the 13th. Plan a day in advance to avoid the express delivery surcharge.",
    ],
  },
  {
    slug: "couponminty-publisher-guide",
    title: "Becoming a CouponMinty Publisher: A Beginner's Guide",
    excerpt:
      "Earn from your blog, Telegram channel or YouTube. Here is exactly how to start, what tools to use, and how creators are making ₹50,000 plus a month.",
    author: "Neha Kapoor",
    date: "Feb 02, 2026",
    read: "11 min",
    tag: "Guides",
    image: skincare,
    highlights: ["Step-by-step setup", "Top earning niches", "Real income screenshots"],
    content: [
      "Affiliate income in India has matured. Creators with even small audiences are earning steady money by sharing genuinely useful deals. CouponMinty makes the setup straightforward.",
      "Step one: sign up as a publisher on the CouponMinty creators page. Approval usually comes through in 48 hours.",
      "Step two: pick a niche you actually shop in. Beauty, tech, fashion and finance are the highest paying. Avoid being a generic deals page, the conversions are weaker.",
      "Step three: use the publisher dashboard to grab tracked links. Every click and sale is reported in real time.",
      "Step four: build trust. Share only deals you would use yourself. Audiences in India are sharp, push too hard and you lose them.",
      "Many of our top creators started as small Telegram channels and grew to 50,000 a month within a year. Consistency, not size of audience, is the deciding factor.",
    ],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];
export const otherPosts = blogPosts.filter((p) => !p.featured);
