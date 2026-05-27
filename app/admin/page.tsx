import { Suspense } from 'react';
import { getResearchPosts, getTeamMembers, getNewsItems, getPublications } from '../../lib/content';
import AdminPageClient from '../components/AdminPageClient';

export const metadata = {
  title: 'Admin Panel | Dr. Hooshmand\'s Research Lab',
  description: 'Content management system for lab updates.',
};

export default function AdminPage() {
  const research = getResearchPosts();
  const team = getTeamMembers();
  const news = getNewsItems();
  const publications = getPublications();

  return <AdminPageClient research={research} team={team} news={news} publications={publications} />;
}
