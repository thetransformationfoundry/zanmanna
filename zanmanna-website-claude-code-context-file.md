# ZanManna Website — Claude Code Context

## Project Overview
This is the official website for **zanmanna** (always lowercase), a redemptive technology non-profit that builds faith-centered digital tools for communities. The site lives at **zanmanna.com** and is hosted via **GitHub Pages**.

**Project Lead:** Sean Abbood
**Role:** UX Designer & Change Management Consultant
**Location:** Europe (supporting South Africa remotely)
**GitHub username:** thetransformationfoundry

---

## Brand Identity

### Name
- Always written **zanmanna** — lowercase everywhere, including in copy, headings, and code
- **זָן (zan)** = present tense Hebrew "he nourishes, he feeds" — from root זון (zun)
- **מָן (Manna)** = miraculous bread from heaven (Exodus 16)
- Together: "Sustaining Manna — divine nourishment for body, mind, and spirit"
- Anchored in John 6:35 — Jesus as the true bread of life

### Mission
zanmanna is a non-profit on a mission to spread the good news and help people find, build and grow in community through redemptive technology.

### Core Values (1 Corinthians 13:13)
- **Love** — Foundation of everything we build
- **Faith** — Led by the Holy Spirit; technology is our tool, the Gospel is our mission
- **Hope** — We build on the hope found in Christ
- **Community** — Technology that draws people closer together, not further apart

### Brand Colors
```
--cream:       #F5EEE4   (warm off-white)
--cream-light: #FAF6F0   (page background)
--taupe:       #8B7A69   (brand accent, secondary text)
--taupe-light: #C4B5A5   (subtle accents)
--taupe-dark:  #6B5D4F   (body text on light backgrounds)
--dark:        #2C2B29   (headlines, dark sections, nav CTA)
```

### Typography
- **Font:** Inter (Google Fonts)
- **Headlines:** Inter 700, letter-spacing -0.04em
- **Body:** Inter 400, line-height 1.65–1.75
- **Labels/Kickers:** Inter 600, uppercase, letter-spacing 0.06em, 12px — applies to all section kickers (`.section-kicker`, `.showcase-kicker`, `.app-showcase-kicker`, `.verse-mission-label`)
- **Design reference:** Apple.com — clean, modern, generous whitespace

### Logo Files
All logos live in `assets/images/`:
- `zanmanna_logo.svg` — white/cream version (use on dark backgrounds)
- `zanmanna_logo_dark.svg` — dark version (use on light backgrounds / nav)
- `manna_app_icon.svg` — Manna app icon (rounded square)
- `manna_logo.svg` — Manna wordmark in Elza Bold Oblique (use on dark backgrounds, cream coloured)

### Writing Rules
- No em dashes — use full stops or commas instead
- zanmanna always lowercase
- Warm, confident, faith-forward tone — never preachy

---

## Product — Manna App

Manna is zanmanna's first product. A faith-centered mobile app built for people in residential addiction recovery, adaptable for churches, NGOs, and any community.

**Key Features:**
1. **Community Wall** — News, events, guides, programme materials and spiritual resources
2. **Daily Bread** — Daily devotionals with scripture, reflection and prayer
3. **Private Journal** — Safe private space, voice-to-text enabled, visible only to the writer
4. **Prayer Wall** — Shared prayer wall, anonymity protected, answered prayers celebrated
5. **Full Bible** — All 66 books, 1,189 chapters, 31,103 verses
6. **Emergency Help** — One-tap pastoral care support, dignity preserved

**Built on:** Glide Apps (no-code platform)
**Launch Partner:** Cornerstone Wellness Center, South Africa
**Launch Year:** 2026
**Model:** Template per organisation — each org gets its own private instance
**Platform:** Mobile, iOS & Android

---

## Website Structure

