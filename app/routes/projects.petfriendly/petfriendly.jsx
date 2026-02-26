import petFriendlyVideo from '~/assets/petfriendly.mp4';
import petFriendlyPlaceholder from '~/assets/petfriendly-placeholder.jpg';
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
import styles from './petfriendly.module.css';

const title = 'PetFriendly — Chief of Staff';
const description =
  'Recruited by the CEO to co-run the company. Oversaw operations, managed the development team, ran the leadership team, and tripled the product offering at this pet wellness startup.';
const roles = ['Chief of Staff', 'Operations', 'Product', 'Team Leadership'];

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

export const PetFriendly = () => {
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
                  <ProjectSectionHeading>Running the Company</ProjectSectionHeading>
                  <ProjectSectionText>
                    As Chief of Staff at PetFriendly, I was recruited directly by the CEO
                    to serve as his left hand. I oversaw day-to-day operations, managed the
                    engineering team, and ran the leadership meetings that kept the company
                    moving forward. When a decision needed to be made and the CEO was
                    unavailable, I made the call.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={petFriendlyPlaceholder}
                  className={styles.video}
                >
                  <source src={petFriendlyVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Tripling the Product</ProjectSectionHeading>
                  <ProjectSectionText>
                    I helped grow PetFriendly from a single product into a multi-product
                    platform. We tripled the product offering by identifying market
                    opportunities, prioritizing features based on customer feedback, and
                    coordinating across engineering, design, and marketing to ship on time.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with product screenshots or roadmap image */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Building the Team</ProjectSectionHeading>
                  <ProjectSectionText>
                    Beyond product, I focused on building a healthy team culture. I ran
                    hiring processes, onboarded new engineers, and created the rituals that
                    helped a small startup operate with the clarity and speed of a much
                    larger organization.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              {/* Replace with team photo or culture image */}
              <PlaceholderImage />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
