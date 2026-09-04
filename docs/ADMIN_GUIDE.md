# Admin CMS Guide

The site uses Decap CMS at `/admin`. It edits the Markdown files in `content/` and commits changes to GitHub through Netlify Git Gateway. There is no application PIN and no custom admin API.

<<<<<<< HEAD
## One-time Netlify setup
=======
The Decap CMS admin panel lets Dr. Hooshmand update all lab content (Research, Team, News, Publications) **without touching any code**. It is accessible at `/admin/` and uses Netlify Identity for authentication.
>>>>>>> 9e4e0c33af1d893dfad1a1e84348258b99aaae3c

1. In Netlify, open **Site configuration > Identity** and enable Netlify Identity.
2. Set registration to **Invite only**.
3. Enable **Git Gateway** under Identity services.
4. Invite the PI under **Identity > Users**.
5. Confirm the site domain is `https://hooshmandlab.org`.

The PI can then open `https://hooshmandlab.org/admin`, accept the invitation, and sign in.

<<<<<<< HEAD
## Editing content

The CMS provides four collections:

- **News & Announcements**: title, date, excerpt, and optional Markdown body.
- **Research Projects**: title, description, date, order, image, and optional Markdown body.
- **Team Members**: name, role, title, specialization, email, office, order, photo, and bio.
- **Publications**: title, category, year, authors, venue, details, DOI, and order.

After saving, review the generated Git commit and wait for Netlify to deploy. Changes normally become visible after the build completes.

## Images
=======
1. Visit: `https://hooshmandlab.org/admin/` (once DNS is configured)
2. Sign in with your Netlify Identity account
3. Use the sidebar to navigate between sections.
>>>>>>> 9e4e0c33af1d893dfad1a1e84348258b99aaae3c

Use the image widget to upload files. Images are stored in `public/images/uploads/` and are referenced in content as `/images/uploads/filename.ext`. Prefer descriptive filenames and compressed JPG or PNG files.

## Troubleshooting

- **Admin does not load:** verify the domain, JavaScript, Netlify Identity, and the `/admin` redirect in `netlify.toml`.
- **Cannot save:** verify Git Gateway is enabled and the invited user is signed in.
- **Content does not change:** check the Netlify deploy log and confirm the CMS commit reached `main`.
- **Image is missing:** confirm the uploaded file exists in `public/images/uploads/` and that the content entry uses the generated path.

<<<<<<< HEAD
For DNS, Identity, Git Gateway, and deployment setup, see [`deployment-guide.md`](./deployment-guide.md).
=======
**Tip:** Use clear, descriptive titles. The image URL should point to a file in the `/public` directory.

---

### Team Members

1. Click **"Team Members"** in the sidebar
2. Each member shows name, role, and email
3. Click **"Edit"** to update:
   - **Full Name**
   - **Role** — Choose from: Faculty, Postdoctoral Fellow, Graduate Student, Undergraduate Student, Alumni, Collaborator
   - **Title** — e.g., "Assistant Professor" or "PhD Student"
   - **Email** — Institution email
   - **Office Location** — e.g., "CS 250"
   - **Specialization** — Research focus areas
   - **Photo URL** — Path to member photo
   - **Biography** — Short bio
4. Click **"Save Changes"**

**Tip:** Photos should be square or portrait-oriented. Use JPG or PNG format.

---

### News & Updates

1. Click **"News & Updates"** in the sidebar
2. Each news item shows title, date, and excerpt
3. Click **"Edit"** to modify:
   - **Title** — News headline
   - **Date** — Use the date picker
   - **Summary** — Excerpt shown in the news feed (keep to ~160 characters)
   - **Full Article** — Complete news story
4. Click **"Save Changes"**

**Tip:** Summaries are crucial — they appear in the main news list. Write them clear and compelling.

---

### Publications

1. Click **"Publications"** in the sidebar
2. Each publication shows title, year, and category
3. Click **"Edit"** to modify:
   - **Title** — Publication title
   - **Category** — Choose: Journal Paper, Invited Book Chapter, Invited Talk, Seminar, Conference Presentation
   - **Year** — Publication year
   - **Authors** — List all authors (e.g., "Smith, J., Doe, A., Brown, B.")
   - **Venue** — Journal name, conference name, etc.
   - **Additional Details** — Volume, issue, page numbers
   - **DOI** — Digital Object Identifier (if available)
4. Click **"Save Changes"**

**Tip:** DOI links publications to CrossRef and Google Scholar. Include them when available.

---

## 💾 Saving Your Changes

When you click **"Save Changes":**
1. The form validates required fields
2. A success message appears: ✓ Changes saved successfully!
3. Your changes are automatically pushed to GitHub
4. The site rebuilds and updates live within 1–2 minutes

**If you see an error:**
- Check that all required fields are filled
- Verify URLs are correct (especially image paths)
- Try again

---

## 🚪 Logging Out

Click **"Log Out"** in the sidebar. You'll be returned to the login screen.

---

## 🔒 Security Notes

Access is controlled by Netlify Identity and Git Gateway. Do not commit credentials or
personal access tokens to the repository. Manage administrators in the Netlify site
settings and remove access when someone leaves the project.

---

## 🖼️ Image Upload Tips

Images aren't uploaded directly through the admin panel. Instead:

1. **Prepare your image** on your computer
2. **Contact your IT support** or developer with the image
3. **They upload it** to `/public/images/uploads/` on the server
4. **You paste the URL** in the form: `/images/uploads/filename.jpg`

**Image guidelines:**
- **Research projects:** 900×280 px, JPG/PNG
- **Team photos:** Square (e.g., 200×200 px), JPG/PNG, with soft corners
- **Keep file sizes under 500 KB** for fast loading

---

## 📱 Using on Mobile or Tablet

The admin panel is **fully mobile-friendly**:
- **Large buttons** for easy tapping
- **Full-width forms** on small screens
- **Clear labels** and big text for accessibility

Recommended: Use on desktop for complex edits, mobile for quick updates.

---

## 🛟 Troubleshooting

### Forgot the PIN?
Contact Dr. Hooshmand or your IT support.

### Changes didn't appear on the website?
- Wait 1–2 minutes for the site to rebuild
- Refresh your browser (Ctrl+Shift+Delete to clear cache)
- Check that the date is in "YYYY-MM-DD" format if you edited dates

### Form says required field is missing?
- Title, description, and role are always required
- Fill all highlighted fields in red

### Image not showing?
- Verify the URL path is correct (starts with `/images/uploads/`)
- Make sure the image file exists on the server
- Try a different image format (JPG instead of PNG, or vice versa)

### Login page won't go away?
- Make sure you entered the **exact** PIN (case-sensitive)
- Check that JavaScript is enabled in your browser
- Try clearing browser cache and logging in again

---

## 🎓 FAQ

**Q: Can I delete a research project or team member?**  
A: Not through the admin panel yet. Contact your developer to remove content.

**Q: How do I add a new research project or team member?**  
A: The panel currently only edits existing items. Contact your developer to add new entries.

**Q: Can I upload videos?**  
A: Not directly. Videos require special hosting. Contact your IT support for video uploads.

**Q: Who can see the admin panel?**  
A: Anyone with the PIN. Keep it confidential!

---

## 📞 Support

- **Technical issues?** Contact your developer or IT support
- **Questions about content?** Refer to this guide or contact Dr. Hooshmand
- **Feature requests?** Let your developer know what would be helpful

---

**Version:** 1.0  
**Last Updated:** May 2026  
**Status:** ✓ Ready for production
>>>>>>> 9e4e0c33af1d893dfad1a1e84348258b99aaae3c
