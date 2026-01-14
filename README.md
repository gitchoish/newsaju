# Korean Saju Guide

A production-ready English website about Korean Four Pillars (Saju) and relationship compatibility. Built with Astro + TailwindCSS for static deployment on Cloudflare Pages.

## 🚀 Features

- **Saju Calculator**: Calculate your Four Pillars chart based on birth date/time
- **Compatibility Test**: Check relationship compatibility between two people
- **Educational Guides**: 15 comprehensive articles about Saju concepts
- **Fast & SEO-Optimized**: Static site with full SEO support
- **AdSense Ready**: All required pages and disclaimers included

## 🛠 Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [MDX](https://mdxjs.com/) - Markdown with components for guides
- TypeScript - Type-safe JavaScript

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/korean-saju-guide.git
cd korean-saju-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚢 Deploying to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to **Pages** > **Create a project**
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18` (in Environment Variables)
6. Click **Save and Deploy**

### Option 2: Direct Upload

```bash
# Build the site
npm run build

# Upload dist/ folder via Cloudflare Pages dashboard
```

## 📋 Updating ads.txt

After receiving your AdSense publisher ID:

1. Open `public/ads.txt`
2. Uncomment the last line
3. Replace `pub-XXXXXXXXXXXXXXXX` with your actual publisher ID
4. The file should look like:
   ```
   google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
   ```
5. Redeploy the site

## 📍 Adding AdSense Code

After AdSense approval:

1. Open `src/layouts/BaseLayout.astro`
2. Find the comment: `<!-- AdSense Placeholder -->`
3. Uncomment and update with your AdSense script:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
4. Rebuild and redeploy

## 📁 Project Structure

```
/
├── public/
│   ├── ads.txt          # AdSense sellers file
│   ├── robots.txt       # Search engine directives
│   └── favicon.svg      # Site icon
├── src/
│   ├── components/      # Astro components
│   ├── content/
│   │   └── guides/      # MDX guide articles
│   ├── layouts/         # Page layouts
│   ├── lib/
│   │   └── saju/        # Saju calculation library
│   ├── pages/           # File-based routing
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # TailwindCSS configuration
└── package.json
```

## 📝 Content Management

### Adding New Guides

1. Create a new `.mdx` file in `src/content/guides/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Guide Title"
   description: "Brief description for SEO"
   pubDate: 2024-01-15
   author: "Saju Guide Team"
   tags: ["Tag1", "Tag2"]
   featured: false
   readingTime: "10 min read"
   ---
   ```
3. Write your content in Markdown
4. Rebuild the site

### Updating Domain

1. Update `site` in `astro.config.mjs` with your actual domain
2. Update the `Sitemap` line in `public/robots.txt`

## 🔒 Legal Pages Included

All AdSense-required pages are pre-built:

- `/about` - About the site
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/cookies` - Cookie policy
- `/terms` - Terms of service
- `/disclaimer` - Entertainment disclaimer

## ⚠️ Important Notes

- This site is for **entertainment and educational purposes only**
- Saju readings should not be used for life decisions
- All calculations happen client-side - no personal data is stored
- Update contact email in `src/pages/contact.astro`

## 📄 License

This project is for personal/educational use.

---

Built with ❤️ for cultural education and exploration.
