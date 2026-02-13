import heroPortraitLarge from '~/assets/hero-portrait-large.jpg';
import heroPortraitPlaceholder from '~/assets/hero-portrait-placeholder.jpg';
import heroPortrait from '~/assets/hero-portrait.jpg';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

// Renders discipline words with line-aware animation delays.
// Words on the same visual line animate together; new lines get staggered.
function DisciplineWords({ item, status, nodeRef }) {
  const groupRef = useRef(null);

  useLayoutEffect(() => {
    if (status !== 'entering' || !groupRef.current) return;

    const words = Array.from(groupRef.current.children);
    let prevTop = null;
    let lineIndex = 0;

    words.forEach(word => {
      const rect = word.getBoundingClientRect();
      if (prevTop !== null && Math.abs(rect.top - prevTop) > 2) {
        lineIndex++;
      }
      prevTop = rect.top;
      word.style.setProperty(
        '--delay',
        numToMs(msToNum(tokens.base.durationL) + lineIndex * 200)
      );
    });
  }, [status]);

  return (
    <span
      aria-hidden
      ref={el => {
        groupRef.current = el;
        nodeRef.current = el;
      }}
      className={styles.disciplineGroup}
      data-status={status}
    >
      {item.split(' ').map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={styles.word}
          data-plus={wordIndex === 0}
          data-status={status}
          style={cssProps({
            delay: numToMs(msToNum(tokens.base.durationL) + wordIndex * 200),
          })}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
    ', and '
  );
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}
            <div className={styles.heroPortrait} data-visible={visible}>
              <Image
                className={styles.heroPortraitImage}
                placeholder={heroPortraitPlaceholder}
                srcSet={`${heroPortrait} 400w, ${heroPortraitLarge} 800w`}
                width={400}
                height={400}
                sizes="(max-width: 768px) 120px, 280px"
                alt="Nathan Knisley"
              />
            </div>
            <header className={styles.text}>
              <h1 className={styles.name} data-visible={visible} id={titleId}>
                <DecoderText text={config.name} delay={500} />
              </h1>
              <Heading level={0} as="h2" className={styles.title}>
                <VisuallyHidden className={styles.label}>
                  {`${config.role} + ${introLabel}`}
                </VisuallyHidden>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  >
                    {config.role}
                  </span>
                  <span className={styles.line} data-status={status} />
                </span>
                <div className={`${styles.row} ${styles.disciplines}`}>
                  {disciplines.map(item => (
                    <Transition
                      unmount
                      in={item === currentDiscipline}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={item}
                    >
                      {({ status, nodeRef }) => (
                        <DisciplineWords
                          item={item}
                          status={status}
                          nodeRef={nodeRef}
                        />
                      )}
                    </Transition>
                  ))}
                </div>
              </Heading>
            </header>
            <RouterLink
              to="/#project-1"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/#project-1"
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}
