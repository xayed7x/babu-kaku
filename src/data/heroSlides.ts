/**
 * Premium Export Shoes – Hero slide data
 * Prices are fetched at runtime from getProductBySlug; never hardcoded here.
 */

export interface HeroSlideTheme {
  /** CSS gradient value, e.g. "linear-gradient(135deg, #F5F0E8 0%, #E8D9C4 100%)" */
  gradient: string;
  /** Terracotta circle fill color */
  circleColor: string;
  /** Primary text color (headline, eyebrow line) */
  textColor: string;
  /** Secondary text color (subline, counter) */
  textMuted: string;
  /** CTA pill background */
  ctaBg: string;
  /** CTA pill text */
  ctaText: string;
  /** Watermark color */
  watermarkColor: string;
  /** Progress bar color */
  progressColor: string;
}

export interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
  subline: string;
  /** Slug used to fetch the product (price + link). */
  productSlug: string;
  /** Path to the transparent shoe PNG under /public/hero/ */
  image: string;
  alt: string;
  theme: HeroSlideTheme;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "New Collection · 2026",
    headline: "Comfort, Redefined.",
    subline:
      "The Artisan Loafer — supple full-grain calfskin with hand-burnished finish; timeless elegance, all day long.",
    productSlug: "the-artisan-loafer",
    image: "/hero/hero-1.png",
    alt: "Cream pebbled-leather penny loafer, three-quarter view",
    theme: {
      gradient:
        "linear-gradient(140deg, #F5F0E8 0%, #EDE4D6 55%, #E2D5C2 100%)",
      circleColor: "#C4714A",
      textColor: "#1C1917",
      textMuted: "#6B6560",
      ctaBg: "#C4714A",
      ctaText: "#FAF8F4",
      watermarkColor: "rgba(28,25,23,0.05)",
      progressColor: "#C4714A",
    },
  },
  {
    id: 2,
    eyebrow: "New Collection · 2026",
    headline: "Built for Every Journey",
    subline:
      "The Wanderer Boot — weatherproof oiled leather, heritage construction, lug sole for the long road.",
    productSlug: "the-wanderer-boot",
    image: "/hero/hero-2.png",
    alt: "Dark teal chukka boot, three-quarter view",
    theme: {
      gradient:
        "linear-gradient(140deg, #1E2D2B 0%, #253630 55%, #2D3F3C 100%)",
      circleColor: "#4A8077",
      textColor: "#EDF4F2",
      textMuted: "#A8C5BF",
      ctaBg: "#EDF4F2",
      ctaText: "#1E2D2B",
      watermarkColor: "rgba(237,244,242,0.05)",
      progressColor: "#4A8077",
    },
  },
  {
    id: 3,
    eyebrow: "New Collection · 2026",
    headline: "Sun-Kissed Terra Tones",
    subline:
      "The Cloud Nine Mule — aniline calf leather over a cork midsole; effortless warmth, all afternoon.",
    productSlug: "cloud-nine-mule",
    image: "/hero/hero-3.png",
    alt: "Woven terracotta leather mule, three-quarter view",
    theme: {
      gradient:
        "linear-gradient(140deg, #F0E0D0 0%, #E8CCBB 55%, #D9B49A 100%)",
      circleColor: "#B5552A",
      textColor: "#3A1A0A",
      textMuted: "#7A4020",
      ctaBg: "#B5552A",
      ctaText: "#FAF8F4",
      watermarkColor: "rgba(58,26,10,0.06)",
      progressColor: "#B5552A",
    },
  },
];
