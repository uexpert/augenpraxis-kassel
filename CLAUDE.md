# Augenpraxis Kassel

Website for a German ophthalmology practice (Augenarztpraxis Naema) located in Kassel, Germany.

## Tech Stack

- **Framework:** Angular 19.2 (standalone components, no NgModules for app code)
- **Language:** TypeScript 5.7 (strict mode enabled)
- **UI Library:** ng-zorro-antd 19.2 (Ant Design) — barrel module at `src/app/core/ng-zorro-antd/`
- **CSS:** Bootstrap 5 + custom SCSS + animate.css + Owl Carousel CSS
- **Icons:** Font Awesome + @ant-design/icons-angular (registered in `app.config.ts`)
- **Carousel:** jQuery-based Owl Carousel (jQuery declared as external global)
- **Utilities:** lodash (deep clone, array ops), custom `globalTools.ts`
- **Forms:** Reactive Forms (FormBuilder)
- **HTTP:** Angular HttpClient (contact form API)
- **Testing:** Jasmine + Karma (not actively maintained)

## Project Structure

```
src/app/
├── components/          # Shared/reusable UI components
│   ├── header/          # Top navigation bar
│   ├── footer/          # Footer with contact info & WhatsApp link
│   ├── slider/          # Hero image carousel (Owl Carousel)
│   ├── schedule/        # Office hours display
│   ├── latest-news/     # News announcements list
│   ├── latest-news-item/# Individual news item renderer
│   └── loading-screen/  # Global loading overlay
├── pages/               # Route-level page components
│   ├── main/            # Layout wrapper (header + router-outlet + footer)
│   ├── home/            # Landing page
│   └── contact/         # Contact form + Google Maps embed
├── core/
│   ├── services/
│   │   ├── global-data.service.ts  # App-wide state (WhatsApp, contact form, loading)
│   │   └── main.service.ts         # Preloader/animation management (jQuery)
│   ├── utils/
│   │   ├── constants.ts            # News items & closure announcements
│   │   ├── models_interfaces.ts    # LatestNewsItem type/class definitions
│   │   ├── globalTools.ts          # 100+ utility functions
│   │   └── regex.ts                # Validation patterns (email, phone, IBAN, etc.)
│   └── ng-zorro-antd/
│       └── ng-zorro-antd.module.ts # Barrel re-export of all ng-zorro modules
├── app.component.ts     # Root component
├── app.config.ts        # Providers (router, HttpClient, icons, animations)
└── app.routes.ts        # Route definitions
```

## Routes

| Path       | Component          | Description          |
|------------|--------------------|----------------------|
| `/`        | MainComponent      | Layout wrapper       |
| `/` (child)| HomeComponent      | Landing page         |
| `/contact` | ContactComponent   | Contact form & map   |

All routes are eagerly loaded (no lazy loading). Scroll position restoration is enabled.

## Key Commands

```bash
npm start              # Dev server (ng serve)
npm run build          # Production build + copy .htaccess to dist
npm run build:usama-dev # Build with base-href /augenpraxis-kassel/
npm test               # Run Karma tests
```

## Build & Deployment

- **Output:** `dist/augenpraxis-kassel/browser/`
- **Server:** Apache with mod_rewrite (.htaccess for SPA routing)
- **Post-build:** `copy-htaccess.js` copies `.htaccess` from `src/assets/` to dist
- **Backend API:** Contact form submits to Render.com (`contact-backend-api-bxgx.onrender.com`)

## Environment Configuration

| Setting      | Production                                          | Development              |
|-------------|-----------------------------------------------------|--------------------------|
| `production`| `true`                                              | `false`                  |
| `imagesPath`| `assets/images/`                                    | `../assets/images/`      |
| `contactAPI`| `https://contact-backend-api-bxgx.onrender.com/`   | `http://localhost:3000/`  |

## Conventions

- **All components are standalone** — no feature NgModules (only `NgZorroAntdModule` barrel exists)
- **Dependency injection** uses the `inject()` function (not constructor injection)
- **State management** is service-based (GlobalDataService properties, no NgRx/signals)
- **Content language** is German — all user-facing text is in Deutsch
- **News/announcements** are managed as `LatestNewsItem[]` arrays in `constants.ts`
- **SCSS** is used for component styles; global mixins/breakpoints in `src/scss/general.scss`
- **Responsive breakpoints:** xxl(1411px), xl(1199px), lg(991px), md(767px), sm(575px), xs(359px)
- **jQuery** is used for legacy plugins (Owl Carousel, preloader) — declared as external global
- **HTML sanitization** via `DomSanitizer.bypassSecurityTrustHtml()` for dynamic news content

## Important Notes

- Practice is relocating to **Goethestraße 27, 34119 Kassel** as of 04.08.2025
- Practice name: **Augenarztpraxis Naema**
- Phone (unchanged): WhatsApp at +4956116567
- Website: www.augenpraxis-kassel.de
- Email: info@augenpraxis-kassel.de
