# Quick Start: Deploy Hooshmand Lab

## What you have

A complete Next.js static site built for Netlify, GitHub, and Namecheap.

## What you need to do

### 1. Create a GitHub repository (5 minutes)

1. Go to https://github.com/new
2. Create a repo named `hooshmand-lab`
3. Leave it public or private (your choice)
4. **Do not initialize with README** (we already have one)
5. Click "Create repository"

### 2. Push the code to GitHub (5 minutes)

From your local workspace directory:

```bash
git init
git add .
git commit -m "Initial commit: Hooshmand Lab static site"
git branch -M main
git remote add origin https://github.com/yourusername/hooshmand-lab.git
git push -u origin main
```

### 3. Connect Netlify (5 minutes)

1. Go to https://app.netlify.com
2. Click "New site from Git"
3. Select GitHub
4. Find and select `hooshmand-lab`
5. Netlify auto-detects the build settings
6. Click "Deploy site"
7. Wait 1–2 minutes for the build to complete
8. You'll get a temporary URL (e.g., `https://hooshmand-lab-abc.netlify.app`)

### 4. Connect your domain (10 minutes)

1. In Netlify: Go to **Site settings > Domain management**
2. Click **"Add custom domain"**
3. Enter `hooshmandlab.org`
4. In Namecheap: Update the nameservers to Netlify's provided nameservers
5. Wait for DNS to propagate (usually 15–60 minutes)
6. Your site is now live at `https://hooshmandlab.org`

---

## Done! 

The site is live. Every push to the `main` branch on GitHub automatically triggers a rebuild and deploy.

**Next steps:**
- Update the content in the `app/` folder as needed
- Commit and push to GitHub
- Netlify redeploys in 1–2 minutes
- See [editing-guide.md](editing-guide.md) for how to edit content

---

**Time to deployment:** ~25 minutes
