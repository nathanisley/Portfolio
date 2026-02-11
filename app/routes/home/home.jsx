import localTextureLarge from '~/assets/local-large.jpg';
import localTexturePlaceholder from '~/assets/local-placeholder.jpg';
import localTexture from '~/assets/local.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Leader + Builder',
    description: `Portfolio of ${config.name} — product leader, agile coach, and builder. Former Chief of Staff. Scaled teams from 20 to 80+. Trained thousands across four countries.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

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
        description="Designed and shipped this site using Claude Code as my engineering co-pilot. Remix, Three.js, custom GLSL shaders, and Cloudflare deployment — product thinking meets AI-powered development."
        buttonText="View source"
        buttonLink="https://github.com/nathanisley/portfolio"
        decorativeLabel="Shipped"
        model={{
          alt: 'This portfolio website running in a browser',
          imageScale: 1.1,
          imageOffsetY: '4%',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
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
        title="Local by Flywheel — Product Leadership"
        description="Led the delivery team for Flywheel's second-ever product offering. Drove the customer-led 'Local Pro' roadmap with user research, go-to-market strategy, and cross-functional collaboration across engineering, design, and marketing."
        buttonText="View case study"
        buttonLink="/projects/gamestack"
        decorativeLabel="Led"
        model={{
          alt: 'Local by Flywheel WordPress development application',
          imageScale: 1.02,
          textures: [
            {
              srcSet: `${localTexture} 1280w, ${localTextureLarge} 2560w`,
              placeholder: localTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Scaling Agile — 20 to 80+ Engineers"
        description="As Agile Coach at Flywheel/WP Engine, I scaled the Scrum organization fourfold. Certified by Jeff Sutherland and Mike Cohn, I trained thousands of clients across four countries on Agile, Scrum, Kanban, and release planning."
        buttonText="View case study"
        buttonLink="/projects/slice"
        decorativeLabel="Scaled"
        model={{
          alt: 'Agile coaching workshop with sprint boards and burn down charts',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
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
