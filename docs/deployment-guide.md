# Deployment Guide: hooshmandlab.org on Netlify

## Pre-deployment checklist

- [ ] Repository is pushed to GitHub
- [ ] All pages are complete and tested locally (`npm run dev`)
- [ ] Build completes without errors (`npm run build`)
- [ ] Namecheap domain (hooshmandlab.org) is registered and active
- [ ] Netlify account is created and linked to GitHub

## Deployment: GitHub → Netlify → Namecheap

This is a fully static site. Once connected to Netlify, every push to the GitHub `main` branch automatically rebuilds and deploys the site to `hooshmandlab.org`.

### Step 1: Push the project to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial Hooshmand Lab static site"
   git remote add origin https://github.com/yourusername/hooshmand-lab.git
   git branch -M main
   git push -u origin main
   ```

2. **Verify** the repository is on GitHub at `https://github.com/yourusername/hooshmand-lab`

### Step 2: Connect Netlify to GitHub

1. Log into **Netlify** (https://app.netlify.com)
2. Click **"New site from Git"**
3. Click **"GitHub"** (authorize if prompted)
4. Find and select the `hooshmand-lab` repository
5. Netlify auto-detects settings from `next.config.js` and `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click **"Deploy"**
7. Wait for the first build to complete (usually 1–2 minutes)

### Step 3: Verify the Netlify deployment

1. Netlify assigns a temporary URL (e.g., `https://hooshmand-lab-abc123.netlify.app`)
2. Visit that URL to confirm the site is live and looks correct
3. Test all pages: Home, Research, Publications, Team, News, Contact
4. Test mobile responsiveness
5. Once verified, proceed to connect the custom domain

### Step 4: Connect Namecheap domain

1. **In Netlify:**
   - Go to **Site settings > Domain management**
   - Click **"Add custom domain"**
   - Enter `hooshmandlab.org`
   - Click **"Verify"**
   - Netlify shows your new nameservers (typically `ns1.netlify.com`, `ns2.netlify.com`, etc.)

2. **In Namecheap:**
   - Log into your Namecheap account
   - Go to **"Domain List"**
   - Click the domain `hooshmandlab.org`
   - Find **"Nameservers"** section
   - Select **"Custom DNS"**
   - Clear existing nameservers
   - Enter Netlify's nameservers:
     - `dns1.p03.nsone.net`
     - `dns2.p03.nsone.net`
     - `dns3.p03.nsone.net`
     - `dns4.p03.nsone.net`
   - Save changes
   - **Note:** DNS propagation can take 1–48 hours, but often completes in minutes

3. **Verify** (in Netlify):
   - After 15–30 minutes, Netlify should confirm the domain is connected
   - You'll see a "DNS verified" status in Netlify

### Step 5: SSL certificate (automatic)

1. Netlify automatically provisions a free Let's Encrypt SSL certificate
2. HTTPS should be live once DNS propagates
3. The certificate auto-renews (no action needed)

### Step 6: Test the live site

1. Visit `https://hooshmandlab.org`
2. Confirm all pages load correctly
3. Test responsive behavior on mobile
4. Check that links work
5. Verify SEO metadata is correct

---

## Setting up the Admin Panel (Decap CMS + Netlify Identity)

The admin panel at `/admin` requires two Netlify services to be enabled after deployment.

### Step 1: Enable Netlify Identity

1. In Netlify, go to **Site settings > Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"** (so only invited users can create accounts)
4. Scroll down to **"External providers"** — you can optionally enable Google login
5. Click **"Save"**

### Step 2: Enable Git Gateway

Git Gateway allows Decap CMS to commit content changes to your GitHub repository.

1. In Netlify, go to **Site settings > Identity > Services**
2. Click **"Enable Git Gateway"**
3. Authorize Netlify to access your GitHub repository when prompted

### Step 3: Invite the content editor

1. In Netlify, go to **Site settings > Identity > Users**
2. Click **"Invite users"**
3. Enter the professor's email address
4. The professor receives an email with a link to set their password
5. After setting the password, they can log in at `https://hooshmandlabs.org/admin`

### Step 4: Verify the admin panel

1. Visit `https://hooshmandlabs.org/admin`
2. Log in with the professor's credentials
3. Verify all four collections are accessible: News, Research, Team, Publications
4. Create a test entry and confirm it appears on the live site after 1–2 minutes

---

Every time you push to the `main` branch on GitHub:

1. Netlify automatically detects the change
2. Builds the Next.js site
3. Deploys to `https://hooshmandlab.org`

**Deployment time:** Usually 1–2 minutes from push to live.

---

## Troubleshooting

### Build fails in Netlify
- Check the Netlify build log for errors
- Common issues: missing dependencies, syntax errors in code
- Fix locally, test with `npm run build`, then push to GitHub

### Domain doesn't resolve
- DNS propagation can take time; wait 24 hours before investigating
- In Namecheap, verify that the nameservers are correctly set to Netlify's
- In Netlify, verify that the domain is marked as "connected"

### Site shows old content after push
- Clear your browser cache (Ctrl+Shift+Del)
- Netlify also caches aggressively; wait a few minutes for cache invalidation

### HTTPS not working
- Usually happens during DNS propagation
- Wait for Netlify to show "DNS verified"
- Once verified, HTTPS should activate automatically

---

## Future considerations

- **Analytics:** Add Netlify Analytics, Google Analytics, or another tool to track site traffic and visitor behavior.
- **Performance:** Monitor site performance using Netlify's built-in tools or Lighthouse audits.
- **Backups:** GitHub is your backup system; always keep the repository up-to-date.

---

**Stack:** Next.js + Netlify + GitHub + Namecheap  
**Status:** Ready for deployment  
**Last updated:** April 21, 2026
