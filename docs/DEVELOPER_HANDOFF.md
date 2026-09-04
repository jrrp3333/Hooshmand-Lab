# Hooshmand Lab Developer Handoff

Updated: September 4, 2026

## Start here

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. Before opening a pull request, run:

```powershell
npm run build
```

The production build is static and is written to `out/`. Do not commit `out/`, `.next/`, `node_modules/`, or `.netlify/`.

## Architecture

- `app/` contains the Next.js App Router pages and shared UI.
- `content/` is the content source of truth. News, research, team, and publication entries are Markdown with front matter.
- `lib/content.ts` reads and sorts Markdown at build time.
- `public/images/uploads/` contains deployable images and CMS uploads.
- `public/admin/` contains the Decap CMS app and configuration.
- `netlify.toml` defines the build, publish directory, redirects, and admin headers.
- `app/api/contact/send/route.ts` sends contact form email through the configured provider.

## Content workflow

Use `/admin` for content changes after Netlify Identity and Git Gateway are enabled. CMS edits commit to the `main` branch, then Netlify rebuilds the site. For code-based edits, update the relevant Markdown or `app/` file, run the build, and open a pull request.

## Priority roadmap

1. **Verify production services**
   - Confirm `hooshmandlab.org` resolves to Netlify and HTTPS is active.
   - Enable Netlify Identity and Git Gateway.
   - Invite the PI and test one CMS edit from `/admin`.
   - Configure contact-form environment variables in Netlify; never commit `.env.local`.
2. **Content audit**
   - Review every team, research, news, and publication entry with the PI.
   - Replace placeholders and verify dates, author names, links, images, and accessibility text.
   - Confirm the public image files referenced by Markdown exist under `public/images/uploads/`.
3. **Quality pass**
   - Test every route at desktop and mobile widths.
   - Test CMS create, edit, delete, image upload, and resulting deploy.
   - Test contact-form success and failure paths with a real Netlify deployment.
   - Run Lighthouse and address accessibility, metadata, and performance findings.
4. **Operational improvements**
   - Protect the `main` branch and require review for code changes.
   - Document who owns Netlify, Namecheap, GitHub, and the email account.
   - Add a lightweight backup/export process for CMS content.
   - Keep dependencies current through small, reviewed updates.

## Important caveats

- This is a static export. Server route handlers are not deployed as Netlify functions by the current configuration; the contact form therefore needs an explicit Netlify-compatible backend before it can be considered production-ready.
- CMS authentication is provided by Netlify Identity, not by an application PIN. Do not reintroduce a client-side password or PIN.
- `public/admin/config.yml` must use the canonical `hooshmandlab.org` domain.
