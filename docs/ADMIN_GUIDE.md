# Admin CMS Panel — Setup & User Guide

## Overview

The admin panel lets Dr. Hooshmand update all lab content (Research, Team, News, Publications) **without touching any code**. It's accessible at `/admin` and uses a simple PIN-based login.

---

## 🔐 Accessing the Admin Panel

1. Visit: `https://hooshmandlab.org/admin` (once DNS is configured)
2. Enter the PIN when prompted
3. You're in! Use the sidebar to navigate between sections.

### Default PIN

**Currently set to: `1234`**

⚠️ **IMPORTANT:** Change this PIN immediately for security. See "Changing the PIN" below.

---

## 📝 Editing Content

### Research Projects

1. Click **"Research Projects"** in the sidebar
2. Each project appears as a card showing its title and description
3. Click **"Edit"** to modify:
   - **Project Title** — Main heading
   - **Short Description** — Brief overview (appears in lists)
   - **Image URL** — Path to project image (e.g., `/images/uploads/np-solar.png`)
   - **Full Description** — Detailed research information
4. Click **"Save Changes"** when done

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

### Changing the PIN

The default PIN (1234) is for testing. **Change it before launch:**

1. Edit `app/components/AdminAuthGate.tsx`
2. Find this line:
   ```typescript
   const CORRECT_PIN = '1234';
   ```
3. Change to your chosen PIN:
   ```typescript
   const CORRECT_PIN = '5892';  // Use a 4-6 digit PIN
   ```
4. Save and commit to GitHub (Netlify will rebuild)

### Best Practices

- Use a PIN that's easy for you to remember but hard to guess
- Don't share the PIN in emails—share verbally or use a secure method
- The PIN is stored **only** in code (not in a database), so it's secure
- Consider updating the PIN yearly

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
