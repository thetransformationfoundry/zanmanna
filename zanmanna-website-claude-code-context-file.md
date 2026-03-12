# ZanManna Website — Claude Code Context

## Project Overview
This is the official website for **ZanManna**, a redemptive technology startup that builds faith-centered digital tools for addiction recovery communities. The site lives at **zanmanna.com** and is hosted via **GitHub Pages**.

**Project Lead:** Sean Abbood
**Role:** UX Designer & Change Management Consultant
**Location:** Europe (supporting South Africa remotely)

---

## Brand Identity

### Mission
ZanManna builds faith-centered digital tools for addiction recovery communities — walking alongside people as they find their way back.

### Core Values
- **Dignity** — Every person is seen, named, and honoured
- **Privacy** — Personal reflections are sacred; we build with protection not extraction
- **Hope** — Every screen, every word points toward restoration
- **Community** — Recovery is not a solo journey

### Brand Colors
```
--cream:       #F5EEE4   (warm off-white, primary background)
--cream-light: #FAF6F0   (lightest background)
--taupe:       #8B7A69   (brand accent, secondary text)
--taupe-light: #C4B5A5   (subtle accents, borders)
--taupe-dark:  #6B5D4F   (body text on light backgrounds)
--dark:        #2C2B29   (primary dark, headlines, dark sections)
```

### Typography
- **Font:** Inter (Google Fonts)
- **Headlines:** Inter 700, tight letter-spacing (-0.04em)
- **Body:** Inter 400, line-height 1.65–1.75
- **Labels/Kickers:** Inter 600, uppercase, letter-spacing 0.06em
- **Design reference:** Apple.com — clean, modern, generous whitespace, bold type

### Logo Files
All logos live in `assets/images/`:
- `zanmanna_logo.svg` — white version (use on dark backgrounds)
- `zanmanna_logo_dark.svg` — dark version (use on light backgrounds / nav)
- `manna_app_icon.svg` — Manna app icon (use on any background)

---

## Product — Manna App

Manna is ZanManna's first product. A faith-centered mobile app built for people in residential addiction recovery.

**Key Features:**
1. **Daily Bread** — Daily devotionals with scripture and prayer
2. **Prayer Wall** — Community prayer requests with anonymity protection and "I'm Praying" counters
3. **Private Journal** — Encrypted personal reflection space, voice-to-text enabled
4. **Full Bible** — All 66 books, 1,189 chapters, 31,105 verses
5. **Resources** — Recovery guides and spiritual growth materials curated by staff
6. **Emergency Help** — One-tap crisis support connecting guests to pastoral care

**Built on:** Glide Apps (no-code platform)
**Launch Partner:** Cornerstone Wellness Center, South Africa
**Launch Year:** 2026
**Model:** Template per organisation (each rehab centre gets its own instance)

---

## Website Structure

```
zanmanna-website/
├── index.html                  ← Home page (root, always here)
├── CNAME                       ← zanmanna.com domain config
├── README.md
├── CLAUDE.md                   ← This file
├── pages/
│   ├── manna.html              ← Manna app deep dive (to build)
│   ├── about.html              ← About ZanManna (to build)
│   ├── partners.html           ← Partner centres (to build)
│   └── thank-you.html          ← Form submission redirect (to build)
├── assets/
│   ├── images/
│   │   ├── zanmanna_logo.svg
│   │   ├── zanmanna_logo_dark.svg
│   │   └── manna_app_icon.svg
│   ├── fonts/
│   └── icons/
│       └── favicon.png
└── css/
    └── global.css              ← Shared styles (to create)
```

### Image Paths
- From `index.html` (root): `assets/images/filename.svg`
- From `pages/*.html`: `../assets/images/filename.svg`

---

## Current Pages

### index.html — Home (✅ Built)
Sections in order:
1. **Nav** — Fixed, frosted glass, dark logo, pill CTA button
2. **Hero** — Large centered headline, two CTA buttons
3. **App Showcase** — Dark card, Manna app icon + stats row
4. **About** — Two column: mission text left, values pillars right
5. **Verse Band** — Deuteronomy 8:3 on dark background
6. **Features Grid** — 6 Manna app features in 3-column grid
7. **Coming Soon** — Dark section with launch details panel
8. **Contact Form** — Partnership enquiry form via Formspree
9. **Footer** — Logo + copyright

### Contact Form
- **Provider:** Formspree
- **Endpoint:** `https://formspree.io/f/xeerkzwd`
- **Fields:** Name, Organisation, Email, Role (dropdown), Message
- **Current redirect:** Formspree default thank-you page (to be replaced with `pages/thank-you.html`)

---

## Design Principles

### Visual Style — Apple-Inspired
- Generous whitespace — sections breathe
- Bold, tight headlines — Inter 700 at -0.04em tracking
- Pill-shaped buttons — `border-radius: 980px`
- Rounded cards — `border-radius: 16px–24px`
- Frosted glass nav — `backdrop-filter: blur(20px)`
- Subtle borders — `rgba(139,122,105,0.15)` not harsh lines
- Radial glow accents on dark sections

### Tone of Voice
- Confident but warm
- Faith-forward without being preachy
- Modern tech startup energy with human soul
- Short, punchy headlines
- Honest and direct body copy

### Redemptive Design Rules
These apply to both the Manna app AND the website:
- Dignity over efficiency
- Privacy over analytics
- Hope in every interaction
- No dark patterns
- Accessible to all literacy levels

---

## Technical Setup

- **Hosting:** GitHub Pages
- **Repo:** github.com/thetransformationfoundry/zanmanna
- **Domain:** zanmanna.com (registered via Squarespace)
- **DNS:** A records + CNAME pointing to GitHub Pages
- **HTTPS:** Enforced via GitHub Pages
- **Forms:** Formspree (free tier)
- **Fonts:** Google Fonts (Inter)
- **No frameworks** — plain HTML, CSS, JavaScript only
- **No build tools** — files are served as-is

---

## Pages Still To Build

| Page | Priority | Notes |
|------|----------|-------|
| `pages/thank-you.html` | High | Replace Formspree redirect |
| `pages/manna.html` | High | Deep dive on the app |
| `pages/about.html` | Medium | ZanManna story and mission |
| `pages/partners.html` | Medium | For rehab centres |
| `css/global.css` | Medium | Extract shared styles |

---

## What NOT to Change
- Brand colors — these are fixed
- Font — Inter only
- Core design language — Apple-inspired clean modern
- Redemptive tone of voice
- Formspree endpoint ID: `xeerkzwd`

---

*This file should be updated whenever new pages are added, structure changes, or major design decisions are made.*
