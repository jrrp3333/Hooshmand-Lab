import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface ResearchPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  order?: number;
  image?: string;
  body: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  title: string;
  specialization?: string;
  email?: string;
  office?: string;
  order?: number;
  image?: string;
  body: string;
}

function getCollection<T>(collection: string): T[] {
  const dir = path.join(contentDir, collection);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data, content } = matter(raw);
    return { ...data, body: content.trim(), slug: file.replace(/\.md$/, '') } as T;
  });
}

export function getResearchPosts(): ResearchPost[] {
  return getCollection<ResearchPost>('research').sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getNewsItems(): NewsItem[] {
  return getCollection<NewsItem>('news').sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getTeamMembers(): TeamMember[] {
  return getCollection<TeamMember>('team').sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}
