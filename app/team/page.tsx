import { getTeamMembers } from '../../lib/content';
import Image from 'next/image';

export const metadata = {
  title: "Team | Dr. Hooshmand's Research Lab",
  description: "Faculty, students, and collaborators in Dr. Hooshmand's research lab.",
};

const ROLE_ORDER = ['Faculty', 'Postdoctoral Fellow', 'Graduate Student', 'Undergraduate Student', 'Collaborator'];

export default function TeamPage() {
  const members = getTeamMembers();
  const grouped = ROLE_ORDER.reduce((acc, role) => {
    const group = members.filter((m) => m.role === role);
    if (group.length) acc[role] = group;
    return acc;
  }, {} as Record<string, ReturnType<typeof getTeamMembers>>);

  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card page-hero__panel">
            <span className="eyebrow">Team</span>
            <h1>Lab Team</h1>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="section-inner">
          <article className="surface-card page-hero__panel">
            <div className="entry-content">
              {Object.entries(grouped).map(([role, group]) => (
                <section key={role}>
                  <h2>{role === 'Faculty' ? 'Faculty' : role + 's'}</h2>
                  {group.map((member) => (
                    <div key={member.slug} className="member-card">
                      {member.image && (
                        <div className="member-card__photo">
                          <Image
                            src={member.image}
                            alt={`Photo of ${member.name}`}
                            width={140}
                            height={140}
                            className="member-photo"
                          />
                        </div>
                      )}
                      <div className="member-card__body">
                        <h3>{member.name}</h3>
                        <p>
                          {member.title && <><strong>{member.title}</strong><br /></>}
                          {member.specialization && <><em>{member.specialization}</em><br /></>}
                          {member.email && <><a href={`mailto:${member.email}`}>{member.email}</a><br /></>}
                          {member.office && <>Office: {member.office}<br /></>}
                        </p>
                        {member.body && <p style={{ marginTop: '8px' }}>{member.body}</p>}
                      </div>
                    </div>
                  ))}
                </section>
              ))}

              {members.length === 0 && <p>Team information coming soon.</p>}

              <h2>How to Join</h2>
              <p>
                Interested in joining Dr. Hooshmand&apos;s research lab? We welcome inquiries from graduate students,
                undergraduate researchers, and potential postdoctoral fellows. Please send a brief email to
                Dr. Hooshmand at <a href="mailto:nasrin.hooshmand@tamucc.edu">nasrin.hooshmand@tamucc.edu</a> with
                your CV and research interests.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
