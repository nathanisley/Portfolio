import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import config from '~/config.json';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Nathan, a product leader, agile coach, and builder who started in IT and
      networking. I've served as Chief of Staff at a startup (recruited by the CEO to
      basically run the company), scaled an agile org from 20 to 80+ at Flywheel/WP Engine,
      and delivered the first Big Data platform at a Fortune 500.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I believe the best leaders build. I don't just write requirements. I ship code,
      prototype with AI, and bridge the gap between strategy and execution. Certified by
      Jeff Sutherland and Mike Cohn, I've trained thousands of clients across four
      countries. Feel free to{' '}
      <Link href={`mailto:${config.email}`}>say hello</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.details}>
              <div aria-hidden className={styles.tag}>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.actions}>
                <Button
                  className={styles.sayHello}
                  data-visible={visible}
                  href={`mailto:${config.email}`}
                  icon="send"
                >
                  Say Hello
                </Button>
                <Button
                  className={styles.sayHello}
                  data-visible={visible}
                  href="https://calendly.com/nathankbuilds"
                  icon="calendar"
                >
                  Let&apos;s Meet
                </Button>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/nathan-knisley-resume.pdf"
                  icon="arrow-right"
                >
                  Download resume
                </Button>
              </div>
            </div>
            <div className={styles.preview}>
              <div className={styles.imageFrame} data-visible={visible}>
                <Image
                  className={styles.image}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1378}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Nathan smiling with arms crossed in an office hallway"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
