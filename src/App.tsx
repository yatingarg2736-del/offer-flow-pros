// ⚠️ SSG project — do not switch to BrowserRouter or createRoot.
// New blog posts auto-render from blogPosts.ts via getStaticPaths.
import type { RouteRecord } from "vite-react-ssg";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AmazonSummerSale2026 from "./pages/blogs/AmazonSummerSale2026";
import MuscleBlazeHealthPlan2026 from "./pages/blogs/MuscleBlazeHealthPlan2026";
import BrandsIndex from "./pages/BrandsIndex";
import BrandPage from "./pages/BrandPage";
import CouponsIndex from "./pages/CouponsIndex";
import CategoryPage from "./pages/CategoryPage";
import { brands, categories } from "./data/affiliateData";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { blogPosts } from "./lib/blogPosts";
const queryClient = new QueryClient();
const Root = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, Component: Index },
      { path: "blog", Component: Blog },
      { path: "blog/amazon-great-summer-sale-2026", Component: AmazonSummerSale2026 },
      { path: "blog/muscleblaze-health-plan-2026", Component: MuscleBlazeHealthPlan2026 },
      {
        path: "blog/:slug",
        Component: BlogPost,
        getStaticPaths: () => blogPosts.map((p) => `/blog/${p.slug}`),
      },
      {
        path: "brands",
        children: [
          { index: true, Component: BrandsIndex },
          {
            path: ":slug",
            Component: BrandPage,
            getStaticPaths: () => brands.map((b) => `/brands/${b.slug}`),
          },
        ],
      },
      {
        path: "coupons",
        children: [
          { index: true, Component: CouponsIndex },
          {
            path: ":category",
            Component: CategoryPage,
            getStaticPaths: () => categories.map((c) => `/coupons/${c.slug}`),
          },
        ],
      },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
];
