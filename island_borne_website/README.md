# Island Borne Website — Phase 1

Fresh Odoo 19 website module built from the supplied Island Borne designer source files.

## Included

- Responsive homepage matching the supplied desktop and mobile designs
- Global Island Borne header and footer
- Mobile burger navigation
- Homepage anchors prepared for future About, Products and Fragrances pages
- Local Afacad and Vampiro One fonts
- Responsive hero and products artwork
- Updated Juicy, Yummy and Cool fragrance descriptions
- Product presentation using original bottle artwork
- Searchable/clickable store finder
- Single responsive footer-pattern artwork for desktop and mobile
- Full footer information on mobile
- Island Borne favicon
- Direct-loaded CSS and JavaScript for Cloudpepper reliability

## Installation

1. Upload the `island_borne_website` folder to the Odoo custom add-ons directory or Git repository.
2. Restart Odoo if required by the hosting environment.
3. Update the Apps list.
4. Install **Island Borne Website**.
5. Open the website homepage and clear browser/Odoo asset cache if an older design remains visible.

## Phase 2

Future updates will add dedicated About, Products and Fragrances pages while reusing this module's global header, footer, fonts and brand system.

## 19.0.1.0.1 homepage routing fix
This update creates a published `/island-borne` website.page and assigns it as the default website homepage. It prevents Odoo from falling back to `/contactus` when the default `/` page is absent.

## 19.0.1.0.2 root homepage and footer cleanup

- Registers the Island Borne page directly at `/`.
- Overrides Odoo's root controller defensively so a stale website homepage setting cannot fall back to Contact Us.
- Redirects the old `/island-borne` URL to `/`.
- Removes the accidental black vertical annotation line from the desktop footer artwork.


## v1.0.4
- Increased the mobile announcement-bar text size and spacing to match the designer mock-up more closely.
