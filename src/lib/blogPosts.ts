import skincare from "@/assets/blog-skincare.webp";
import holi from "@/assets/blog-holi.webp";
import valentine from "@/assets/blog-valentine.webp";
import streetwear from "@/assets/blog-streetwear.webp";
import health from "@/assets/blog-health.webp";
import wellness from "@/assets/blog-wellness.webp";
import metgala from "@/assets/blog-metgala-hero.jpg";
import metLook01 from "@/assets/metgala/look-01.jpg";
import metLook02 from "@/assets/metgala/look-02.jpg";
import metLook03 from "@/assets/metgala/look-03.jpg";
import metLook04 from "@/assets/metgala/look-04.jpg";
import metLook05 from "@/assets/metgala/look-05.jpg";
import metLook06 from "@/assets/metgala/look-06.jpg";
import metLook07 from "@/assets/metgala/look-07.jpg";
import metLook08 from "@/assets/metgala/look-08.jpg";
import metLook09 from "@/assets/metgala/look-09.jpg";
import metLook10 from "@/assets/metgala/look-10.jpg";
import metLook11 from "@/assets/metgala/look-11.jpg";
import metLook12 from "@/assets/metgala/look-12.jpg";

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
  content: string[]; // paragraphs
  looks?: BlogLook[];
  pullQuote?: string;
  outro?: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "met-gala-2026-india-took-the-steps",
    title: "Met Gala 2026: India Took the Steps",
    excerpt:
      "From archival sari drama to bullion-stitched tuxedos, the contingent from across the subcontinent turned this year's Costume Institute Gala into a study in heritage, restraint, and the kind of confidence that makes a camera linger.",
    author: "The Editors",
    date: "May 11, 2026",
    read: "11 min",
    tag: "Fashion",
    image: metgala,
    featured: true,
    highlights: [
      "12 Indian looks decoded",
      "Designers, jewels & references",
      "Editor's verdict on each",
    ],
    content: [
      "The Met Gala has always been a theatre of intention. You don't walk those steps; you arrive at them, costume first, biography second. This year, that theatre had a noticeably larger Indian cast — a dozen names spanning film, royalty, fashion, business, and the new aristocracy of philanthropy. Each of them arrived with a thesis. Some of those theses were whispered. A few were shouted. One was embroidered in real gold.",
      "What follows is the breakdown, look by look. Who wore what, who designed it, what it meant — and, where it earned one, the verdict.",
    ],
    looks: [
      {
        number: "Look 01",
        name: "Isha Ambani",
        wearing: "In custom Anamika Khanna with Schiaparelli haute joaillerie",
        image: metLook01,
        paragraphs: [
          "Ambani has spent the last several Met Galas building a slow, deliberate case for Indian couture on the international steps, and this year felt like the closing argument. The gown — a structured drape in oxidised gold tissue, with a hand-embroidered bodice that referenced 17th-century Mughal miniatures — was reportedly six months in atelier. The neckpiece, a yellow diamond rivière borrowed from the family vault and reset for the evening, did most of the talking.",
          "What worked was the editing. There was no veil, no second layer, no train flourish. Just one gesture, executed with the patience of someone who no longer needs to introduce herself.",
        ],
        verdict: "The thesis statement of the night.",
      },
      {
        number: "Look 02",
        name: "Simone Ashley",
        wearing: "In Sabyasachi, with Bulgari emeralds",
        image: metLook02,
        paragraphs: [
          "Ashley has been quietly cultivating one of the more interesting style arcs in the British-Indian crossover lane, and her choice of a Sabyasachi gown — black velvet, with antique-silver zardozi running the length of a side-swept train — felt like a deliberate handing-over of credit. The silhouette was distinctly Western, the language entirely subcontinental. Emeralds at the throat, a low chignon, no other ornamentation.",
          "It was the kind of look that doesn't try to be the photograph of the night. It just becomes one anyway.",
        ],
        verdict: "Restraint as a flex.",
      },
      {
        number: "Look 03",
        name: "Karan Johar",
        wearing: "In Manish Malhotra, with vintage cufflinks",
        image: metLook03,
        paragraphs: [
          "Johar arrived in a tuxedo that read as a love letter to old Bombay tailoring — a long-line silk-blend jacket in midnight ink, with hand-stitched lapels, worn over a high-collared kurta-style shirt. The detailing only revealed itself on the close-up: chikankari running along the placket, almost invisible until the flashbulbs caught it.",
          "It was a look that understood the assignment of the Met without performing it. There was no costume here, just craftsmanship, and that distinction is increasingly rare on these steps.",
        ],
        verdict: "A masterclass in how to wear, not perform.",
      },
      {
        number: "Look 04",
        name: "Diljit Dosanjh",
        wearing: "In Prabal Gurung, with a custom Punjabi-script kalgi",
        image: metLook04,
        paragraphs: [
          "If anyone was going to commit to the carpet this year, it was always going to be Dosanjh. The look — a champagne sherwani in raw silk, with chevron-cut bullion embroidery running from shoulder to hem — was paired with a turban set with a kalgi inscribed in Gurmukhi script. He brought his own iconography and made the Gala meet him halfway.",
          "The crowd noticed. The cameras noticed. The choice to lean into a regional Punjabi visual grammar, rather than a pan-Indian one, was the most quietly radical statement of the evening.",
        ],
        verdict: "Specificity beats spectacle.",
      },
      {
        number: "Look 05",
        name: "Sawai Padmanabh Singh ('Pacho')",
        wearing: "In custom Raghavendra Rathore, with heritage jewels from the House of Jaipur",
        image: metLook05,
        paragraphs: [
          "The Maharaja of Jaipur has the easiest visual brief in the room and the hardest creative one: he has to make heritage look contemporary without diluting either. He did it cleanly this year. A bandhgala in deep oxblood velvet, with a high collar, paired with churidars and a single emerald sarpech that had reportedly not left the family treasury in three decades.",
          "There was something almost stubborn about the simplicity of it. He wasn't competing with the carpet. He was reminding it that some silhouettes don't need to be reinvented.",
        ],
        verdict: "Inheritance, worn correctly.",
      },
      {
        number: "Look 06",
        name: "Gauravi Kumari",
        wearing: "In Tarun Tahiliani, with Jaipur Gems",
        image: metLook06,
        paragraphs: [
          "The Princess of Jaipur made her Met debut in a gown that read as a conversation between two cities — a pale-bone bustier in draped tulle, with an embroidered overlay that nodded to the frescoes of the City Palace, and a sweeping train that pooled like watered silk. The styling was deliberately youthful: minimal jewellery, an unfussy half-up, no statement clutch.",
          "For a first appearance, it was remarkably unshowy. She let the dress do the work, which is exactly what you want a debut to do.",
        ],
        verdict: "A debut handled with poise.",
      },
      {
        number: "Look 07",
        name: "Natasha Poonawalla",
        wearing: "In Iris van Herpen couture, with a custom Sabyasachi headpiece",
        image: metLook07,
        paragraphs: [
          "Poonawalla has become something of a Met Gala specialist — the person whose look you scroll for first — and this year she did not under-deliver. The dress was a sculptural Iris van Herpen piece in liquid indigo, all 3D-printed pleats radiating from a corseted core, but the headpiece was the surprise: a Sabyasachi crown in tarnished silver, set with uncut diamonds, that fused the futurist gown to something distinctly subcontinental.",
          "It was the rare collaboration that didn't read as a collision. Both designers were audible.",
        ],
        verdict: "Two languages, one fluent sentence.",
      },
      {
        number: "Look 08",
        name: "Sudha Reddy",
        wearing: "In Gaurav Gupta, with custom Forevermark diamonds",
        image: metLook08,
        paragraphs: [
          "Reddy continues to be one of the more genuinely adventurous dressers on the Met circuit, and her Gaurav Gupta gown — molten plum, with a hand-sculpted thorax-style bodice and a tendril train that seemed to writhe behind her — was the kind of look that earned a second pass from every photographer on the line.",
          "The diamond suite, set in pieces designed to echo the gown's organic spirals, lifted the whole thing from costume to couture. Maximalism with a structural logic.",
        ],
        verdict: "Drama, but engineered.",
      },
      {
        number: "Look 09",
        name: "Manish Malhotra",
        wearing: "In a self-designed bandhgala, with archival pieces",
        image: metLook09,
        paragraphs: [
          "The designer arrived dressed in his own grammar — a long bandhgala in inky burgundy, with mirror-work running along the cuffs and a single antique brooch at the collar. Malhotra has been quietly building his international visibility for years, and his presence on the steps this year felt less like a guest appearance and more like a homecoming for Indian couture itself.",
          "He kept the look austere on purpose. The work, after all, was already on three other women on the carpet.",
        ],
        verdict: "The designer as a quiet sentence.",
      },
      {
        number: "Look 10",
        name: "Ananya Birla",
        wearing: "In Rahul Mishra, with Cartier high jewellery",
        image: metLook10,
        paragraphs: [
          "Birla's Rahul Mishra gown was, in some ways, the most technically ambitious piece on the carpet — a midnight-navy creation with three-dimensional embroidered florals that ran from the shoulder to the hem in a controlled riot, each blossom hand-finished. The work was the entire point of the look, and she wore it with the stillness that lets that kind of craftsmanship be seen.",
          "Cartier provided a discreet diamond cuff, an emerald drop, and not much else. The dress, sensibly, was not asked to share the frame.",
        ],
        verdict: "Couture in the literal sense.",
      },
      {
        number: "Look 11",
        name: "Diya Mehta",
        wearing: "In Falguni Shane Peacock, with antique kundan",
        image: metLook11,
        paragraphs: [
          "Mehta arrived in something genuinely surprising — a metallic-gold gown with a high mandarin collar and a fully embellished skirt that moved like chainmail, paired with antique kundan earrings that grounded the look in something older. The styling read as a deliberate break from the lehenga-and-saree route most of her contemporaries take to the steps.",
          "It was a gamble, and it paid. She looked, for the entire length of the carpet, like she belonged on it.",
        ],
        verdict: "A risk taken cleanly.",
      },
      {
        number: "Look 12",
        name: "Bhavitha Mandava",
        wearing: "In Amit Aggarwal, with custom Tanishq jewels",
        image: metLook12,
        paragraphs: [
          "Mandava closed the Indian contingent in an Amit Aggarwal gown that was, on first glance, almost shockingly minimal — a pale-ivory column in metallic-blended fabric, with the designer's signature ribbon work running in a single diagonal from shoulder to knee. It was the kind of look that rewarded a closer photograph; the texture only revealed itself in flash.",
          "Paired with a polki choker that softened the futurism, it was a debut that suggested patience. She arrived without trying to arrive, which is the trick of these steps.",
        ],
        verdict: "Quiet, but cleanly heard.",
      },
    ],
    pullQuote:
      "If there was a through-line this year, it was that the Indian contingent had stopped translating themselves. Nobody on those steps was explaining their references.",
    outro: [
      "Twelve looks, twelve different conversations with the carpet. What was striking, taken together, was how little of the evening was spent in translation. A decade ago, an Indian designer at the Met was a footnote; five years ago, a curiosity; this year, a working assumption. The steps absorbed sherwanis, saris, kundan, kalgis, and sculptural couture without anyone pausing to caption them.",
      "That shift — from explanation to fluency — is the actual story. The clothes are extraordinary, but extraordinary clothes have always shown up. What's new is the confidence with which they arrived, and the equally striking confidence with which the room received them.",
      "Next year's theme has not yet been announced. On the available evidence, the Indian contingent will be ready before the rest of us are.",
    ],
  },
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
