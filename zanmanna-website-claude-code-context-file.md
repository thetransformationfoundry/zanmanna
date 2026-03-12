# ZanManna Website — Claude Code Context

## Project Overview
This is the official website for **ZanManna**, a redemptive technology startup that builds faith-centered digital tools for addiction recovery communities. The site lives at **zanmanna.com** and is hosted via **GitHub Pages**.

**Project Lead:** Sean Abbood
**Role:** UX Designer & Change Management Consultant
**Location:** Europe (supporting South Africa remotely)

---

## Who We Are — Identity & Mission

### The Name: ZanManna
The name carries deep spiritual and linguistic meaning:
- **Zan (זָן)** — Hebrew for "to feed, nourish, or sustain," used in Jewish blessings like Birkat Hamazon, praising God as the One "who feeds all"
- **Manna (מָן)** — The miraculous bread from heaven God provided to Israel in the wilderness, symbolising daily provision, grace, and true sustenance (Exodus 16, Numbers 11)
- Together, **ZanManna** evokes *"Sustaining Manna"* — divine nourishment for body, mind, and spirit
- Written lowercase as one word — `zanmanna` — for easy, flowing readability

### Our Identity
At our core, we are rooted in faith — boldly embracing who we are in Christ while embodying His example of unconditional love. This foundation inspires us to serve all individuals with respect and compassion, regardless of background or beliefs. Just as Christ reached out to everyone with grace and truth, ZanManna is committed to supporting every person on their recovery journey with dignity and care — pointing users toward community as we believe that is His will for us.

### Mission Statement
*"ZanManna's commitment is to redemptive technology, fuelled by love, guided by the Holy Spirit, and built with discernment and the collective wisdom of all as we journey together. Reimagined for today's connected world, our mission is to empower people and communities to heal, grow, and thrive — together."*

### Vision
- To provide support to people struggling with addiction is at the heart of all we do
- We put love first, helping others find spiritual hope and practical tools both inside and outside of treatment
- Empower recovery organisations to build strong, healthy communities for guests, alumni, partners, and staff
- Centralise community life: announcements, job posts, support events, resources, and prayer requests — all in one place
- Automate encouragement and support: daily devotionals, easy private encouragement, and opt-in notifications
- Low barrier to entry: a mobile-first, non-technical interface usable by anyone, on any device
- Privacy and dignity: strict roles, permissions, and data segregation at every level

### The Heart of the Vision
*"Manna exists to help people find freedom, health, connection, and the sustaining grace of God for every day — a digital table where all are welcome, all are seen, and all are nourished. All while building a community of followers of Christ."*

---

## Core Values
- **Dignity** — Every person is seen, named, and honoured — never reduced to a status or a number
- **Privacy** — Personal reflections are sacred; we build with protection, not extraction
- **Hope** — Every screen, every word, every interaction points toward restoration
- **Safety** — Crisis support and pastoral care always within reach
- **Community** — Recovery is not a solo journey; we build tools for communities who carry each other

---

## Brand Identity

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

### Tone of Voice
- Confident but warm
- Faith-forward without being preachy
- Modern tech startup energy with human soul
- Short, punchy headlines
- Honest and direct body copy
- Inclusive — serves both faith-based and secular recovery organisations

### Logo Files
All logos live in `assets/images/`:
- `zanmanna_logo.svg` — white version (use on dark backgrounds)
- `zanmanna_logo_dark.svg` — dark version (use on light backgrounds / nav)
- `manna_app_icon.svg` — Manna app icon

---

## Product — Manna App

Manna is a role-based community app designed to serve both faith-based and secular recovery and rehabilitation organisations. Built on the Glide no-code platform, Manna offers flexibility, accessibility, and security for organisations of any size or stage.

### What Manna Delivers
Manna empowers rehabilitation centres, alumni ("Past Guests"), partners, and guests to:
- Connect and support one another through prayer
- Share and access healthy, helpful resources
- Receive daily spiritual nourishment
- Access crisis support when needed
- Journal privately and safely

All within a highly secure, user-friendly, and scalable environment — optimised for easy onboarding, robust privacy, and seamless scaling to multiple organisations.

### Key Features
1. **Daily Bread** — Daily devotionals with scripture, reflection, and prayer
2. **Prayer Wall** — Community prayer requests with anonymity protection and "I'm Praying" counters
3. **Private Journal** — Encrypted personal reflection space, voice-to-text enabled, visible only to the author
4. **Full Bible** — All 66 books, 1,189 chapters, 31,105 verses — always free
5. **Resources** — Recovery guides and spiritual growth materials curated by staff
6. **Emergency Help** — One-tap crisis support connecting guests to pastoral care

### User Roles
- **Global Admin** — ZanManna team
- **Org Admin** — Rehab staff, counsellors, leadership
- **Org Partner** — Supporting churches and organisations
- **Org Guest** — Current residents in recovery
- **Org Past Guest** — Alumni who completed the programme

### Technical Details
- **Built on:** Glide Apps (no-code platform)
- **Launch Partner:** Cornerstone Wellness Center, South Africa
- **Launch Year:** 2026
- **Model:** Template per organisation — each rehab centre gets its own private instance
- **Programme duration:** 8-month residential recovery support

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
- **Current redirect:** Formspree default (to be replaced with `pages/thank-you.html`)

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

### Redemptive Design Rules
These apply to both the Manna app AND the website:
- Dignity over efficiency
- Privacy over analytics
- Hope in every interaction
- No dark patterns
- Accessible to all literacy levels
- Love-centered, not data-centered

---

## Technical Setup

- **Hosting:** GitHub Pages
- **Repo:** github.com/thetransformationfoundry/zanmanna
- **Domain:** zanmanna.com (registered via Squarespace)
- **DNS:** A records + CNAME pointing to GitHub Pages
- **HTTPS:** Enforced via GitHub Pages
- **Forms:** Formspree (free tier) — ID: `xeerkzwd`
- **Fonts:** Google Fonts (Inter)
- **No frameworks** — plain HTML, CSS, JavaScript only
- **No build tools** — files are served as-is

---

## Pages Still To Build

| Page | Priority | Notes |
|------|----------|-------|
| `pages/thank-you.html` | High | Replace Formspree default redirect |
| `pages/manna.html` | High | Deep dive on the Manna app |
| `pages/about.html` | Medium | ZanManna story, mission, theology of the name |
| `pages/partners.html` | Medium | For rehab centres considering partnering |
| `css/global.css` | Medium | Extract shared styles for consistency |

---

## What NOT to Change
- Brand colors — fixed palette above
- Font — Inter only
- Core design language — Apple-inspired clean modern
- Redemptive tone of voice
- Formspree endpoint ID: `xeerkzwd`
- The name is always lowercase: `zanmanna` and `manna`

---

*This file should be updated whenever new pages are added, structure changes, or major design decisions are made.*
