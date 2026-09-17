export const MEHNDI_CATEGORIES = [
  "ALL",
  "SIMPLE",
  "BRIDAL",
  "ARABIC",
  "MINIMAL",
  "UNIQUE",
  "AESTHETIC",
] as const;

export type MehndiCategory = (typeof MEHNDI_CATEGORIES)[number];

export type MehndiDesign = {
  id: number;
  name: string;
  category: Exclude<MehndiCategory, "ALL">;
  image: string;
  rating: number;
  badge?: "NEW" | "FEATURED";
  description: string;
};

export const mehndiDesigns: MehndiDesign[] = [
  { id: 1, name: "Gul-e-Noor Trail", category: "SIMPLE", image: "/images/mehndi/mehndi-01.webp", rating: 4.8, badge: "NEW", description: "A graceful floral trail designed for intimate celebrations and effortless everyday elegance." },
  { id: 2, name: "Riwaayat Bridal Palms", category: "BRIDAL", image: "/images/mehndi/mehndi-02.webp", rating: 5, badge: "FEATURED", description: "A richly detailed bridal composition with traditional symmetry and fine ornamental filling." },
  { id: 3, name: "Sahar Arabic Vine", category: "ARABIC", image: "/images/mehndi/mehndi-03.webp", rating: 4.9, description: "A flowing Arabic vine with bold florals, open spacing, and a refined fingertip finish." },
  { id: 4, name: "Whispered Petals", category: "MINIMAL", image: "/images/mehndi/mehndi-04.webp", rating: 4.7, badge: "NEW", description: "Delicate finger motifs with airy spacing for a beautifully understated mehndi moment." },
  { id: 5, name: "Mehr Geometric", category: "UNIQUE", image: "/images/mehndi/mehndi-05.webp", rating: 4.8, description: "A contemporary geometric centerpiece softened by fine florals and an elegant wrist trail." },
  { id: 6, name: "Nargis Leaf Trail", category: "AESTHETIC", image: "/images/mehndi/mehndi-06.webp", rating: 4.9, badge: "FEATURED", description: "A graceful botanical composition that follows the hand with balanced leaves and blossoms." },
  { id: 7, name: "Shehnai Bridal Mandala", category: "BRIDAL", image: "/images/mehndi/mehndi-07.webp", rating: 5, description: "Traditional bridal palms with statement mandalas, delicate latticework, and deep fingertip detail." },
  { id: 8, name: "Chaand Mandala", category: "AESTHETIC", image: "/images/mehndi/mehndi-08.webp", rating: 4.9, badge: "NEW", description: "A centered mandala with lace-like edging for a timeless and beautifully balanced look." },
  { id: 9, name: "Rosewater Bracelet", category: "SIMPLE", image: "/images/mehndi/mehndi-09.webp", rating: 4.8, description: "A polished floral bracelet trail that feels light, feminine, and occasion-ready." },
];
