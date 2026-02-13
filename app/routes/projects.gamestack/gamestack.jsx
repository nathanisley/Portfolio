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

const title = 'Flywheel — Product Leadership';
const description =
  "Led the delivery team for Flywheel's second-ever product offering. Drove the customer-led roadmap with user research, go-to-market strategy, and cross-functional collaboration across engineering, design, and marketing.";
const roles = ['Product Management', 'User Research', 'Go-to-Market', 'Cross-Functional Leadership'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Gamestack = () => {
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
              <ProjectSectionHeading>Leading Local Pro</ProjectSectionHeading>
              <ProjectSectionText>
                Flywheel needed a second product. I led the delivery team for Local Pro,
                taking it from customer discovery through launch. We ran user interviews,
                mapped pain points, and built a roadmap grounded in real feedback rather
                than assumptions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Customer-Led Roadmap</ProjectSectionHeading>
              <ProjectSectionText>
                Every feature decision started with the customer. I ran research sessions,
                synthesized feedback into themes, and worked with engineering and design
                to prioritize what mattered most. The result was a product that solved
                real problems for web developers managing local WordPress environments.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Go-to-Market</ProjectSectionHeading>
              <ProjectSectionText>
                Shipping code is half the job. I coordinated the go-to-market strategy
                across marketing, sales, and support, making sure the launch landed with
                customers and internal teams were ready to back it up.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
