# Hooshmand Lab Website

A clean, professional website for the Hooshmand Lab research group. Built with **Next.js**, hosted on **Netlify**, and connected to **hooshmandlab.org** via Namecheap.

## What's Here

This is the redesigned Hooshmand Lab website—migrated from the old WordPress site on DreamHost. The new site is faster, more maintainable, and designed to reflect the lab's commitment to credibility and clarity.

**What you get:**
- A beautiful, responsive academic site (mobile-friendly)
- Pages for Home, Research, Publications, Team, News, and Contact
- An admin panel so the lab PI can update content without touching code
- Automatic deployments: push to GitHub → Netlify builds → site updates live
- Fast global performance via Netlify's CDN
- HTTPS and SSL out of the box

## Getting Started (Locally)

### Prerequisites
- Node.js 18+ installed
- Git

### Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/jrrp3333/Hooshmand-Lab.git
   cd "Hooshmands Website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```
   Then visit `http://localhost:3000`

4. Build for production:
   ```bash
   npm run build
   ```
   The static HTML will be generated in the `out/` folder.

## Project Structure

```
app/
├── layout.tsx              # Global header, footer, layout
├── page.tsx                # Homepage
├── research/page.tsx       # Research section
├── publications/page.tsx   # Publications
├── team/page.tsx           # Team members
├── news/page.tsx           # News & updates
├── contact/page.tsx        # Contact form
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
└── styles/
    └── globals.css         # All colors, typography, layout

public/                      # Images, logos, PDFs
next.config.js              # Next.js settings
netlify.toml                # Netlify deployment config
package.json                # Dependencies
```

## Updating Content

### For the Lab PI (No Code Required)

The admin panel lets you update content without touching code. Log in at `/admin` to modify:
- **Research**: Lab focus areas and descriptions
- **Team**: Add/edit member profiles and photos
- **Publications**: Add papers, PDFs, or links
- **News**: Post lab updates and announcements

### For Developers

Content is stored in React components. To make changes:

1. Edit the relevant page in `app/`
   - Homepage content: `app/page.tsx`
   - Team members: `app/team/page.tsx`
   - Publications: `app/publications/page.tsx`
   - News: `app/news/page.tsx`
   - Styling: `app/styles/globals.css`

2. Commit and push:
   ```bash
   git add .
   git commit -m "Update homepage content"
   git push origin main
   ```

3. Netlify automatically rebuilds and deploys—your changes will be live in 1–2 minutes.

## Deployment

The site is currently hosted on **Netlify** and connected to **hooshmandlab.org**.

### How it works:
- GitHub repo is linked to Netlify
- Every push to `main` triggers an automatic build and deploy
- The site rebuilds and goes live at `hooshmandlab.org` within 1–2 minutes
- No manual deployment needed

### If you need to update the domain or hosting:
- **Domain registrar**: Namecheap (hooshmandlab.org)
- **Hosting**: Netlify
- **DNS**: Managed by Namecheap, pointing to Netlify nameservers

## Design & Colors

The site uses a clean, academic aesthetic inspired by the client's preferences:

- **Black & stone tones**: Muted, professional color palette with no bright accents
- **Typography**: Serif headers and clean, readable body text
- **Imagery**: Soft corners on images (no harsh square crops)
- **Minimalist approach**: Subtle shadows, lots of whitespace
- **Feel**: Trust, professionalism, calm

All colors and typography are defined in `app/styles/globals.css` and can be easily adjusted.

## Performance & Security

- **Fast**: No server—just static HTML served globally via CDN
- **Secure**: No databases, no server vulnerabilities, no attack surface
- **SEO-friendly**: All pages are pre-rendered with proper metadata
- **Maintainable**: Version-controlled on GitHub, automated deployments, no DevOps overhead

## Need Help?

For questions or updates:
- Contact the lab PI or lead developer
- Issues and feature requests can be tracked on GitHub
- Keep dependencies updated regularly (`npm install`)

---

**Current Version**: 0.2.0  
**Stack**: Next.js + Netlify + GitHub  
**Domain**: hooshmandlab.org  
**Status**: Live and fully operational
