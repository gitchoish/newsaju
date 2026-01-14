# Korean Saju Website - Implementation Plan

A production-ready English website about Korean Four Pillars (Saju) and relationship compatibility, optimized for AdSense approval and monetization. Built with Astro (SSG) + TailwindCSS, fully static for Cloudflare Pages.

---

## User Review Required

> [!IMPORTANT]
> **BaZi/Four Pillars Calculation Library**: I plan to implement a custom deterministic algorithm based on the traditional Chinese calendar system (Heavenly Stems + Earthly Branches). This will provide accurate pillar calculations without external API dependencies. The interpretation layer will be educational and clearly marked as entertainment/self-reflection only.

> [!NOTE]
> **15 Guide Articles**: I will generate comprehensive, unique articles covering Saju basics, Five Elements, compatibility interpretation, cultural context, and responsible usage. Each will be 1200-2000 words with proper structure.

---

## Proposed Changes

### Project Foundation

#### [NEW] [package.json](file:///c:/Users/shchoi/Desktop/newsaju/package.json)
- Astro 4.x with TailwindCSS integration
- MDX support for blog content
- SEO/sitemap packages
- Build scripts for Cloudflare Pages

#### [NEW] [astro.config.mjs](file:///c:/Users/shchoi/Desktop/newsaju/astro.config.mjs)
- Static output mode for Cloudflare Pages
- MDX integration
- Sitemap generation
- TailwindCSS integration

#### [NEW] [tailwind.config.mjs](file:///c:/Users/shchoi/Desktop/newsaju/tailwind.config.mjs)
- Custom color palette (trustworthy, modern)
- Typography plugin for prose content
- Custom animations

---

### Layouts & Components

#### [NEW] [src/layouts/BaseLayout.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/layouts/BaseLayout.astro)
- Site-wide layout with nav + footer
- SEO meta tags component integration
- OpenGraph/Twitter card support
- AdSense head placeholder

#### [NEW] [src/components/Navigation.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/components/Navigation.astro)
- Responsive navigation: Tools, Guides, About
- Mobile hamburger menu

#### [NEW] [src/components/Footer.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/components/Footer.astro)
- Links: About, Contact, Privacy Policy, Cookies, Terms, Disclaimer
- Entertainment disclaimer text
- Copyright notice

#### [NEW] [src/components/SEO.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/components/SEO.astro)
- Dynamic meta tags
- OpenGraph + Twitter cards
- JSON-LD schema injection

---

### Pages

#### [NEW] [src/pages/index.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/index.astro)
- Hero section with CTA buttons
- "What is Saju?" intro section
- "How it Works" 3-step section
- "Popular Guides" 6-card grid
- Trust section (privacy, cultural respect, disclaimers)

#### [NEW] [src/pages/tools/saju-calculator.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/tools/saju-calculator.astro)
- Birth date, time (optional), sex (optional), timezone inputs
- Privacy/disclaimer consent checkbox
- Client-side calculation using custom algorithm
- Four Pillars result display (Year/Month/Day/Hour)
- Personality interpretation section
- Links to educational guides

#### [NEW] [src/pages/tools/compatibility.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/tools/compatibility.astro)
- Two profile input forms
- Consent checkbox
- Compatibility score (0-100) with explanation
- 5 sub-scores: communication, values, emotional style, conflict handling, growth
- Relationship tips section
- Links to relevant guides

#### [NEW] [src/pages/about.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/about.astro)
- Mission statement
- Cultural context and respect
- Entertainment disclaimer

#### [NEW] [src/pages/contact.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/contact.astro)
- Contact form UI (client-side)
- mailto: fallback
- No server required

#### [NEW] [src/pages/privacy-policy.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/privacy-policy.astro)
- Comprehensive privacy policy
- GDPR compliance language
- Data handling practices

#### [NEW] [src/pages/cookies.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/cookies.astro)
- Cookie usage explanation
- Types of cookies used

#### [NEW] [src/pages/terms.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/terms.astro)
- Terms of service
- Usage guidelines
- Liability limitations

#### [NEW] [src/pages/disclaimer.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/disclaimer.astro)
- Entertainment/educational purpose
- Not medical/legal/financial advice
- Cultural sensitivity statement

---

### Guides/Blog System

#### [NEW] [src/pages/guides/index.astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/guides/index.astro)
- Grid of all guide articles
- Category filters (optional)
- Search functionality (optional)

#### [NEW] [src/pages/guides/[...slug].astro](file:///c:/Users/shchoi/Desktop/newsaju/src/pages/guides/[...slug].astro)
- Dynamic guide template
- Article schema JSON-LD
- Table of contents
- FAQ schema where relevant
- Internal links to tools and other guides

