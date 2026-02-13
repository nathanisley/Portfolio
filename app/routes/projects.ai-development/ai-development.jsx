import grabblLarge from '~/assets/grabbl-large.png';
import grabblPlaceholder from '~/assets/grabbl-placeholder.png';
import grabbl from '~/assets/grabbl.png';
import portfolioSiteLarge from '~/assets/portfolio-site-large.png';
import portfolioSitePlaceholder from '~/assets/portfolio-site-placeholder.png';
import portfolioSite from '~/assets/portfolio-site.png';
import starkweatherLarge from '~/assets/starkweather-large.png';
import starkweatherPlaceholder from '~/assets/starkweather-placeholder.png';
import starkweather from '~/assets/starkweather.png';
import weathermatLarge from '~/assets/weathermat-large.png';
import weathermatPlaceholder from '~/assets/weathermat-placeholder.png';
import weathermat from '~/assets/weathermat.png';
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
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>StarkWeather</ProjectSectionHeading>
                  <ProjectSectionText>
                    A weather app built for people who actually care about the forecast.
                    StarkWeather surfaces precipitation predictions, accuracy feedback,
                    and a Weather Sense timeline — designed to cut through the noise of
                    bloated weather apps. Built with AI from first commit to App Store.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${starkweather} 640w, ${starkweatherLarge} 1320w`}
                  width={640}
                  height={1390}
                  placeholder={starkweatherPlaceholder}
                  alt="StarkWeather app showing current conditions, precipitation forecast, and Weather Sense timeline"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns}>
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>Grabbl</ProjectSectionHeading>
                  <ProjectSectionText>
                    A gravel road discovery tool for cyclists and adventurers. Grabbl
                    maps unpaved roads so riders can find new routes, avoid surprises,
                    and explore confidently. Features a &ldquo;Discover Roads&rdquo;
                    mode that highlights gravel surfaces across an interactive map.
                    Designed, built, and shipped with AI.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${grabbl} 640w, ${grabblLarge} 1206w`}
                  width={640}
                  height={1390}
                  placeholder={grabblPlaceholder}
                  alt="Grabbl app showing a map of gravel roads highlighted around Fort Collins, Colorado"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light className={styles.compactSection}>
          <ProjectSectionContent>
            <div className={styles.columns} data-alternate="true">
              <div className={styles.textColumn}>
                <ProjectTextRow noMargin>
                  <ProjectSectionHeading>WeatherMat</ProjectSectionHeading>
                  <ProjectSectionText>
                    A resource platform for people experiencing homelessness. WeatherMat
                    connects users to food assistance, healthcare, housing help, and ID
                    services — all accessible offline and without an account. Built with
                    a map, parking resources, and a benefits navigator designed to work
                    when you have no fixed address.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${weathermat} 640w, ${weathermatLarge} 1320w`}
                  width={640}
                  height={1390}
                  placeholder={weathermatPlaceholder}
                  alt="WeatherMat benefits navigator showing food assistance, healthcare, ID, and housing help resources"
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
