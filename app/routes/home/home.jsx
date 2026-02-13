import productLeadershipLarge from '~/assets/product-leadership-large.jpg';
import productLeadershipPlaceholder from '~/assets/product-leadership-placeholder.jpg';
import productLeadership from '~/assets/product-leadership.jpg';
import agileScalingLarge from '~/assets/agile-scaling-large.jpg';
import agileScalingPlaceholder from '~/assets/agile-scaling-placeholder.jpg';
import agileScaling from '~/assets/agile-scaling.jpg';
import aiDevLarge from '~/assets/ai-dev-large.jpg';
import aiDevPlaceholder from '~/assets/ai-dev-placeholder.jpg';
import aiDev from '~/assets/ai-dev.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import petFriendlyVideo from '~/assets/petfriendly.mp4';
import petFriendlyPlaceholder from '~/assets/petfriendly-placeholder.jpg';
import givingBackLarge from '~/assets/giving-back-large.jpg';
import givingBackPlaceholder from '~/assets/giving-back-placeholder.jpg';
import givingBack from '~/assets/giving-back.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Product Leader, Agile Coach & Builder',
    description: `Product leader, agile coach, and builder. Former Chief of Staff. Scaled teams from 20 to 80+. Trained thousands across four countries.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="AI-Powered Product Development"
        description="Proof that product sense + AI ships real software. nathank.build, a beloved weather app, a gravel road discovery tool, and a resource app for the unhoused. All designed and launched with AI as my engineering partner."
        buttonText="How I built it"
        buttonLink="/projects/ai-development"
        decorativeLabel="Shipped"
        model={{
          alt: 'Four AI-built apps: portfolio site, StarkWeather, Grabbl, and SleepMat',
          imageScale: 1,
          imageOffsetY: '0%',
          textures: [
            {
              srcSet: `${aiDev} 1280w, ${aiDevLarge} 7823w`,
              placeholder: aiDevPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="PetFriendly — Chief of Staff"
        description="Recruited by the CEO to co-run the company as his left hand man. Oversaw operations, managed the development team, ran the leadership team, and tripled the product offering at this delightful pet wellness startup."
        buttonText="How I ran it"
        buttonLink="/projects/petfriendly"
        decorativeLabel="Ran"
        model={{
          alt: 'PetFriendly app promotional video',
          imageScale: 1,
          videoCrop: '576 / 624',
          videoCropY: '50%',
          textures: [
            {
              src: petFriendlyVideo,
              placeholder: petFriendlyPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Flywheel — Product Leadership"
        description="Led the delivery team for Flywheel's second-ever product offering. Drove the customer-led 'Local Pro' roadmap with user research, go-to-market strategy, and cross-functional collaboration across engineering, design, and marketing."
        buttonText="How I led it"
        buttonLink="/projects/gamestack"
        decorativeLabel="Led"
        model={{
          alt: 'Agile scaling team collaboration and sprint planning',
          imageScale: 1.4,
          imageCrop: '1280 / 770',
          imageCropY: '21%',
          imageOffsetX: '3.5%',
          textures: [
            {
              srcSet: `${agileScaling} 1280w, ${agileScalingLarge} 3916w`,
              placeholder: agileScalingPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Scaling Agile — 20 to 80+ Builders"
        description="As Agile Coach at Flywheel/WP Engine, I scaled the Scrum organization fourfold. Certified by Jeff Sutherland and Mike Cohn, I trained thousands of clients across four countries on Agile, Scrum, Kanban, and release planning."
        buttonText="How I scaled it"
        buttonLink="/projects/slice"
        decorativeLabel="Scaled"
        model={{
          alt: 'Flywheel product leadership team collaboration',
          textures: [
            {
              srcSet: `${productLeadership} 1280w, ${productLeadershipLarge} 2048w`,
              placeholder: productLeadershipPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Giving Back"
        description="None of it means much without giving back. Board leadership, mentoring a kid for nine years, food drives, shelter volunteering. Showing up for people facing things most of us never have to think about."
        buttonText="See the work"
        buttonLink="/giving-back"
        decorativeLabel="Gave"
        model={{
          alt: 'Giving back to the community',
          textures: [
            {
              srcSet: `${givingBack} 1280w, ${givingBackLarge} 5760w`,
              placeholder: givingBackPlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
