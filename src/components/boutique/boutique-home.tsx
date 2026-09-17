import { useMemo, useState } from "react";
import { Heart, Menu, MessageCircle, ShoppingBag, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Butterfly } from "./butterfly";
import { SmartImage } from "./smart-image";
import {
  MEHNDI_CATEGORIES,
  mehndiDesigns,
  type MehndiCategory,
  type MehndiDesign,
} from "@/data/mehndi-designs";
import { products, WHATSAPP_NUMBER, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "MEHNDI DESIGNS", href: "#mehndi" },
  { label: "MINI COLLECTION", href: "#collection" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

function Stars({ rating, reviews }: { rating: number; reviews?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      <div className="flex text-rating" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-3 fill-current" />
        ))}
      </div>
      <span className="text-[11px] text-muted-foreground">{rating.toFixed(1)}{reviews !== undefined ? ` (${reviews})` : ""}</span>
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return <span className="absolute left-2.5 top-2.5 z-20 bg-badge px-2 py-1 text-[9px] font-bold tracking-[0.16em] text-badge-foreground shadow-soft sm:left-3 sm:top-3">{children}</span>;
}

function MehndiCard({ design, favorite, onOpen, onFavorite, eager }: { design: MehndiDesign; favorite: boolean; onOpen: () => void; onFavorite: () => void; eager?: boolean }) {
  return (
    <article className="group min-w-0 bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-square overflow-hidden">
        {design.badge && <Badge>{design.badge}</Badge>}
        <Button type="button" variant="imageIcon" size="icon" aria-label={favorite ? `Remove ${design.name} from favorites` : `Save ${design.name}`} aria-pressed={favorite} onClick={onFavorite} className={cn("absolute right-2.5 top-2.5 z-20", favorite && "text-primary")}>
          <Heart className={cn(favorite && "fill-current")} />
        </Button>
        <button type="button" className="h-full w-full cursor-zoom-in" onClick={onOpen} aria-label={`View ${design.name}`}>
          <SmartImage src={design.image} alt={`${design.name} ${design.category.toLowerCase()} mehndi design`} eager={eager} sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" className="group-hover:scale-[1.025]" />
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">{design.category}</p>
        <h3 className="mt-1 truncate font-display text-base leading-tight text-foreground sm:text-xl">{design.name}</h3>
        <div className="mt-2"><Stars rating={design.rating} /></div>
        <Button type="button" variant="editorial" className="mt-3 w-full" onClick={onOpen}>View design</Button>
      </div>
    </article>
  );
}

function ProductCard({ product, onOpen, eager }: { product: Product; onOpen: () => void; eager?: boolean }) {
  return (
    <article className="group min-w-0 bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <button type="button" className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden text-left" onClick={onOpen} aria-label={`View ${product.name}`}>
        {product.badge && <Badge>{product.badge}</Badge>}
        <SmartImage src={product.images[0] ?? "/images/image-placeholder.webp"} alt={`${product.name} in ${product.color}`} eager={eager} sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw" className="group-hover:scale-[1.025]" />
      </button>
      <div className="p-3 sm:p-4">
        <h3 className="line-clamp-2 min-h-10 font-display text-[15px] leading-tight text-foreground sm:min-h-0 sm:text-xl">{product.name}</h3>
        <div className="mt-2"><Stars rating={product.rating} reviews={product.reviews} /></div>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
          <span className="text-sm font-bold text-foreground sm:text-base">Rs. {product.price.toLocaleString()}</span>
          {product.oldPrice && <span className="text-[11px] text-muted-foreground line-through sm:text-sm">Rs. {product.oldPrice.toLocaleString()}</span>}
        </div>
        <p className="mt-1.5 truncate text-[10px] text-muted-foreground sm:text-xs">{product.shipping}</p>
        <Button type="button" variant="editorial" className="mt-3 w-full" onClick={onOpen}>View details</Button>
      </div>
    </article>
  );
}

