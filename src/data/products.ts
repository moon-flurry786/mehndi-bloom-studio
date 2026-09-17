// Replace this demo number with your business WhatsApp number, including country code.
export const WHATSAPP_NUMBER = "923001234567";

export type ProductBadge = "SALE" | "NEW" | "FEATURED";

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  images: string[];
  sizes: string[];
  fabric: string;
  color: string;
  shipping: string;
  delivery: string;
  rating: number;
  reviews: number;
  badge?: ProductBadge;
  description: string;
};

export const products: Product[] = [
  { id: 1, name: "Blush Garden Lawn Suit", price: 3299, oldPrice: 4500, images: ["/images/products/product-01.webp", "/images/products/product-01-detail.webp"], sizes: ["S", "M", "L", "XL"], fabric: "Premium Lawn", color: "Blush Pink", shipping: "Free Delivery", delivery: "3–5 working days", rating: 4.8, reviews: 28, badge: "SALE", description: "A soft blush three-piece lawn ensemble with delicate floral embroidery and an airy printed dupatta." },
  { id: 2, name: "Ivory Chandni Organza", price: 4890, images: ["/images/products/product-02.webp", "/images/products/product-02-detail.webp"], sizes: ["S", "M", "L"], fabric: "Organza & Cotton Silk", color: "Ivory", shipping: "Free Delivery", delivery: "4–6 working days", rating: 4.9, reviews: 19, badge: "NEW", description: "An ethereal ivory ensemble with tonal embroidery, fluid layers, and an occasion-ready finish." },
  { id: 3, name: "Rose Dusk Festive Suit", price: 5190, oldPrice: 6200, images: ["/images/products/product-03.webp", "/images/products/product-03-detail.webp"], sizes: ["XS", "S", "M", "L"], fabric: "Embroidered Chiffon", color: "Dusty Rose", shipping: "Free Delivery", delivery: "3–5 working days", rating: 4.9, reviews: 34, badge: "FEATURED", description: "A refined dusty-rose formal with ornate threadwork and a beautifully draped matching dupatta." },
  { id: 4, name: "Sage Gul Printed Lawn", price: 2890, images: ["/images/products/product-04.webp", "/images/products/product-04-detail.webp"], sizes: ["S", "M", "L", "XL"], fabric: "Printed Lawn", color: "Sage Green", shipping: "Rs. 199 Nationwide", delivery: "3–5 working days", rating: 4.7, reviews: 22, badge: "NEW", description: "A calm sage lawn set with botanical print, graceful tailoring, and an easy everyday silhouette." },
  { id: 5, name: "Neelam Jacquard Edit", price: 3790, images: ["/images/products/product-05.webp", "/images/products/product-05-detail.webp"], sizes: ["S", "M", "L"], fabric: "Self Jacquard", color: "Powder Blue", shipping: "Free Delivery", delivery: "4–6 working days", rating: 4.8, reviews: 17, description: "Soft powder blue jacquard paired with a weightless dupatta for polished day-to-evening dressing." },
  { id: 6, name: "Berry Zari Formal", price: 5990, oldPrice: 7200, images: ["/images/products/product-06.webp", "/images/products/product-06-detail.webp"], sizes: ["S", "M", "L", "XL"], fabric: "Chiffon & Raw Silk", color: "Deep Berry", shipping: "Free Delivery", delivery: "5–7 working days", rating: 5, reviews: 41, badge: "SALE", description: "A jewel-toned formal enriched with intricate zari work and a luxurious flowing dupatta." },
  { id: 7, name: "Noor Chikankari Suit", price: 4290, images: ["/images/products/product-07.webp", "/images/products/product-07-detail.webp"], sizes: ["XS", "S", "M", "L", "XL"], fabric: "Chikankari Lawn", color: "Soft Cream", shipping: "Free Delivery", delivery: "3–5 working days", rating: 4.9, reviews: 37, badge: "FEATURED", description: "An elegant cream chikankari set with lace-finished details and a timeless monochrome palette." },
  { id: 8, name: "Coral Mehr Three-Piece", price: 3490, images: ["/images/products/product-08.webp", "/images/products/product-08-detail.webp"], sizes: ["S", "M", "L", "XL"], fabric: "Cotton Lawn", color: "Muted Coral", shipping: "Rs. 199 Nationwide", delivery: "3–5 working days", rating: 4.7, reviews: 15, badge: "NEW", description: "A warm coral three-piece with delicate tonal embellishment, designed for graceful everyday wear." },
  { id: 9, name: "Siyah Rose Evening Suit", price: 5490, images: ["/images/products/product-09.webp", "/images/products/product-09-detail.webp"], sizes: ["S", "M", "L"], fabric: "Embroidered Organza", color: "Black & Rose", shipping: "Free Delivery", delivery: "4–6 working days", rating: 4.9, reviews: 26, badge: "FEATURED", description: "A dramatic black organza set detailed with rose florals for intimate dinners and festive evenings." },
];
