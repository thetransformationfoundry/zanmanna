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
│   ├── thank-you.html          ← Form submission redirect (complete)
│   ├── manna.html              ← Manna app deep dive (to build)
│   ├── about.html              ← About zanmanna (to build)
│   └── partners.html           ← Partner centres (to build)
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
- Links: About, Manna App
- "Partner with us" pill CTA — dark background, cream text
- Hover: background lightens to `#444340`, text stays cream (not opacity-based)
- Mobile: nav links hidden, only logo + CTA shown

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
- Left (`#carouselLeft`): kicker + title + description + "Request a demo ↓" CTA — all fade together as one unit
- Right: screenshot image (`#carouselScreen`) — fades in sync with left panel
- Screenshot images: edge-to-edge PNGs with no built-in padding, transparent background
- Desktop: image absolutely positioned, bleeds to top and right edges of card (`padding: 32px 32px 0 0` for breathing room), anchored to bottom
- 6 slides, auto-cycles every 7 seconds
- Fade transition: 0.5s ease on both left panel and image together, content swaps at 520ms
- 6 dot indicators, manual click resets timer
- Mobile: stacks vertically — text top, dots below text (position absolute bottom-left over image), image flush to bottom with 24px left/right padding

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

### 3. Clean URL Routing
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

## Pages Still To Build

| Page | Priority | Notes |
|------|----------|-------|
| `pages/manna.html` | High | Deep dive — lead with mission first |
| `pages/about.html` | Medium | zanmanna story and theology |
| `pages/partners.html` | Medium | For rehab centres and organisations |
| `css/global.css` | Low | Extract shared styles when multiple pages exist |

---

## What NOT to Change
- Brand colours — fixed
- Font — Inter only
- zanmanna always lowercase
- No em dashes anywhere
- Core design language — Apple-inspired, generous whitespace
- Formspree endpoint: `xeerkzwd`
- Screenshot image paths — they work on live site, broken only in local preview

---

*Last updated: Session — carousel unified fade transition, app showcase image bleed desktop/mobile, dots floating bottom-left mobile, mobile image sizing and centring*
