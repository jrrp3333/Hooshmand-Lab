# Content Editor Guide: Managing the Lab Website

Welcome! This guide explains how to update the lab website without any coding knowledge.

---

## Logging in

1. Open your browser and go to **`https://hooshmandlabs.org/admin`**
2. Click **"Login with Netlify Identity"**
3. Enter the email address and password you were given
4. You are now in the content editor dashboard

> **Tip:** Bookmark `https://hooshmandlabs.org/admin` for quick access.

---

## Understanding the sidebar

After logging in, you'll see a left-hand sidebar with four sections:

| Section | What it controls |
|---|---|
| **News & Announcements** | News items that appear on the homepage and News page |
| **Research Projects** | Research project cards on the homepage and Research page |
| **Team Members** | Lab member profiles on the Team page |
| **Publications** | Academic publications on the Publications page |

Click any section to see a list of existing entries, or click **"New [item]"** to add one.

---

## Adding a News Announcement

1. Click **"News & Announcements"** in the sidebar
2. Click the **"New News Item"** button (top right)
3. Fill in the fields:
   - **Title** – the headline (e.g., *"Lab Receives NSF Grant"*)
   - **Date** – when the announcement happened
   - **Short Excerpt** – 1–2 sentences for the homepage preview card
   - **Full Content** – (optional) the complete announcement text
4. Click **"Publish"** when ready

> The three most recent news items appear automatically on the homepage.

---

## Editing an Existing News Item

1. Click **"News & Announcements"** in the sidebar
2. Click the title of the item you want to edit
3. Make your changes
4. Click **"Publish"** to save

---

## Adding a Research Project

1. Click **"Research Projects"** in the sidebar
2. Click **"New Research Project"**
3. Fill in the fields:
   - **Title** – name of the project
   - **Short Description** – 1–2 sentences shown on the homepage and research list
   - **Date** – when the project was added or last updated
   - **Display Order** – a number like `1`, `2`, `3` to control the order (lower = appears first); leave blank to sort by date
   - **Full Description** – (optional) a longer explanation
   - **Project Image** – (optional) an image for this research area
4. Click **"Publish"**

> The first three research projects (by display order) appear on the homepage.

---

## Editing a Research Project

1. Click **"Research Projects"** in the sidebar
2. Click the project you want to update
3. Make your changes
4. Click **"Publish"**

---

## Adding a Team Member

1. Click **"Team Members"** in the sidebar
2. Click **"New Team Member"**
3. Fill in the fields:
   - **Full Name** – e.g., *Dr. Nadia Hooshmand*
   - **Role** – choose from the dropdown (Faculty, Graduate Student, etc.)
   - **Title / Position** – e.g., *Professor and Lab Director*
   - **Specialization** – (optional) research focus area
   - **Email** – (optional) institutional email address
   - **Office** – (optional) building and room number
   - **Display Order** – set to `1` for Dr. Hooshmand; use `2`, `3`, etc. for other members
   - **Bio** – (optional) a short paragraph about the person
   - **Photo** – (optional) upload a headshot
4. Click **"Publish"**

---

## Editing a Team Member

1. Click **"Team Members"** in the sidebar
2. Click the member's name
3. Make your changes
4. Click **"Publish"**

---

## After you publish: what happens next?

When you click **"Publish"**, Decap CMS:
1. Saves your changes to the GitHub repository
2. Triggers an automatic site rebuild on Netlify (usually takes 1–2 minutes)
3. Your changes go live at `https://hooshmandlabs.org`

You do **not** need to do anything else — the site updates itself automatically.

---

## Tips

- **Don't see your changes right away?** Wait 1–2 minutes and refresh the page. The site is rebuilding.
- **Drafts:** If you want to save work-in-progress without publishing, use the **"Save"** button instead of "Publish". The entry is saved but won't appear on the live site until you publish it.
- **Deleting entries:** Open the entry, click the **"Delete"** button (usually in the top bar or settings panel). Deletions also trigger a site rebuild.
- **Images:** Use JPEG or PNG files under 2 MB for best results.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Can't log in | Make sure you're using the correct email. Contact the developer to reset your password. |
| Changes don't appear after 5 minutes | Check Netlify for a failed build (contact developer). |
| Page looks broken after editing | Open the entry again and re-publish it without changes. |
| Can't find an entry | Use the search icon at the top of the collection list. |

---

**Last updated:** May 2026  
**CMS:** Decap CMS (Git-based, hosted on Netlify)