```
zanmanna-website/
├── index.html                  ← Home page (complete)
├── CNAME                       ← zanmanna.com
├── CLAUDE.md                   ← This file
├── pages/
│   ├── thank-you.html                  ← Form submission redirect (complete)
│   ├── sign-in.html                    ← Sign in / register org page (complete)
│   ├── manna-product-overview.html     ← Product overview: features, roles matrix, pricing (complete)
│   ├── his-story.html                  ← Founder's story — Sean Abbood long-form editorial (complete)
│   ├── manna.html                      ← Manna app deep dive (to build)
│   ├── about.html                      ← About zanmanna (to build)
│   └── partners.html                   ← Partner centres (to build)
├── assets/
│   ├── images/
│   │   ├── zanmanna_logo.svg
│   │   ├── zanmanna_logo_dark.svg
│   │   ├── manna_app_icon.svg
│   │   ├── manna_logo.svg          ← Manna wordmark (Elza Bold Oblique)
│   │   ├── manna-in-use.jpg        ← Community photo (people sitting together)
│   │   └── screenshots/
│   │       ├── screen-community-wall.png
│   │       ├── screen-daily-bread.png
│   │       ├── screen-private-journal.png
│   │       ├── screen-prayer-wall.png
│   │       ├── screen-bible.png
│   │       └── screen-emergency-help.png
│   └── icons/
│       └── favicon.png
└── css/
    └── global.css              ← To extract (future)
```

### Image Paths
- From `index.html` (root): `assets/images/filename`
- From `pages/*.html`: `../assets/images/filename`
- Screenshot images load fine on live site — broken in local preview only

---

## index.html — Sections (Complete)

### 1. Nav
- Fixed, frosted glass (`backdrop-filter: blur(20px)`)
- `zanmanna_logo_dark.svg` on left, wrapped in `<a>` — clicking scrolls to top and cleans URL via JS
- Links: About, Manna App, Sign in (links to `pages/sign-in.html`)
- "Partner with us" pill CTA — dark background, cream text
- Hover: background lightens to `#444340`, text stays cream (not opacity-based)
- **Mobile (≤860px):** hamburger button shown (top right), nav links hidden
- **Mobile menu open:** the nav itself expands to `100dvh` fullscreen — dark background (`--dark`), `backdrop-filter` removed, logo inverts to cream, hamburger icon swaps to X (top right), links stack vertically at 40px/700 weight in cream. Clicking any link or the X closes the menu and nav returns to normal frosted glass state. No separate overlay div — avoids all z-index/backdrop-filter compositor conflicts.

### 2. Hero
- Eyebrow: "Redemptive Technology"
- Headline: "Technology built for restoration." — line break after "Technology" so "built for restoration." is one line on mobile
- Body: "Built for building community. Bringing hope, love and the good news to everyone through redemptive technology."
- CTAs: "Discover Manna App ↓" (solid dark, links to `#app`) + "About zanmanna" (outline, links to `#name`)

### 3. App Showcase Card (dark)
- Two separate fully rounded cards with 16px gap
- Left card: headline + body + "Explore the app ↓" (outlined cream pill)
- Right card: `manna_app_icon.svg` + `manna_logo.svg` (cream filter, `.app-wordmark-light` at 40px height) + "Faith · Community · Recovery" (cream)
- Stats row below (separate card): Community Wall / Daily Devotional / Journal & Support

### 4. About — Name Story
- Section id: `name` (anchor target for "About zanmanna" hero CTA)
- Kicker: "The Name"
- Headline: "More than a name. A declaration."
- Three cards: זָן + מָן + zanmanna result card (John 6:35)
- Mobile: cards stack vertically, + and = signs centred between cards (no rotation)

### 5. About — Who We Are
- Headline: "Fuelled by love. Built with purpose."
- Quote: "A digital table where all are welcome, all are seen, and all are nourished." — 13px italic, matches pillar scripture size
- Desktop: quote sits below body text in left column
- Mobile: quote hidden in left column, shown below Community pillar instead

### 6. Pillars (1 Corinthians 13:13)
- Scripture band above pillars
- Four pillars: Love (filled heart) / Faith (empty tomb) / Hope (sun) / Community (people)

### 7. Verse Band — John 6:35 (NIV)
- Dark background
- Kicker: "Our Mission"
- Full verse + context paragraph

### 8. Features Grid
- Background: `--cream-light` (matches page — no visible seam)
- Feature cards: white (`#FFFFFF`) so they lift off the background
- Divider lines: `rgba(139,122,105,0.2)`
- Hover: `#F5EEE4`
- 3-column grid, collapses to 2-col then 1-col on mobile
- Order: Community Wall / Daily Bread / Private Journal / Prayer Wall / Full Bible / Emergency Help

