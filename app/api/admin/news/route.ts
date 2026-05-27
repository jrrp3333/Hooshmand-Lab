import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function generateSlug(title: string, date: string): string {
  const dateStr = date ? date.split('T')[0] : new Date().toISOString().split('T')[0];
  const titleSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return `${dateStr}-${titleSlug}`.substring(0, 100);
}

function createMarkdown(data: any): string {
  const frontmatter = {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
  };

  const fm = Object.entries(frontmatter)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}: "${v}"`)
    .join('\n');

  return `---\n${fm}\n---\n\n${data.body || ''}`;
}

export async function PUT(request: NextRequest) {
  try {
    const { oldSlug, item } = await request.json();

    // Validate
    if (!item.title || !item.date || !item.excerpt) {
      return NextResponse.json(
        { error: 'Title, date, and excerpt are required' },
        { status: 400 }
      );
    }

    const contentDir = path.join(process.cwd(), 'content', 'news');

    // Delete old file if slug changed
    const newSlug = generateSlug(item.title, item.date);
    if (oldSlug && oldSlug !== newSlug) {
      const oldPath = path.join(contentDir, `${oldSlug}.md`);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    // Write new file
    const filePath = path.join(contentDir, `${newSlug}.md`);
    const markdown = createMarkdown(item);

    fs.writeFileSync(filePath, markdown, 'utf-8');

    return NextResponse.json({ success: true, slug: newSlug });
  } catch (error) {
    console.error('Error saving news item:', error);
    return NextResponse.json({ error: 'Failed to save news item' }, { status: 500 });
  }
}
