# Content Migration Guide

This guide helps you extract content from the existing Hooshmand Lab site (https://hooshmandlab.dreamhosters.com/) and structure it for the new WordPress theme.

## Current site structure

The existing site has these main sections:
- **Home:** Lab overview and introduction
- **Publications:** List of publications (likely hardcoded or from a plugin)
- **News:** News/updates (likely WordPress posts)
- **Team:** Lab team members
- **Research:** Research areas and projects
- **Contact:** Contact information
- **Gallery:** Photos (if present)

## Migration mapping

### 1. Research Projects → Research Projects custom post type

**What to do:**
- For each research area or project summary on the current site, create a new Research Project in WordPress
- Title: Research project name
- Excerpt: One-sentence description (required for homepage display)
- Content: Detailed description, methods, goals, or outcomes
- Featured Image: Add a relevant image if available

**Example content structure:**
```
Title: Cellular Signaling in Disease Pathways
Excerpt: Investigating molecular mechanisms of cell-to-cell communication in disease models.
Content: [Full project description, team members, funding, timeline, etc.]
Featured Image: [Project photo or diagram]
```

### 2. News items → WordPress Posts

**What to do:**
- For each news item, conference announcement, publication alert, etc., create a new Post
- Title: News headline
- Excerpt: One-line summary (required for homepage display)
- Content: Full announcement or update
- Featured Image: Add an image if relevant
- Date: Set the post date to when the news occurred (e.g., conference date)

**Example content structure:**
```
Title: Dr. Hooshmand presents at AAAS Annual Meeting
Excerpt: New findings on cellular mechanisms presented to the scientific community.
Content: [Full announcement, abstract details, link to slides, etc.]
Featured Image: [Photo from the event]
Date: [Event date]
```

### 3. Team members → Team page

**What to do:**
- Create or edit the "Team" page
- Add a list of team members with names, titles, and contact info
- Optionally include a table, or format as individual card descriptions
- Add featured image for the page header if desired

**Suggested Team page format:**
```
## Dr. Nasrin Hooshmand
Professor, Laboratory Director
Specialization: [Field]
Email: [email]
Office: [Location]

## [Graduate Student Name]
PhD Student / Lab Manager
Research Focus: [Area]
Email: [email]

... and so on
```

Alternatively, if team member management becomes frequent, a future update can create a custom Team post type with individual team member cards.

### 4. Publications → Publications page

**What to do:**
- Create or edit the "Publications" page
- Add a curated list of publications formatted consistently
- Include: authors, publication title, journal, publication year, DOI or URL

**Suggested format:**
```
## 2024
Hooshmand, N., et al. (2024). "Title of Publication." *Journal Name*, 45(3), 123-145. https://doi.org/...

## 2023
Smith, J., Hooshmand, N., et al. (2023). "Another publication." *Different Journal*, 38(2), 67-89. https://doi.org/...

... and so on
```

Or create as a numbered or bulleted list:
```
1. Hooshmand, N., & colleagues (2024). "Research Finding." *Nature Science*, vol. 45. doi: ...
2. Smith, J., Hooshmand, N., et al. (2023). "Study Title." *Journal*, vol. 38. doi: ...
```

### 5. Contact information → Contact page + page-contact.php

**What to do:**
- Create or edit the "Contact" page with a description, inquiry instructions, or contact form
- Update contact details in the Contact page template (`page-contact.php`):
  - Lab name, center affiliation, university
  - Address
  - Email
  - Phone (optional)

**Current placeholder in page-contact.php:**
```
Center for Sciences
Texas A&M University-Corpus Christi
Corpus Christi, TX 78412
lab@hooshmandlab.org
```

Update these to match the actual lab contact info.

### 6. Gallery (if applicable)

**What to do:**
- If the gallery is important, add images to the Home page or Research pages as featured images
- Optionally, create a Gallery page using WordPress gallery blocks
- Or fold gallery content into individual Research project pages

For now, gallery is not a separate top-level page in the new theme. If the professor wants a dedicated gallery later, it can be added as an additional page template.

## Step-by-step migration workflow

### Phase 1: Content audit (offline)
1. Visit the existing site and take screenshots of each page
2. Copy/paste text content into a text file or spreadsheet
3. Note any images, links, or external resources
4. Organize the content into categories:
   - Research Projects
   - News/Updates
   - Team Members
   - Publications
   - Contact Info
   - Gallery (if applicable)

### Phase 2: WordPress setup (online)
1. Install the new WordPress instance
2. Activate the Hooshmand Lab theme
3. Create the required pages:
   - Home
   - Research
   - Publications
   - Team
   - News (will be auto-populated by posts)
   - Contact
4. Assign templates and menus

### Phase 3: Content creation
1. **Add Research Projects** (WordPress admin → Research Projects > Add New)
   - Recreate each research project/area as a post
   - Add excerpts and featured images
   - Set publication dates if needed

2. **Add News Posts** (WordPress admin → Posts > Add New)
   - Recreate each news item as a post
   - Add excerpts and featured images
   - Backdate posts to their original date if known

3. **Update static pages**
   - Edit Team page with team member list
   - Edit Publications page with publication list
   - Edit Contact page with inquiries/form or additional info
   - Edit Research page with intro/description (if desired)

4. **Update menus** (WordPress admin → Appearance > Menus)
   - Assign primary navigation menu with links to all top-level pages

### Phase 4: Verification
- Preview each page on desktop and mobile
- Test adding a new News post and Research project to verify workflow
- Check all links work
- Verify homepage displays research/news correctly

## Content formatting best practices

### Research Projects
- Keep excerpts to 1–2 sentences
- Include full project description in the content area
- Add a featured image (lab photo, diagram, or thumbnail)
- Use clear headings in the content (H2, H3) for readability

### News Posts
- Write a compelling headline (title)
- Excerpt should entice the reader (1 line)
- Add rich formatting: paragraphs, bullet points, links
- Include date context (e.g., "April 2024")
- Add featured image for visual interest

### Publications
- Use consistent formatting (authors, title, journal, year, DOI)
- Include links to PubMed, arXiv, ResearchGate, or DOI when available
- Sort by year (most recent first) or by importance

### Team
- Include name, title, specialization
- Add email and office location if available
- Keep descriptions concise (2–3 sentences)

---

**Migration status:** Ready to begin  
**Theme version:** 0.1.0  
**Last updated:** April 21, 2026
