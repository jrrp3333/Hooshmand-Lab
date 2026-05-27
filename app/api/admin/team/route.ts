import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function createMarkdown(data: any): string {
  const frontmatter = {
    name: data.name,
    role: data.role,
    title: data.title,
    specialization: data.specialization,
    email: data.email,
    office: data.office,
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
    const { oldSlug, member } = await request.json();

    // Validate
    if (!member.name || !member.role) {
      return NextResponse.json({ error: 'Name and role are required' }, { status: 400 });
    }

    const contentDir = path.join(process.cwd(), 'content', 'team');

    // Delete old file if slug changed
    if (oldSlug && oldSlug !== generateSlug(member.name)) {
      const oldPath = path.join(contentDir, `${oldSlug}.md`);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    // Write new file
    const newSlug = generateSlug(member.name);
    const filePath = path.join(contentDir, `${newSlug}.md`);
    const markdown = createMarkdown(member);

    fs.writeFileSync(filePath, markdown, 'utf-8');

    return NextResponse.json({ success: true, slug: newSlug });
  } catch (error) {
    console.error('Error saving team member:', error);
    return NextResponse.json({ error: 'Failed to save team member' }, { status: 500 });
  }
}
