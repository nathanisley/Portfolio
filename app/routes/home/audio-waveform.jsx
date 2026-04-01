import styles from './audio-waveform.module.css';

export function AudioWaveform() {
  return (
    <div className={styles.overlay}>
      <div className={styles.scanlines} />
      <div className={styles.flicker} />
      <div className={styles.vignette} />
    </div>
  );
}
