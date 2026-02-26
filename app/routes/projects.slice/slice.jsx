import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Scaling Agile — 20 to 80+ Builders';
const description =
  'As Agile Coach at Flywheel/WP Engine, I scaled the Scrum organization fourfold. Certified by Jeff Sutherland and Mike Cohn, I trained thousands of clients across four countries on Agile, Scrum, Kanban, and release planning.';
const roles = ['Agile Coach', 'Scrum Master', 'Training', 'Organizational Scaling'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

function PlaceholderImage() {
  return (
    <div className={styles.placeholder}>
      <svg
        className={styles.placeholderIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top" className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Scaling the Organization</ProjectSectionHeading>
                  <ProjectSectionText>
                    When I joined Flywheel as Agile Coach, the engineering team was around
                    20 people running a handful of Scrum teams. Over the next several years,
                    I helped scale the organization to 80+ builders while keeping the culture
                    collaborative and the delivery cadence tight. That meant evolving
                    team structures, introducing cross-team coordination rituals, and
                    coaching leaders through the growing pains that come with rapid growth.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with team growth visual, org chart, or team photo */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Coaching & Frameworks</ProjectSectionHeading>
                  <ProjectSectionText>
                    I worked across Scrum, Kanban, and SAFe depending on what each team
                    needed. Some teams thrived with strict two-week sprints. Others needed
                    the flexibility of Kanban flow. At the portfolio level, I helped
                    leadership adopt release planning and PI planning practices that
                    gave the whole organization visibility into what was coming and when.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with sprint board, planning session, or framework diagram */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Training Across Borders</ProjectSectionHeading>
                  <ProjectSectionText>
                    Beyond internal coaching, I trained thousands of clients across four
                    countries on Agile, Scrum, Kanban, and release planning. These were
                    hands-on workshops designed to give teams practical tools they could
                    apply immediately. Whether it was a startup trying Scrum for the first
                    time or an enterprise scaling across departments, the goal was always
                    the same: help people ship better work together.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with training session photo or workshop image */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Certification & Growth</ProjectSectionHeading>
                  <ProjectSectionText>
                    Certified by Jeff Sutherland (co-creator of Scrum) and Mike Cohn
                    (one of the founders of the Scrum Alliance), I brought credibility
                    and depth to every engagement. But the certifications were just a
                    starting point. The real education came from years of coaching teams
                    through the messy reality of building software at scale.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with certification badges, conference photo, or speaking image */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
