import { media } from '@/content/media';

export function VideoBand() {
  return (
    <section className="video-band-section">
      <div className="container">
        <div className="video-band">
          <video
            src={media.factoryVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="video-band-content">
            <span className="eyebrow">Production capability</span>
            <h2>Производство, которое видно сразу</h2>
            <p>
              Для крупных предприятий важно не обещание, а подтверждение:
              цех, оборудование, сборка, контроль и реальные внедрённые решения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