export function BoutiqueHome() {
  const [category, setCategory] = useState<MehndiCategory>("ALL");
  const [selectedDesign, setSelectedDesign] = useState<MehndiDesign | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredDesigns = useMemo(() => category === "ALL" ? mehndiDesigns : mehndiDesigns.filter((design) => design.category === category), [category]);
  const toggleFavorite = (id: number) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const openProduct = (product: Product) => { setSelectedProduct(product); setSelectedSize(""); setSelectedImage(0); };

  const orderUrl = selectedProduct && selectedSize
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I would like to order:\n\nProduct: ${selectedProduct.name}\nPrice: Rs. ${selectedProduct.price}\nSize: ${selectedSize}\nShipping: ${selectedProduct.shipping}`)}`
    : "";

  const goTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="overflow-x-clip bg-background" id="home">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-8 lg:h-20 lg:px-12">
          <button type="button" onClick={() => goTo("#home")} className="flex items-center gap-2 text-left" aria-label="Mehr & Me home">
            <span className="grid size-8 place-items-center rounded-full bg-primary font-display text-lg italic text-primary-foreground">M</span>
            <span><strong className="block font-display text-lg leading-none text-foreground sm:text-xl">Mehr & Me</strong><small className="mt-1 block text-[8px] uppercase tracking-[0.24em] text-muted-foreground">Mehndi & Pret</small></span>
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <button type="button" key={item.href} onClick={() => goTo(item.href)} className="text-[11px] font-semibold tracking-[0.13em] text-foreground/75 transition hover:text-primary">{item.label}</button>)}
          </nav>
          <Button type="button" variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label="Mobile navigation">{navItems.map((item) => <button type="button" key={item.href} onClick={() => goTo(item.href)} className="block w-full border-b border-border/60 py-3 text-left text-xs font-semibold tracking-[0.14em] text-foreground last:border-0">{item.label}</button>)}</nav>}
      </header>

      <section className="hero-surface relative isolate overflow-hidden px-4 pb-14 pt-12 text-center sm:px-8 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Butterfly className="absolute left-[7%] top-14 w-9 -rotate-12 text-primary/45 sm:left-[15%] sm:w-12" />
        <Butterfly className="absolute right-[8%] top-24 w-6 rotate-12 text-rose-deep/40 sm:right-[18%] sm:w-10" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow">CURATED IN PAKISTAN · MADE TO INSPIRE</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">Mehndi, made<br/><em className="font-normal text-primary">beautifully yours.</em></h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Discover handpicked designs for every celebration, from delicate details to timeless bridal artistry.</p>
          <Button type="button" variant="hero" size="lg" className="mt-8" onClick={() => goTo("#mehndi")}>Explore designs</Button>
        </div>
      </section>

      <section id="mehndi" className="scroll-mt-20 px-3 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="section-heading">
            <div><p className="eyebrow">THE MEHNDI EDIT</p><h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">Find your signature design</h2></div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">A considered collection of graceful motifs, intricate bridal work, and modern minimal details.</p>
          </div>
          <div className="no-scrollbar -mx-3 mt-8 flex gap-2 overflow-x-auto px-3 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {MEHNDI_CATEGORIES.map((item) => <Button key={item} type="button" variant={category === item ? "filterActive" : "filter"} size="sm" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {filteredDesigns.map((design, index) => <MehndiCard key={design.id} design={design} favorite={favorites.includes(design.id)} eager={index < 4} onOpen={() => setSelectedDesign(design)} onFavorite={() => toggleFavorite(design.id)} />)}
          </div>
        </div>
      </section>

      <Button type="button" variant="floating" onClick={() => goTo("#collection")} className="fixed bottom-4 right-3 z-30 sm:bottom-6 sm:right-6"><ShoppingBag /> <span>Mini Collection</span></Button>

      <section id="collection" className="collection-surface scroll-mt-20 px-3 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="relative text-center">
            <Butterfly className="absolute -top-7 left-[10%] w-8 text-primary/40 sm:left-[28%]" />
            <Butterfly className="absolute -top-4 right-[12%] w-7 rotate-12 text-rose-deep/35 sm:right-[30%]" />
            <p className="eyebrow">THE MINI COLLECTION</p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-6xl">Quiet luxury, Pakistani soul</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">Small-batch ensembles in romantic hues, crafted for celebrations and beautiful everyday moments.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => <ProductCard key={product.id} product={product} eager={index < 2} onOpen={() => openProduct(product)} />)}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-y border-border bg-card px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div><p className="eyebrow">OUR STORY</p><h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Beauty in every detail.</h2></div>
          <p className="text-base leading-8 text-muted-foreground">Mehr & Me brings together the artistry of Pakistani mehndi and a thoughtfully edited wardrobe. Every design is chosen for its grace, craftsmanship, and ability to make an occasion feel personal.</p>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-20 bg-footer px-5 pb-28 pt-14 text-footer-foreground sm:px-8 sm:pb-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div><p className="font-display text-3xl">Mehr & Me</p><p className="mt-2 max-w-sm text-sm leading-6 text-footer-muted">For styling help, custom order questions, or delivery support, speak with us on WhatsApp.</p></div>
          <Button asChild variant="footer"><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I would like to know more about Mehr & Me.")}`} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a></Button>
        </div>
        <div className="mx-auto mt-12 flex max-w-5xl justify-between border-t border-footer-foreground/15 pt-5 text-[10px] uppercase tracking-[0.14em] text-footer-muted"><span>Pakistan</span><span>© 2026 Mehr & Me</span></div>
      </footer>

      <Dialog open={Boolean(selectedDesign)} onOpenChange={(open) => !open && setSelectedDesign(null)}>
        {selectedDesign && <DialogContent className="max-h-[92dvh] w-[calc(100%-1.25rem)] max-w-4xl overflow-y-auto p-0 sm:w-[calc(100%-2rem)]">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="aspect-square min-h-0 md:aspect-auto md:min-h-[600px]"><SmartImage src={selectedDesign.image} alt={`${selectedDesign.name} enlarged mehndi design`} sizes="(max-width: 767px) 100vw, 60vw" /></div>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <p className="eyebrow">{selectedDesign.category} MEHNDI</p>
              <DialogTitle className="mt-3 font-display text-3xl font-normal leading-tight sm:text-4xl">{selectedDesign.name}</DialogTitle>
              <div className="mt-4"><Stars rating={selectedDesign.rating} /></div>
              <DialogDescription className="mt-5 text-sm leading-7">{selectedDesign.description}</DialogDescription>
              <Button type="button" variant="outline" className="mt-7 w-full" onClick={() => toggleFavorite(selectedDesign.id)}><Heart className={cn(favorites.includes(selectedDesign.id) && "fill-current text-primary")} />{favorites.includes(selectedDesign.id) ? "Saved to favorites" : "Save to favorites"}</Button>
            </div>
          </div>
        </DialogContent>}
      </Dialog>

      <Dialog open={Boolean(selectedProduct)} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && <DialogContent className="max-h-[94dvh] w-[calc(100%-1rem)] max-w-5xl overflow-y-auto p-0 sm:w-[calc(100%-2rem)]">
          <div className="grid md:grid-cols-[1fr_0.9fr]">
            <div className="p-3 sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">{selectedProduct.badge && <Badge>{selectedProduct.badge}</Badge>}<SmartImage src={selectedProduct.images[selectedImage] ?? selectedProduct.images[0] ?? "/images/image-placeholder.webp"} alt={`${selectedProduct.name} view ${selectedImage + 1}`} sizes="(max-width: 767px) 100vw, 55vw" /></div>
              <div className="mt-3 grid grid-cols-2 gap-2">{selectedProduct.images.map((image, index) => <Button key={image} type="button" variant="thumbnail" aria-label={`Show product image ${index + 1}`} aria-pressed={selectedImage === index} onClick={() => setSelectedImage(index)} className={cn("h-auto aspect-[4/5] p-0", selectedImage === index && "ring-2 ring-primary ring-offset-2")}><SmartImage src={image} alt="" sizes="120px" /></Button>)}</div>
            </div>
            <div className="p-6 sm:p-9 md:pt-14">
              <p className="eyebrow">{selectedProduct.badge ?? "MEHR & ME EXCLUSIVE"}</p>
              <DialogTitle className="mt-3 font-display text-3xl font-normal leading-tight sm:text-4xl">{selectedProduct.name}</DialogTitle>
              <div className="mt-3"><Stars rating={selectedProduct.rating} reviews={selectedProduct.reviews} /></div>
              <div className="mt-5 flex items-baseline gap-3"><span className="text-2xl font-bold">Rs. {selectedProduct.price.toLocaleString()}</span>{selectedProduct.oldPrice && <span className="text-base text-muted-foreground line-through">Rs. {selectedProduct.oldPrice.toLocaleString()}</span>}</div>
              <DialogDescription className="mt-5 text-sm leading-7">{selectedProduct.description}</DialogDescription>
              <div className="mt-6"><p className="text-xs font-bold uppercase tracking-[0.14em]">Select size</p><div className="mt-3 flex flex-wrap gap-2">{selectedProduct.sizes.map((size) => <Button key={size} type="button" variant={selectedSize === size ? "sizeActive" : "size"} size="icon" aria-pressed={selectedSize === size} onClick={() => setSelectedSize(size)}>{size}</Button>)}</div>{!selectedSize && <p className="mt-2 text-xs text-muted-foreground">Choose a size to order.</p>}</div>
              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-border py-5 text-sm">
                <div><dt className="detail-label">Fabric</dt><dd className="mt-1 text-foreground">{selectedProduct.fabric}</dd></div>
                <div><dt className="detail-label">Color</dt><dd className="mt-1 text-foreground">{selectedProduct.color}</dd></div>
                <div><dt className="detail-label">Shipping</dt><dd className="mt-1 text-foreground">{selectedProduct.shipping}</dd></div>
                <div><dt className="detail-label">Delivery</dt><dd className="mt-1 text-foreground">{selectedProduct.delivery}</dd></div>
              </dl>
              {selectedSize ? <Button asChild variant="whatsapp" size="lg" className="mt-6 w-full"><a href={orderUrl} target="_blank" rel="noreferrer"><MessageCircle /> Order on WhatsApp</a></Button> : <Button type="button" variant="whatsapp" size="lg" className="mt-6 w-full" disabled><MessageCircle /> Select a size to order</Button>}
            </div>
          </div>
        </DialogContent>}
      </Dialog>
    </main>
  );
}
