import { createFileRoute } from "@tanstack/react-router";
import { BoutiqueHome } from "@/components/boutique/boutique-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mehr & Me | Mehndi Designs & Pakistani Pret" },
      { name: "description", content: "Explore elegant Pakistani mehndi designs and a curated mini collection of premium women's clothing." },
      { property: "og:title", content: "Mehr & Me | Mehndi Designs & Pakistani Pret" },
      { property: "og:description", content: "Elegant mehndi inspiration and a curated Pakistani fashion collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoutiqueHome,
});
