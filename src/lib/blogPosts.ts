import skincare from "@/assets/blog-skincare.webp";
import holi from "@/assets/blog-holi.webp";
import valentine from "@/assets/blog-valentine.webp";
import streetwear from "@/assets/blog-streetwear.webp";
import muscleblaze from "@/assets/blog-muscleblaze.png";
import wellness from "@/assets/blog-wellness.webp";
import metgala from "@/assets/metgala/hero.jpeg";
import metIshaAmbani from "@/assets/metgala/isha-ambani.jpeg";
import metSimoneAshley from "@/assets/metgala/simone-ashley.jpeg";
import metKaranJohar from "@/assets/metgala/karan-johar.jpeg";
import metSudhaReddy from "@/assets/metgala/sudha-reddy.jpeg";
import metSawaiPadmanabh from "@/assets/metgala/sawai-padmanabh-singh.jpeg";
import metNatashaPoonawalla from "@/assets/metgala/natasha-poonawalla.jpeg";
import metManishMalhotra from "@/assets/metgala/manish-malhotra.jpeg";
import metGauravi from "@/assets/metgala/gauravi-kumari.jpeg";
import metAnanya from "@/assets/metgala/ananya-birla.jpeg";
import metDiya from "@/assets/metgala/diya-mehta-jatia.jpeg";
import metBhavitha from "@/assets/metgala/bhavitha-mandava.jpeg";
export type BlogProduct = { name: string; price: string; cb: string; url: string };
export type BlogLook = {
  number: string;
  name: string;
  wearing: string;
  paragraphs: string[];
  verdict: string;
  image: string;
};
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
  content: string[];
  looks?: BlogLook[];
  pullQuote?: string;
  outro?: string[];
  featured?: boolean;
};
export const blogPosts: BlogPost[] = [
  {
    slug: "muscleblaze-health-plan-2026",
    title: "Why MuscleBlaze Belongs in Your Health Plan in 2026",
    excerpt:
      "India's most trusted sports-nutrition brand is running one of its biggest offers of the year - up to 60% off. Here is what makes MuscleBlaze worth building into your routine, and how to make the most of the deal.",
    author: "Quill",
    date: "2026-06-20",
    read: "6 min",
    tag: "Fitness",
    image: "muscleblaze",
    featured: true,
    content: [],
  },
  {
    
    slug: "met-gala-2026-india-took-the-steps",
    title: "Met Gala 2026: India Took the Steps",
    excerpt:
      "From a saree carrying 1,800 carats of diamonds to a sculptural orchid built by a contemporary artist, the Indian contingent turned this year's \"Fashion Is Art\" carpet into a working argument for craft, heritage, and the limits of restraint.",
    author: "Quill",
    date: "2026-05-05",
    read: "11 min",
    tag: "Fashion",
    image: metgala,
    featured: true,
    highlights: [
      "11 Indian looks decoded",
      "Designers, jewels & references",
      "Editor's verdict on each",
    ],
    content: [
      "The 2026 Met Gala arrived with a brief that should, on paper, have favoured the Indian contingent above almost anyone else. The exhibition was titled \"Costume Art,\" the dress code \"Fashion Is Art\" — an invitation, essentially, to treat the carpet as a gallery wall. Indian fashion, with its centuries of hand-painted textiles, miniaturist traditions, and embroidery practices that read more like archival pieces than garments, did not have to translate itself for the theme. It only had to show up.",
      "What follows is the breakdown, look by look. Who wore what, who designed it, what it referenced — and, where it earned one, the verdict.",
    ],
    looks: [
      {
        number: "Look 01",
        name: "Isha Ambani",
        wearing: "In a custom Gaurav Gupta saree, styled by Anaita Shroff Adajania",
        image: metIshaAmbani,
        paragraphs: [
          "Ambani's look was the night's most literal interpretation of the brief. The sculpted gold saree, designed by Gaurav Gupta, fused a modern silhouette with traditional drape and carried hand-painted Pichwai motifs across its surface — a direct nod to one of India's most enduring devotional art traditions. The bodice was the centrepiece, embellished with over 1,800 carats of diamonds, emeralds, polki and kundan drawn from the family's private collection.",
          "What anchored the look was the editing. A maximalist concept can easily collapse under its own weight; this one didn't. The styling kept the focus on the saree's sculptural fall and the jewellery's depth, with no competing flourishes.",
        ],
        verdict: "Heritage, weighed in carats and conviction.",
      },
      {
        number: "Look 02",
        name: "Simone Ashley",
        wearing: "In custom Stella McCartney",
        image: metSimoneAshley,
        paragraphs: [
          "On her third Met outing, Ashley arrived in a \"naked look\" gown by Stella McCartney constructed entirely from draped silver chains — a piece that read, on first glance, as the simplest thing on the carpet, and on the second, as one of the most technically considered. The chains followed the body without restricting it, catching the flashbulbs in a way that made the silhouette shift with every angle.",
          "For an actor whose previous Met appearances have leaned into colour and silhouette, the choice felt like a deliberate de-escalation. A clean idea, executed with absolute confidence.",
        ],
        verdict: "Restraint as a flex.",
      },
      {
        number: "Look 03",
        name: "Karan Johar",
        wearing: "In custom Manish Malhotra",
        image: metKaranJohar,
        paragraphs: [
          "Johar's debut was, in many ways, the loudest argument for Indian craft on the carpet this year. The Manish Malhotra ensemble — a cape, jacket, and trousers — drew directly from the work of Raja Ravi Varma, with hand-painted motifs, traditional zardozi borders, three-dimensional pillar detailing, and embroidered lotuses and swans worked into the piece. The atelier reportedly logged more than 5,600 hours on the look. Even the lining of the jacket was hand-painted.",
          "It was a debut as thesis statement: not Indian fashion translated for an international audience, but Indian fashion presented at full volume and asked to be met on its own terms.",
        ],
        verdict: "A debut that arrived as a manifesto.",
      },
      {
        number: "Look 04",
        name: "Sudha Reddy",
        wearing: "In custom Manish Malhotra, with personal-collection jewels",
        image: metSudhaReddy,
        paragraphs: [
          "Reddy's \"Tree of Life\" gown, designed by Manish Malhotra, was the result of 3,459 hours of work by ninety artisans. It opened with a royal blue velvet corset embroidered in antique gold, then unfurled into a seven-metre train hand-painted in the Machilipatnam Kalamkari tradition, threading in motifs of Palapitta, Jammi Chettu, Kalpavriksha, Surya and Chandra — a near-encyclopaedic homage to South Indian iconography.",
          "The jewellery, styled by Mariel Haenn and drawn entirely from Reddy's private collection, was the talking point: the \"Queen of Merelani,\" a 550-carat tanzanite, anchored a suite valued at over fifteen million dollars. Maximalism, but built on a clear architectural logic.",
        ],
        verdict: "A regional grammar, scaled up to global volume.",
      },
      {
        number: "Look 05",
        name: "Sawai Padmanabh Singh",
        wearing: "In a velvet coat layered over traditional silhouettes",
        image: metSawaiPadmanabh,
        paragraphs: [
          "The Maharaja of Jaipur arrived in the look that the rest of the carpet was, in a sense, competing with: heritage worn correctly. A long velvet coat sat over a more traditional silhouette beneath, the layering doing the work of fusing the contemporary cut with the older language he carries naturally. There was no flourish, no statement piece reaching for attention.",
          "The instinct to under-style was the right one. He was photographed alongside his sister, and the two together made one of the cleaner royal images of the night.",
        ],
        verdict: "Inheritance, worn correctly.",
      },
      {
        number: "Look 06",
        name: "Gauravi Kumari",
        wearing: "In her grandmother Gayatri Devi's vintage chiffon saree, reworked as a gown",
        image: metGauravi,
        paragraphs: [
          "The Princess of Jaipur made her Met debut in a piece that was, in every meaningful sense, an heirloom. She wore her grandmother Gayatri Devi's vintage chiffon saree, transformed for the evening into a fluid gown — a styling decision that preserved the original textile's softness while letting it move as a contemporary silhouette.",
          "The reference was not subtle, but it didn't need to be. Gayatri Devi remains one of the most photographed women of the twentieth century, and walking the Met in her saree was both a tribute and a thesis. Heritage as the actual material of the dress, not merely its inspiration.",
        ],
        verdict: "A debut handled with poise.",
      },
      {
        number: "Look 07",
        name: "Natasha Poonawalla",
        wearing: "In a Marc Quinn sculpture with Dolce & Gabbana couture",
        image: metNatashaPoonawalla,
        paragraphs: [
          "If anyone took the \"Fashion Is Art\" brief literally, it was Poonawalla. The centrepiece of her look was the Orchid Pectoral, a sculptural piece by British artist Marc Quinn, designed specifically for her in lightweight high-tech materials and worn across the chest like an actual flower opening outward. Quinn described the piece as one that only fully comes alive when worn, with the body activating it rather than the plinth.",
          "The Dolce & Gabbana couture beneath, crafted by the Alta Moda team, anchored the sculpture without competing with it. The effect was less an outfit than a deliberate collaboration between artist, wearer, and atelier — the closest thing the carpet had to a performance piece.",
        ],
        verdict: "Living art, exactly as the theme intended.",
      },
      {
        number: "Look 08",
        name: "Manish Malhotra",
        wearing: "In a self-designed bandhgala with a sculptural cape",
        image: metManishMalhotra,
        paragraphs: [
          "The designer dressed three of the night's most-photographed women, but his own look was the quietest tribute on the carpet. The self-designed bandhgala was layered with a cape embroidered with the names of his Mumbai artisans — the people who had built the pieces he was sending down the steps. Architectural references to the Taj Mahal Palace Hotel, the Gateway of India, and Chhatrapati Shivaji Terminus ran through the embellishment, alongside motifs nodding to the city's trains and taxis.",
          "He carried a measuring tape draped at the neck, a deliberate gesture toward the workshop. The look was, in effect, a moving credit line — Malhotra refusing to separate the designer from the people behind the design.",
        ],
        verdict: "The designer as a love letter to his workshop.",
      },
      {
        number: "Look 09",
        name: "Ananya Birla",
        wearing: "In custom Robert Wun couture, with a sculptural mask",
        image: metAnanya,
        paragraphs: [
          "Birla's debut was easily the most discussed Indian arrival outside the established names — a custom Robert Wun couture look completed with a sculptural mask that read, depending on the angle, as either avant-garde sculpture or something closer to surrealist tableau. The internet, predictably, dissected the mask within minutes; the more serious read was that Birla had used her first Met appearance to make a deliberate, art-forward statement rather than a safe heritage play.",
          "That she changed into a separate Harris Reed demi-couture look for the GQ after-party — a structured corset inspired by an M.F. Husain painting from her family's personal collection — only reinforced the night's argument. Birla treated the evening as a sustained piece of curation, not a single arrival.",
        ],
        verdict: "A debut that refused to play it safe.",
      },
      {
        number: "Look 10",
        name: "Diya Mehta Jatia",
        wearing: "In custom Mayyur Girotra",
        image: metDiya,
        paragraphs: [
          "The fashion consultant's debut was the look most explicitly built around a single craft tradition. The Mayyur Girotra ensemble was designed as what she described as a hardcore India story, structured around Shola — the endangered pith-craft tradition from West Bengal, in which the soft inner core of the shola plant is hand-shaped into intricate sculptural detailing.",
          "Most of the carpet's craft references this year were nationally familiar. This one was deliberately not. Choosing a regional, endangered tradition for a Met debut was the kind of bet that only works if the work itself can carry the weight, and here it did.",
        ],
        verdict: "A regional craft, handed the loudest stage available.",
      },
      {
        number: "Look 11",
        name: "Bhavitha Mandava",
        wearing: "In Chanel",
        image: metBhavitha,
        paragraphs: [
          "Mandava's debut was, on first viewing, the most polarising look the Indian contingent put forward — a Chanel ensemble that read, to a casual eye, as a jeans-and-top combination on a carpet built for spectacle. The discourse online was instant and unkind. The actual construction was more interesting: a trompe-l'oeil couture piece engineered to look casual, with the denim and the top both built from embellishment-grade fabrics designed to mimic something deliberately ordinary.",
          "Read against the theme — fashion as art — the gesture was sharper than the social-media response suggested. Mandava framed it as a tribute to her own journey in the industry. A debut that knew exactly what it was doing, even when the room briefly didn't.",
        ],
        verdict: "A debut sharper than its first read.",
      },
    ],
    pullQuote:
      "If there was a through-line this year, it was that the Indian contingent had stopped translating themselves. Nobody on those steps was explaining their references.",
    outro: [
      "Eleven looks, eleven different conversations with the carpet. What was striking, taken together, was how little of the evening was spent in translation. A decade ago, an Indian designer at the Met was a footnote; five years ago, a curiosity; this year, a working assumption. The steps absorbed sarees, sherwanis, Kalamkari, Pichwai, Shola, vintage chiffon, and one full sculptural pectoral without anyone pausing to caption them.",
      "That shift — from explanation to fluency — is the actual story. The clothes were extraordinary, but extraordinary clothes have always shown up. What's new is the confidence with which they arrived, and the equally striking confidence with which the room received them.",
      "Next year's theme has not yet been announced. On the available evidence, the Indian contingent will be ready before the rest of us.",
    ],
  },
  {
    slug: "top-skincare-brands-2026-cashback",
    title: "Top 5 Skin Care Brands of 2026: Wallet-Friendly Picks With Real Cashback",
    excerpt:
      "We tested 30 plus skincare brands available in India and shortlisted the 5 most-loved names that pair clean ingredients with serious savings on CouponMinty.",
    author: "Priya Sharma",
    date: "2026-04-22",
    read: "9 min",
    tag: "Beauty",
    image: skincare,
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
    date: "2026-04-18",
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
    date: "2026-04-15",
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
    date: "2026-04-10",
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
    date: "2026-03-12",
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
    date: "2026-02-08",
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
    date: "2026-02-02",
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
