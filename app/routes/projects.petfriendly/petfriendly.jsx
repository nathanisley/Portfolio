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
import { Image } from '~/components/image';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';

const title = 'PetFriendly — Chief of Staff';
const description =
  'Recruited by the CEO to co-run the company. Oversaw operations, managed the development team, ran the leadership team, and tripled the product offering at this pet wellness startup.';
const roles = ['Chief of Staff', 'Operations', 'Product', 'Team Leadership'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PetFriendly = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Running the Company</ProjectSectionHeading>
              <ProjectSectionText>
                As Chief of Staff at PetFriendly, I was recruited directly by the CEO
                to serve as his left hand. I oversaw day-to-day operations, managed the
                engineering team, and ran the leadership meetings that kept the company
                moving forward. When a decision needed to be made and the CEO was
                unavailable, I made the call.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tripling the Product</ProjectSectionHeading>
              <ProjectSectionText>
                I helped grow PetFriendly from a single product into a multi-product
                platform. We tripled the product offering by identifying market
                opportunities, prioritizing features based on customer feedback, and
                coordinating across engineering, design, and marketing to ship on time.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Building the Team</ProjectSectionHeading>
              <ProjectSectionText>
                Beyond product, I focused on building a healthy team culture. I ran
                hiring processes, onboarded new engineers, and created the rituals that
                helped a small startup operate with the clarity and speed of a much
                larger organization.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
