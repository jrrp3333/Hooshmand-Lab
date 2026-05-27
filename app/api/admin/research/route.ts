import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function createMarkdown(data: any): string {
  const frontmatter = {
    title: data.title,
    description: data.description,
    date: data.date || new Date().toISOString().split('T')[0],
    order: data.order || 1,
    image: data.image,
  };

  const fm = Object.entries(frontmatter)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}: "${v}"`)
    .join('\n');

  return `---\n${fm}\n---\n\n${data.body || ''}`;
}

export async function PUT(request: NextRequest) {
  try {
    const { oldSlug, project } = await request.json();

    // Validate
    if (!project.title || !project.description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const contentDir = path.join(process.cwd(), 'content', 'research');

    // Delete old file if slug changed
    if (oldSlug && oldSlug !== generateSlug(project.title)) {
      const oldPath = path.join(contentDir, `${oldSlug}.md`);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    // Write new file
    const newSlug = generateSlug(project.title);
    const filePath = path.join(contentDir, `${newSlug}.md`);
    const markdown = createMarkdown(project);

    fs.writeFileSync(filePath, markdown, 'utf-8');

    return NextResponse.json({ success: true, slug: newSlug });
  } catch (error) {
    console.error('Error saving research:', error);
    return NextResponse.json({ error: 'Failed to save research project' }, { status: 500 });
  }
}
