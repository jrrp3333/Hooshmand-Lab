# Hooshmand Lab – Content Editing Guide

Since this is a static site deployed to Netlify, content editing works differently from WordPress admin. All content lives in the code, so updates require a GitHub push.

## How to edit content

### Option A: Edit through GitHub's web editor (easiest for small changes)

1. Go to https://github.com/yourusername/hooshmand-lab
2. Browse to the file you want to edit (see table below)
3. Click the pencil icon to edit
4. Make your changes
5. Scroll down and click "Commit changes"
6. Add a commit message (e.g., "Update team member info")
7. Click "Commit to main"
8. Netlify automatically rebuilds and deploys (1–2 minutes)

### Option B: Clone, edit locally, and push (for larger changes)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hooshmand-lab.git
   cd hooshmand-lab
   ```

2. Edit files locally using any text editor (VS Code, Notepad++, etc.)

3. Test locally:
   ```bash
   npm install
   npm run dev
   ```
   Visit `http://localhost:3000` to preview

4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update [description]"
   git push origin main
   ```

5. Netlify automatically builds and deploys

---

## Files to edit for common updates

| What to edit | File | Notes |
|---|---|---|
| Homepage hero, research cards, news preview | `app/page.tsx` | Edit the hardcoded content in the JSX |
| Research page content | `app/research/page.tsx` | Edit the page description and project list |
| Publications list | `app/publications/page.tsx` | Add/update publication entries in the `<ul>` |
| Team members | `app/team/page.tsx` | Add/remove team member cards |
| News items | `app/news/page.tsx` | Update the `newsItems` array |
| Contact information | `app/contact/page.tsx` | Update address, email, phone, etc. |
| Header logo/branding | `app/components/Header.tsx` | Edit the branding text or link |
| Footer links | `app/components/Footer.tsx` | Add/remove navigation links |
| Colors and styles | `app/styles/globals.css` | Edit CSS custom properties (--color-*) |

---

## Example: Adding a new team member

Let's say you want to add a new graduate student to the team page.

1. Open `app/team/page.tsx` in GitHub's editor
2. Find the section that says `## Graduate Students`
3. Add a new section below the existing entries:
   ```markdown
   ### [New Student Name]
   **Degree Program:** PhD, Biology
   **Research Focus:** [Their research area]
   **Email:** [their email]
   ```
4. Commit with message "Add [Name] to team page"
5. Netlify redeploys in 1–2 minutes
6. Visit `hooshmandlab.org/team` to see the change

---

## Example: Adding a new news item

Let's say you want to add a recent publication announcement.

1. Open `app/news/page.tsx` in GitHub's editor
2. Find the line that says `const newsItems = [`
3. Add a new item to the array:
   ```javascript
   {
     id: 4,
     date: 'April 2024',
     title: 'New publication in [Journal Name]',
     content: 'The lab's latest research on [topic] has been published.',
   },
   ```
4. Commit with message "Add news: [title]"
5. Netlify redeploys
6. The new item appears on `hooshmandlab.org/news` and the homepage

---

## Example: Updating publications

1. Open `app/publications/page.tsx`
2. Find the publications list (under `## 2024`, `## 2023`, etc.)
3. Add or edit entries:
   ```html
   <li>
     Your, Name., et al. (2024). "Publication Title." <em>Journal Name</em>,
     XX(X), XX–XX. <a href="https://doi.org/...">doi: 10.1234/...</a>
   </li>
   ```
4. Commit and push
5. Netlify redeploys

---

## Future: Content management system (CMS)

If editing code becomes cumbersome, we can add a **headless CMS** (like Decap CMS) that provides a web interface for editing:

- No code changes required
- Point-and-click editing
- Still deploys to GitHub → Netlify automatically
- Example: https://decapcms.org/

For now, the direct-edit approach is simpler and works well for an academic lab site that doesn't update daily.

---

## Troubleshooting

### "I made a change but the site didn't update"
- Wait 2–3 minutes for Netlify to rebuild and deploy
- Hard-refresh your browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Check Netlify's build log for errors: Log in to Netlify, go to the site, click "Deploys"

### "I accidentally broke something"
- You can revert the commit on GitHub
- Go to the repository, click "Commits", find the bad commit, click the ellipsis (…), and choose "Revert"

### "How do I format text with bold, links, etc.?"
- For the homepage and simple pages, use HTML tags:
  - Bold: `<strong>text</strong>`
  - Link: `<a href="https://example.com">text</a>`
  - Italic: `<em>text</em>`
  - Line break: `<br />`

---

**Last updated:** April 21, 2026  
**Stack:** Next.js + Netlify + GitHub