### 9. App Showcase Carousel (dark card)
- Left: kicker + title + description (updates per slide)
- Right: screenshot image
- "Request a demo ↓" — outlined cream pill (btn-support style)
- 6 slides, auto-cycles every 7 seconds
- Fade transition: 0.5s ease, swap at 520ms
- 6 dot indicators, manual click resets timer
- Mobile: stacks vertically

### 10. Coming Soon (dark card)
- Kicker: "Launching 2026"
- Headline: "Built for your community, your way."
- Left: text + "Join the journey ↓" (outlined cream pill, left-aligned desktop, centred mobile)
- Right: `manna-in-use.jpg` (community photo, rounded, object-fit cover) + details card
- Details card: Platform / Launch Partner / Launch Year / Content / Access
- Support block: full-width (`grid-column: 1 / -1`), cream background with dark text — inverted to pop against dark section. "Support our mission ↓" button is dark-bordered
- Mobile: single column, CTAs centred, support block stacks vertically

### 11. Contact Form
- Kicker: "Get in Touch"
- Headline: "Partner with zanmanna."
- Formspree endpoint: `xeerkzwd`
- Fields: Name, Organisation, Email, Role (dropdown), Message, GDPR consent checkbox (required)
- GDPR checkbox: `name="consent"` value="yes", required — user must tick before submitting
- Submission handled via JS fetch (no page reload) — on success redirects to `/pages/thank-you.html`

### 12. Footer (dark)
- Background: `--dark`
- Logo: `zanmanna_logo.svg` (cream via CSS filter)
- Copyright: cream text — "© 2026 zanmanna · Redemptive Technology · Built with love"
- Back to top ↑ arrow: outlined circle, cream border + text, right side
- Desktop: logo left / copyright centre / arrow right (flex space-between)
- Mobile: logo top-left / arrow top-right / copyright full-width below (CSS grid)

---

## pages/thank-you.html (Complete)

- Standalone page, no nav or footer
- Cream background, single centred dark card
- Card contains: `zanmanna_logo.svg` (cream filter) + thin divider + "Thank you for reaching out." headline + body text + "Back to home ↑" outlined cream pill linking to `../index.html`
- Same CSS variables and Inter font as index.html
- Redirected to automatically after successful contact form submission

---

## JavaScript Behaviours (index.html)

### 1. App Showcase Carousel
- Auto-cycles 6 slides every 7 seconds
- Updates kicker, title, description and screenshot on each slide
- Fade transition 0.5s, content swaps at 520ms
- Dot indicators — clicking any dot jumps to that slide and resets the timer

### 2. Contact Form Submission
- Intercepts form submit, posts to Formspree via `fetch()`
- On success: redirects to `/pages/thank-you.html`
- No paid Formspree plan required — redirect handled client-side

### 3. Mobile Nav Toggle
- `openMenu()` — adds `open` class to `#main-nav`, locks scroll
- `closeMenu()` — removes `open` class, restores scroll
- `toggleMenu()` — called by hamburger button, toggles between open/close
- Nav links call `closeMenu()` on click so menu closes before scrolling to section

### 4. Clean URL Routing
- Intercepts all `<a href="#...">` clicks on the page
- Scrolls to the target section smoothly
- Replaces the URL hash with a clean path (e.g. `/#contact` becomes `/contact`)
- Logo click scrolls to top and restores the clean base URL

---

## Button Styles

### `.btn-dark` (solid)
- Dark background, cream text, pill shape
- Used for: "Discover Manna App ↓"

### `.btn-outline`
- Transparent background, dark border + text, pill shape
- Used for: "About zanmanna" (hero)

### `.btn-support` (outlined cream)
- Transparent background, cream border + text, pill shape
- `white-space: nowrap`, `flex-shrink: 0`
- Used for: "Explore the app ↓", "Request a demo ↓", "Join the journey ↓", "Support our mission ↓"
- Hover: subtle cream background tint + brighter border
- Within `.coming-support-block`: colour overridden to dark border + dark text (cream background context)

### `.back-to-top`
- Outlined circle, cream border + arrow
- Lives inline in footer, right side

---

## Technical Setup

