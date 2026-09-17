# Complete Mehndi & Mini Collection Boutique

## Build
- Replace the placeholder home page with a premium, mobile-first Mehndi gallery in soft blush, rose, white, and ivory.
- Add seven working Mehndi filters, two-column mobile cards, favorites, image loading states, and a polished detail viewer for every design.
- Add a non-obstructive floating Mini Collection shortcut, responsive navigation, delicate butterfly details, About, and Contact areas.
- Build a professional Pakistani clothing collection with a two-column mobile grid and product detail viewer containing image gallery, size selection, material, color, shipping, delivery, reviews, and WhatsApp ordering.

## Content and image handling
- Keep Mehndi and product information in separate, easy-to-edit structured data files.
- Store optimized local images in clear `public/images/mehndi` and `public/images/products` folders, with responsive sizing, lazy loading, loading placeholders, and graceful image fallbacks.
- Define one configurable `WHATSAPP_NUMBER` and generate each order message from the selected product and size.

## Quality checks
- Verify image loading, filters, every card and button, favorites, collection navigation, product details, size selection, WhatsApp links, mobile two-column layouts, desktop responsiveness, navigation, and horizontal overflow.
- Resolve all build, runtime, console, and broken-link issues found during testing.

## Technical details
- Use TanStack Start routes and React state for the interactive gallery and dialogs.
- Centralize colors, typography, shadows, motion, and layout tokens in the Tailwind v4 design system.
- Add complete page metadata and accessible labels, focus states, image alt text, and reduced-motion behavior.
