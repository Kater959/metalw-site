import { media } from '@/content/media';

export function RealHeroVideo() {
  return (
    <div className="real-hero-video" aria-hidden="true">
      <video
        src={media.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="real-hero-video-overlay" />
    </div>
  );
}
