# Hooshmand Lab Website Redesign — Project Instructions

## Project Overview

Redesigning the Hooshmand Lab academic website for a university research lab. The client is the lab PI.

- **Current live site**: hooshmandlab.dreamhosters.com (hosted on DreamHost)
- **Target domain**: hooshmandlab.org (domain purchased on Namecheap)
- **New host**: Netlify (repo pushed to GitHub, Netlify project configured)
- **Reference design**: vidajamali.github.io (client's aesthetic inspiration)
- **Reference style**: Alireza Abbaspourrad's website
- **Goal**: Migrate to Netlify; connect to hooshmandlab.org via Namecheap DNS

## Client Aesthetic Preferences

- **Color palette**: Black + beach rock tones (muted sandy/stone neutrals) — no bright accent colors
- **No logo needed**
- Soft corners on images (not harsh square crops)
- Minimal or no box shadows
- Ad-free
- Clean, academic feel — visitors should feel **trust, professionalism, and calm**

## Content Decisions

- **Keep**: The Research tab content from the current site — it is the only page the client explicitly wants to preserve
- **Discard**: All other existing content can be reformatted or replaced
- All other tabs should be reformatted to match the new aesthetic

## Technical Requirements

- **Admin CMS**: Lab PI must be able to update Research, News, Team Members, and other dynamic content without touching code — build an admin update page/panel
- **Domain**: hooshmandlab.org purchased on Namecheap — connect to Netlify via DNS
- **Hosting**: Netlify (GitHub repo already connected)
- Source is a Next.js project (see `next.config.js`, `package.json`)
- Original DreamHost files were inaccessible — content was manually transferred (some may be missing)

## Current Progress

- ✅ Domain purchased (hooshmandlab.org via Namecheap)
- ✅ GitHub repo created and project pushed
- ✅ Netlify project configured
- ✅ Basic redesign complete (needs polishing)
- ✅ Content partially transferred from old site
- ✅ Images from old site included
- ❌ Namecheap ↔ Netlify DNS not yet connected
- ❌ Admin update panel not yet built
- ❌ Original DreamHost source files never accessed
- ❌ Polish, spelling/grammar check not yet done

## Remaining Work (Priority Order)

1. **Connect Namecheap DNS to Netlify** — point hooshmandlab.org to the Netlify deployment
2. **Admin CMS panel** — allow PI to update Research, News, Team Members, Publications, etc. without code changes
3. **Polish UI** — refine styling, spacing, typography to match client aesthetic
4. **Spelling & grammar check** — audit all visible text on every page

## Communication & Deliverables

- Send drafts at each major stage for client review
- Get **written confirmation** (email is fine) before proceeding at each stage
- Maintain constant communication

## What Still Needs to Be Collected from Client

- Written confirmation before each major stage (email is acceptable)
- Any missing content from the old site that wasn't manually transferred

## Contractor Info

- **Contractor**: Justin Pena (student)
- **Student ID**: A04259502
- **Rate**: ~$800 stipend; $15/hr for future updates
- Bulk payment preferred due to variable schedule as a student

## Dev Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server
npm run build     # production build
```
