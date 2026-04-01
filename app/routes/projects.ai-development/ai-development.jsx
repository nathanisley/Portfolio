import grabblLarge from '~/assets/grabbl-large.png';
import grabblPlaceholder from '~/assets/grabbl-placeholder.png';
import grabbl from '~/assets/grabbl.png';
import portfolioSiteLarge from '~/assets/portfolio-site-large.png';
import portfolioSitePlaceholder from '~/assets/portfolio-site-placeholder.png';
import portfolioSite from '~/assets/portfolio-site.png';
import starkweatherLarge from '~/assets/starkweather-large.png';
import starkweatherPlaceholder from '~/assets/starkweather-placeholder.png';
import starkweather from '~/assets/starkweather.png';
import sleepmatLarge from '~/assets/sleepmat-large.png';
import sleepmatPlaceholder from '~/assets/sleepmat-placeholder.png';
import sleepmat from '~/assets/sleepmat.png';
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
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './ai-development.module.css';

const title = 'AI-Powered Product Development';
const description =
  'Four products designed and shipped with AI as my engineering partner. From concept to launch, each one solving a real problem for real people.';
const roles = ['Product', 'AI Development', 'Design', 'Builder'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AiDevelopment = () => {
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
                  <ProjectSectionHeading>nathank.build</ProjectSectionHeading>
                  <ProjectSectionText>
                    The site you&apos;re on right now. Built with Remix, Three.js, custom
                    GLSL shaders, and deployed to Cloudflare, all using Claude Code as
                    my engineering co-pilot. Product thinking applied to personal branding:
                    responsive design, animated transitions, dark/light themes, and
                    performance-first architecture.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrapLandscape}>
                <Image
                  srcSet={`${portfolioSite} 1280w, ${portfolioSiteLarge} 2560w`}
                  width={1280}
                  height={862}
                  placeholder={portfolioSitePlaceholder}
                  alt="nathank.build portfolio site showing the hero section with Leader + Chief of Staff headline"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        {/* StarkWeather, Grabbl, and SleepMat sections hidden until launch */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
