# Admin CMS Guide

The site uses Decap CMS at `/admin`. It edits the Markdown files in `content/` and commits changes to GitHub through Netlify Git Gateway. There is no application PIN and no custom admin API.

## One-time Netlify setup

1. In Netlify, open **Site configuration > Identity** and enable Netlify Identity.
2. Set registration to **Invite only**.
3. Enable **Git Gateway** under Identity services.
4. Invite the PI under **Identity > Users**.
5. Confirm the site domain is `https://hooshmandlab.org`.

The PI can then open `https://hooshmandlab.org/admin`, accept the invitation, and sign in.

## Editing content

The CMS provides four collections:

- **News & Announcements**: title, date, excerpt, and optional Markdown body.
- **Research Projects**: title, description, date, order, image, and optional Markdown body.
- **Team Members**: name, role, title, specialization, email, office, order, photo, and bio.
- **Publications**: title, category, year, authors, venue, details, DOI, and order.

After saving, review the generated Git commit and wait for Netlify to deploy. Changes normally become visible after the build completes.

## Images

Use the image widget to upload files. Images are stored in `public/images/uploads/` and are referenced in content as `/images/uploads/filename.ext`. Prefer descriptive filenames and compressed JPG or PNG files.

## Troubleshooting

- **Admin does not load:** verify the domain, JavaScript, Netlify Identity, and the `/admin` redirect in `netlify.toml`.
- **Cannot save:** verify Git Gateway is enabled and the invited user is signed in.
- **Content does not change:** check the Netlify deploy log and confirm the CMS commit reached `main`.
- **Image is missing:** confirm the uploaded file exists in `public/images/uploads/` and that the content entry uses the generated path.

For DNS, Identity, Git Gateway, and deployment setup, see [`deployment-guide.md`](./deployment-guide.md).
