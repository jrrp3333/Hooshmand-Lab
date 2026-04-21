# Hooshmand Lab – Static Site for Netlify

## Overview

This is a modern static site built with **Next.js** and deployed to **Netlify**. It's designed for academic credibility, fast performance, and easy hosting via GitHub and Namecheap.

**Key features:**
- Formal academic design with Georgia Tech-inspired clarity and TAMUCC-aware color accents
- Fast static HTML generation with Next.js
- Responsive mobile-first design
- Built-in templates for all core sections: Home, Research, Publications, Team, News, Contact
- Seamless Netlify deployment from GitHub
- No server required; fully static and cacheable

## Project structure

```
├── app/
│   ├── layout.tsx             # Global layout with Header, Footer
│   ├── page.tsx               # Homepage
│   ├── research/page.tsx      # Research page
│   ├── publications/page.tsx  # Publications page
│   ├── team/page.tsx          # Team page
│   ├── news/page.tsx          # News archive page
│   ├── contact/page.tsx       # Contact page
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   └── styles/
│       └── globals.css        # Design system, layout, responsive
├── public/                    # Static assets (images, etc.)
├── next.config.js            # Next.js configuration
├── netlify.toml              # Netlify deployment config
├── package.json              # Dependencies and scripts
└── .gitignore                # Git ignore rules
```

## Local development

1. **Clone the repository** from GitHub:
   ```bash
   git clone https://github.com/yourusername/hooshmand-lab.git
   cd hooshmand-lab
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This generates static HTML in the `out/` folder.

## Deployment to Netlify

### Prerequisites
- GitHub account (repository already created)
- Netlify account (linked to GitHub)
- Namecheap domain registered and ready to connect

### Step-by-step

1. **Connect GitHub to Netlify:**
   - Log into Netlify (netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Choose the `hooshmand-lab` repository
   - Netlify auto-detects the build command from `netlify.toml`
   - Click "Deploy"

2. **Verify the deployment:**
   - Netlify assigns a temporary URL (e.g., `hooshmand-lab-123abc.netlify.app`)
   - Visit the URL to confirm the site is live
   - You can use this URL for testing before connecting the custom domain

3. **Connect your Namecheap domain:**
   - In Netlify, go to `Site settings > Domain management`
   - Click "Add custom domain"
   - Enter `hooshmandlab.org`
   - Netlify will show nameserver instructions
   - Log into Namecheap, find your domain, and update nameservers to Netlify's
   - Wait for DNS propagation (usually 1–2 hours, sometimes faster)
   - Verify that `https://hooshmandlab.org` resolves correctly

4. **Enable SSL (automatic):**
   - Netlify automatically provisions Let's Encrypt SSL certificates
   - HTTPS should be live once DNS propagates

### Automatic deployments

- Every push to the GitHub `main` branch triggers an automatic Netlify build and deploy
- The site will be live at `hooshmandlab.org` within 1–2 minutes

## Editing content

Since this is a static site, content is baked into the code. To update the site:

1. **Edit React components** in the `app/` folder (e.g., `app/page.tsx` for homepage)
2. **Commit changes** to GitHub
3. **Push to `main`** — Netlify automatically rebuilds and deploys

### Common edits

- **Homepage hero text:** Edit `app/page.tsx` (search for "biomedical research lab")
- **Team members:** Edit `app/team/page.tsx`
- **Publications:** Edit `app/publications/page.tsx`
- **News items:** Edit `app/news/page.tsx`
- **Colors and styles:** Edit `app/styles/globals.css`

For now, the professor can request edits via email, and you can make them quickly. In a future iteration, you can add a headless CMS (like Decap CMS) to allow non-technical content updates.

## Design decisions

### Color palette
- **Navy ink (#102a43, #0c2340):** Primary text and UI
- **Teal (#008c95):** Accent links, metadata, highlights
- **Sand/cream (#f4efe6):** Soft background
- **Gold (#b3a369):** Secondary accent for depth
- **White, borders, and muted grays:** Neutral structure

### Typography
- **Display: Georgia serif** — Headers and brand
- **Body: Segoe UI / Helvetica Neue** — Readable, institutional

### Mobile behavior
- Navigation collapses to a hamburger menu at 960px
- Grid layouts reflow to single column on mobile
- Touch-friendly button sizes (40px+ min)

## Performance benefits

- **Fast:** Static HTML loads instantly, cached globally by Netlify's CDN
- **Secure:** No server vulnerabilities; no database to manage
- **Scalable:** Handles traffic spikes without additional infrastructure
- **SEO-friendly:** All pages are pre-rendered with proper metadata

## Maintenance

- **Keep dependencies updated:** Run `npm install` periodically to get security updates
- **GitHub + Netlify:** Everything is version-controlled and automatically deployed
- **Content updates:** Edit pages in code, push to GitHub, and Netlify handles the rest

---

**Site version:** 0.1.0  
**Stack:** Next.js + Netlify + GitHub + Namecheap  
**Last updated:** April 21, 2026  
**Status:** Ready for deployment and live at hooshmandlab.org
# Hooshmand-Lab