#### [NEW] 15 Guide Articles in `src/content/guides/`
1. `what-is-saju-korean-four-pillars.mdx` - Introduction to Saju
2. `understanding-five-elements-wood-fire-earth-metal-water.mdx`
3. `heavenly-stems-explained.mdx` - 10 Heavenly Stems
4. `earthly-branches-twelve-animals.mdx` - 12 Earthly Branches
5. `birth-time-importance-hour-pillar.mdx`
6. `day-master-your-core-identity.mdx`
7. `ten-gods-relationships-explained.mdx`
8. `saju-compatibility-what-it-really-means.mdx`
9. `reading-your-saju-chart-beginners.mdx`
10. `saju-vs-western-astrology-key-differences.mdx`
11. `cultural-context-saju-korean-society.mdx`
12. `common-saju-misconceptions-debunked.mdx`
13. `how-to-use-saju-responsibly.mdx`
14. `avoiding-fortune-telling-scams.mdx`
15. `saju-for-self-reflection-personal-growth.mdx`

---

### Saju Calculation Library

#### [NEW] [src/lib/saju/index.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/index.ts)
- Main export for Saju calculations

#### [NEW] [src/lib/saju/calendar.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/calendar.ts)
- Solar to Lunar calendar conversion
- Stem/Branch calculations for year/month/day/hour

#### [NEW] [src/lib/saju/stems.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/stems.ts)
- 10 Heavenly Stems data and relationships

#### [NEW] [src/lib/saju/branches.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/branches.ts)
- 12 Earthly Branches data and relationships

#### [NEW] [src/lib/saju/elements.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/elements.ts)
- Five Elements interactions (generating/controlling cycles)

#### [NEW] [src/lib/saju/interpretation.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/interpretation.ts)
- Personality tendency interpretations
- Strengths and watch-outs based on Day Master
- Educational, balanced wording

#### [NEW] [src/lib/saju/compatibility.ts](file:///c:/Users/shchoi/Desktop/newsaju/src/lib/saju/compatibility.ts)
- Compatibility scoring algorithm
- 5 sub-score calculations
- Relationship tips generation

---

### Static Assets & SEO

#### [NEW] [public/ads.txt](file:///c:/Users/shchoi/Desktop/newsaju/public/ads.txt)
- AdSense placeholder with instructions

#### [NEW] [public/robots.txt](file:///c:/Users/shchoi/Desktop/newsaju/public/robots.txt)
- Allow all crawlers
- Reference sitemap

#### Auto-generated: `/sitemap.xml`
- Astro sitemap integration generates this automatically

---

### Documentation

#### [NEW] [README.md](file:///c:/Users/shchoi/Desktop/newsaju/README.md)
- Project overview
- Local development instructions
- Cloudflare Pages deployment guide
- AdSense integration instructions
- ads.txt update guide

---

## Project Structure

```
newsaju/
├── public/
│   ├── ads.txt
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── GuideCard.astro
│   │   ├── PillarDisplay.astro
│   │   └── CompatibilityResult.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── guides/
│   │       └── [15 MDX files]
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── GuideLayout.astro
│   ├── lib/
│   │   └── saju/
│   │       ├── index.ts
│   │       ├── calendar.ts
│   │       ├── stems.ts
│   │       ├── branches.ts
│   │       ├── elements.ts
│   │       ├── interpretation.ts
│   │       └── compatibility.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── cookies.astro
│   │   ├── terms.astro
│   │   ├── disclaimer.astro
│   │   ├── tools/
│   │   │   ├── saju-calculator.astro
│   │   │   └── compatibility.astro
│   │   └── guides/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Verification Plan

### Automated Tests

1. **Build Verification**
   ```bash
   cd c:\Users\shchoi\Desktop\newsaju
   npm run build
   ```
   - Verify all pages generate without errors
   - Check output in `dist/` folder

2. **Static File Verification**
   ```bash
   # Check all expected pages exist
   dir dist\*.html
   dir dist\tools\*.html
   dir dist\guides\*.html
   ```

### Browser Testing

3. **Visual & Functional Testing**
   - Start dev server: `npm run dev`
   - Test all routes in browser:
     - Home page hero, sections, and links
     - Saju Calculator input → calculation → result display
     - Compatibility tool dual input → scores display
     - Guides index and individual article pages
     - All legal pages render correctly
     - Navigation works on desktop and mobile
     - Footer links all functional

4. **SEO Verification**
   - Check page source for meta tags
   - Verify JSON-LD schemas in guide pages
   - Confirm sitemap.xml generates correctly
   - Verify robots.txt is accessible

### Manual Verification

5. **User to verify Cloudflare deployment**
   - After local build succeeds, deploy to Cloudflare Pages
   - Verify all routes work on production URL
   - Confirm ads.txt is accessible at `/ads.txt`

---

## Implementation Order

1. **Phase 1**: Project setup (Astro + TailwindCSS + MDX)
2. **Phase 2**: Layout and core components
3. **Phase 3**: Static pages (Home, About, Contact, Legal)
4. **Phase 4**: Saju calculation library + Calculator tool
5. **Phase 5**: Compatibility tool
6. **Phase 6**: Blog system + 15 guide articles
7. **Phase 7**: SEO finalization + README + Final testing
