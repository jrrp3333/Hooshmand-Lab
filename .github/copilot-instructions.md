# Hooshmand Lab Website Redesign — Project Instructions

## Project Overview

Redesigning the Hooshmand Lab academic website for a university research lab. The client is the lab PI.

- **Current live site**: hooshmandlab.dreamhosters.com (hosted on DreamHost)
- **Target domain**: hooshmandlab.org
- **Reference design**: vidajamali.github.io (client's aesthetic inspiration)
- **Reference style**: Alireza Abbaspourrad's website
- **Goal**: Migrate to a cheaper host; current host is DreamHost (free university tier)

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

- Website must support **admin-updatable news entries** (CMS-like functionality for the lab PI)
- Change domain from dreamhosters.com subdomain to hooshmandlab.org
- Migrate hosting to a cheaper provider (explore options)
- Source is a Next.js project (see `next.config.js`, `package.json`)

## Communication & Deliverables

- Send drafts at each major stage for client review
- Get **written confirmation** (email is fine) before proceeding at each stage
- Maintain constant communication

## What Still Needs to Be Collected from Client

- Login credentials for the current DreamHost host
- Domain registrar access
- The current website source folder (if different from this repo)
- Any passwords for the current site backend

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