- **Hosting:** GitHub Pages
- **Repo:** github.com/thetransformationfoundry/zanmanna (public)
- **Domain:** zanmanna.com (registered via Squarespace)
- **DNS:** 4 x A records + CNAME → GitHub Pages
- **HTTPS:** Enforced via GitHub Pages
- **Forms:** Formspree (endpoint: `xeerkzwd`) — redirect handled client-side via JS, no paid plan needed
- **Fonts:** Google Fonts (Inter)
- **No frameworks** — plain HTML, CSS, JavaScript only
- **No build tools** — files served as-is

---

## pages/sign-in.html (Complete)

- Branch: `app-sign-in-up-page` (updated in `manna-app-product-overview-page`)
- Cream background, three dark cards in a row (2-col at 860px, stacks to 1-col on mobile)
- **Card 1 — Returning member:** sign-in icon, for users already in the system or returning after logout. CTA: "Sign in with email →" → `https://manna.zanmanna.com/`
- **Card 2 — New member with join code:** key icon, for users with a join code from their org. Copy explains to sign in with email + verification code then enter join code (lower case, bolded). CTA: "Sign in and activate →" → `https://manna.zanmanna.com/`
- **Card 3 — Register organisation:** home icon, directs new orgs to contact zanmanna. CTA: "Register your organisation →" → `../index.html#contact`
- Nav: `zanmanna_logo_dark.svg` + "Home" pill linking to `../index.html`
- Footer note: "Not sure which applies to you? Contact us"
- SVG icons use `stroke="rgb(245, 238, 228)"`, `stroke-width="1.75"`
- fadeUp animations, fully responsive

---

## Pages Still To Build

| Page | Priority | Notes |
|------|----------|-------|
| `pages/his-story.html` | Complete | Founder's story — Sean Abbood long-form editorial page |
| `pages/manna.html` | High | Deep dive — lead with mission first |
| `pages/about.html` | Medium | zanmanna story and theology |
| `pages/partners.html` | Medium | For rehab centres and organisations |
| `css/global.css` | Low | Extract shared styles when multiple pages exist |

---

## pages/manna-product-overview.html (Complete)

- Branch: `manna-app-product-overview-page`
- Full-page product overview for org leaders and technical reviewers
- **Nav:** Full nav with hamburger mobile menu (same pattern as index.html). Links back to `../index.html` sections.
- **Hero:** Dark section — kicker "Manna App", headline, CTAs to partner + pricing anchor
- **Mission Band:** Cream band with free-for-all mission statement quote
- **Features Section (6 cards):** Expanded detail cards for Community Wall, Daily Bread, Private Journal, Prayer Wall, Full Bible, Emergency Help — each with a technical detail block below the summary
- **Architecture Band:** Dark card explaining multi-tenant model, global vs org content streams, join code onboarding, platform details
- **Roles Section:** Six role cards (Global Admin, Org Admin, Org Partner, Org Guest, Org Past Guest, Revoked) each with colour-coded badge + description
- **Access Matrix Table:** Full permission table — 20 features x 5 roles. Grouped by section (Devotionals, Bible, Prayer Wall, Community Wall, Private Journal, Emergency, User Management). Horizontally scrollable on mobile.
- **Pricing Section:** Headline "Good news? The best surprise." Two cards side by side: Card 1 (featured/dark) — "Free." always and for everyone, all features listed, CTA to get set up. Card 2 (light) — "Support the mission", explains the free model is funded by donations, CTA "Support our mission". No tiers, no prices. Manna is fully free for all organisations.
- **CTA Band:** Dark card — "Bring Manna to your community" — links to contact form and sign-in
- **Footer:** Same as index.html — logo, copyright, back-to-top
- **Entry point:** "Product Overview →" button added to `features-footer` div in index.html's `#app` section

---

## What NOT to Change
- Brand colours — fixed
- Font — Inter only
- zanmanna always lowercase
- No em dashes anywhere
- Core design language — Apple-inspired, generous whitespace
- Formspree endpoint: `xeerkzwd`
- Screenshot image paths — they work on live site, broken only in local preview

## Claude Code Rules
- Always update the Website Structure section when a new page is created or removed

---

*Last updated: Session — his-story.html built as long-form founder editorial page. Hero has 2-col grid (text left, circular photo right) on desktop, stacked centred on mobile. Story uses pull quotes, scripture blocks, and side notes. "Read his story" CTA on manna-product-overview.html links to his-story.html. sean_abbood_founder.png added to assets/images.*
