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
import { Link } from '~/components/link';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import communityBikeLarge from '~/assets/community-bike-large.jpg';
import communityBikePlaceholder from '~/assets/community-bike-placeholder.jpg';
import communityBike from '~/assets/community-bike.jpg';
import teammatesLarge from '~/assets/teammates-large.png';
import teammatesPlaceholder from '~/assets/teammates-placeholder.png';
import teammates from '~/assets/teammates.png';
import projHomelessLarge from '~/assets/proj-homeless-large.jpg';
import projHomelessPlaceholder from '~/assets/proj-homeless-placeholder.jpg';
import projHomeless from '~/assets/proj-homeless.jpg';
import teamServiceLarge from '~/assets/team-service-large.jpg';
import teamServicePlaceholder from '~/assets/team-service-placeholder.jpg';
import teamService from '~/assets/team-service.jpg';
import flywheelGivesLarge from '~/assets/flywheel-gives-large.jpg';
import flywheelGivesPlaceholder from '~/assets/flywheel-gives-placeholder.jpg';
import flywheelGives from '~/assets/flywheel-gives.jpg';
import styles from './giving-back.module.css';

const title = 'Giving Back';
const description =
  'Community work, mentorship, and contributions beyond the day job.';
const roles = ['Board Leadership', 'Mentorship', 'Community', 'Volunteering'];

export const meta = () => {
  return baseMeta({ title, description, prefix: '' });
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

export const GivingBack = () => {
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
                  <ProjectSectionHeading>
                    <Link href="https://www.communitybikeproject.org">
                      Community Bike Project
                    </Link>
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Vice President, Board of Directors &middot; Omaha, NE &middot; 2019–2022
                  </ProjectSectionText>
                  <ProjectSectionText>
                    VP of the board for a nonprofit that gives Omahans in need
                    a bike to own, a shop to wrench in, and the skills to keep
                    it rolling. The org runs earn-a-bike workshops, repair
                    classes, community rides, art fundraisers, and dinners.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Helped keep the shop open through COVID with half the
                    staff, and wrote grants to keep the lights on during the
                    hardest stretch the org had faced.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${communityBike} 640w, ${communityBikeLarge} 2100w`}
                  width={640}
                  height={480}
                  placeholder={communityBikePlaceholder}
                  alt="Community Bike Project volunteers refurbishing bicycles"
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
                  <ProjectSectionHeading>
                    TeamMates Mentor
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Omaha, NE &middot; 2014–2023
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Mentored weekly through TeamMates, a statewide program
                    pairing adults with students. I walked alongside my
                    teammate from 2nd grade through 11th grade, helping with
                    time management, goal-setting, and navigating school
                    challenges.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Nine years of showing up matters. Research backs it up:
                    consistent mentoring improves grades, retention, and
                    emotional wellbeing. But mostly it gives a kid someone
                    steady in their corner.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${teammates} 640w, ${teammatesLarge} 5000w`}
                  width={640}
                  height={512}
                  placeholder={teammatesPlaceholder}
                  alt="TeamMates mentoring"
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
                  <ProjectSectionHeading>
                    Flywheel Community Committee
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Omaha, NE
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Planned and ran regular days of volunteering at food banks,
                    shelters, and youth organizations around Omaha. Twice a year
                    we organized a &ldquo;choose your cause&rdquo; drive around
                    Omaha Gives,{' '}
                    <Link href="https://web.archive.org/web/20210614203810/https://getflywheel.com/layout/life-at-flywheel/fly-community-threw-a-party-to-help-flywheelers-give-back/">
                      raising over $7,340 for more than 50 Omaha nonprofits
                    </Link>.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    We also supported{' '}
                    <Link href="https://incommoncd.org">inCOMMON</Link>, a
                    company-sponsored nonprofit working to break the cycle of
                    poverty at a neighborhood level. Their belief is simple: no
                    one should face a lifetime of poverty because of the zip
                    code they were born into.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${flywheelGives} 640w, ${flywheelGivesLarge} 2048w`}
                  width={640}
                  height={427}
                  placeholder={flywheelGivesPlaceholder}
                  alt="Flywheel team volunteering at a community event"
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
                  <ProjectSectionHeading>
                    Project Homeless Connect
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Omaha, NE &middot; 2014–2017
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Volunteered with{' '}
                    <Link href="https://www.projecthomelessconnect.org">
                      Project Homeless Connect
                    </Link>, an annual one-day event where people experiencing
                    homelessness can walk in and get haircuts, IDs, medical
                    screenings, and housing referrals all under one roof.
                    Served as a navigator pairing with guests to walk them
                    through available services, managed the bicycle repair
                    station, and handed out supplies.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${projHomeless} 640w, ${projHomelessLarge} 1293w`}
                  width={640}
                  height={429}
                  placeholder={projHomelessPlaceholder}
                  alt="Project Homeless Connect volunteers providing services"
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
                  <ProjectSectionHeading>
                    TEAM Software Community Board
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Omaha, NE
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Organized food drives, days of service at the{' '}
                    <Link href="https://sienafrancis.org">
                      Siena Francis House
                    </Link>,{' '}
                    <Link href="https://foodbankheartland.org">
                      Food Bank for the Heartland
                    </Link>, and other local nonprofits. Also gathered
                    and organized our chapter&apos;s team for the{' '}
                    <Link href="https://omahacorporatecup.donordrive.com">
                      American Lung Association Corporate Cup
                    </Link>, raising money for lung disease research.
                  </ProjectSectionText>
                </ProjectTextRow>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  srcSet={`${teamService} 640w, ${teamServiceLarge} 2412w`}
                  width={640}
                  height={459}
                  placeholder={teamServicePlaceholder}
                  alt="TEAM community service volunteers"
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
