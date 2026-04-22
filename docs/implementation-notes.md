# Hooshmand Lab Implementation Notes

## Current status

The workspace now contains an initial custom WordPress theme at `hooshmand-lab-theme/`.

Implemented in this first slice:
- Theme stylesheet and shared design system
- Global header and footer
- Front page template with research, news, team, and publication sections
- Standard page template
- News archive and single-post templates
- Research Projects custom post type and archive template
- Mobile navigation behavior

## Recommended local setup

1. Create or open a local WordPress install using your preferred stack.
2. Copy the `hooshmand-lab-theme/` folder into `wp-content/themes/`.
3. Activate the `Hooshmand Lab` theme from the WordPress dashboard.
4. In `Settings > Reading`, set a static homepage once a Home page exists.
5. Create these pages if they do not already exist:
   - Home
   - Publications
   - Team
   - Contact
6. Use standard Posts for News updates.
7. Use the `Research Projects` post type for lab research summaries and project updates.
8. Assign menus to the `Primary Menu` and `Footer Menu` theme locations.

## Next implementation targets

1. Add dedicated templates for Team, Publications, and Contact.
2. Add optional homepage settings so the hero copy and institutional details can be edited in admin.
3. Improve archive pagination and empty states.
4. Add sample content import guidance or starter content.
5. Prepare deployment notes for DreamHost recovery or alternate hosting.

## Important constraint

This theme is WordPress-compatible, but the workspace does not yet include a full WordPress runtime. To preview it in a browser, it needs to be placed inside a working local WordPress installation.