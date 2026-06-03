import PublicationsPageContent from './PublicationsPageContent';
import { getPublications } from '../../lib/content';

export const metadata = {
  title: "Publications | Dr. Hooshmand's Research Lab",
  description: "Peer-reviewed publications and academic contributions from Dr. Hooshmand's research lab.",
};

export default function PublicationsPage() {
  const publications = getPublications();
  return <PublicationsPageContent publications={publications} />;
}
