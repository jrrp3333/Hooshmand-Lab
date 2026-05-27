import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function generateSlug(year: number, title: string): string {
  const titleSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${year}-${titleSlug}`.substring(0, 100);
}

function createMarkdown(data: any): string {
  const frontmatter = {
    title: data.title,
    authors: data.authors,
    year: data.year,
    category: data.category,
    venue: data.venue,
    details: data.details,
    doi: data.doi,
  };

  const fm = Object.entries(frontmatter)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}: "${v}"`)
    .join('\n');

  return `---\n${fm}\n---\n`;
}

export async function PUT(request: NextRequest) {
  try {
    const { oldSlug, publication } = await request.json();

    // Validate
    if (!publication.title || !publication.year || !publication.category) {
      return NextResponse.json(
        { error: 'Title, year, and category are required' },
        { status: 400 }
      );
    }

    const contentDir = path.join(process.cwd(), 'content', 'publications');

    // Delete old file if slug changed
    const newSlug = generateSlug(publication.year, publication.title);
    if (oldSlug && oldSlug !== newSlug) {
      const oldPath = path.join(contentDir, `${oldSlug}.md`);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    // Write new file
    const filePath = path.join(contentDir, `${newSlug}.md`);
    const markdown = createMarkdown(publication);

    fs.writeFileSync(filePath, markdown, 'utf-8');

    return NextResponse.json({ success: true, slug: newSlug });
  } catch (error) {
    console.error('Error saving publication:', error);
    return NextResponse.json({ error: 'Failed to save publication' }, { status: 500 });
  }
}
