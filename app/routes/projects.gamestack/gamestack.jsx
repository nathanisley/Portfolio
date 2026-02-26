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
import styles from './gamestack.module.css';

const title = 'Flywheel — Product Leadership';
const description =
  "Led the delivery team for Flywheel's second-ever product offering. Drove the customer-led roadmap with user research, go-to-market strategy, and cross-functional collaboration across engineering, design, and marketing.";
const roles = ['Product Management', 'User Research', 'Go-to-Market', 'Cross-Functional Leadership'];

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

export const Gamestack = () => {
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
                  <ProjectSectionHeading>Leading Local Pro</ProjectSectionHeading>
                  <ProjectSectionText>
                    Flywheel needed a second product. I led the delivery team for Local Pro,
                    taking it from customer discovery through launch. We ran user interviews,
                    mapped pain points, and built a roadmap grounded in real feedback rather
                    than assumptions.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with Local Pro product screenshot or demo */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Customer-Led Roadmap</ProjectSectionHeading>
                  <ProjectSectionText>
                    Every feature decision started with the customer. I ran research sessions,
                    synthesized feedback into themes, and worked with engineering and design
                    to prioritize what mattered most. The result was a product that solved
                    real problems for web developers managing local WordPress environments.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with user research artifacts or roadmap visual */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Go-to-Market</ProjectSectionHeading>
                  <ProjectSectionText>
                    Shipping code is half the job. I coordinated the go-to-market strategy
                    across marketing, sales, and support, making sure the launch landed with
                    customers and internal teams were ready to back it up.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with launch metrics, marketing collateral, or team photo */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
