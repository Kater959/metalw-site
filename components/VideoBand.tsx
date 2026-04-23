import { media } from '@/content/media';

const copy = {
  ru: {
    eyebrow: 'Production capability',
    title: 'Производство, которое видно сразу',
    text: 'Для крупных предприятий важно не обещание, а подтверждение: цех, оборудование, сборка, контроль и реальные внедрённые решения.',
  },
  en: {
    eyebrow: 'Production capability',
    title: 'Manufacturing capability you can see',
    text: 'Industrial clients need proof: workshop, equipment, assembly, control and implemented solutions.',
  },
  zh: {
    eyebrow: '生产能力',
    title: '看得见的制造能力',
    text: '工业客户需要证据：车间、设备、装配、控制以及已经导入的解决方案。',
  },
};

export function VideoBand({ locale = 'ru' }: { locale?: string }) {
  const data = copy[(locale as keyof typeof copy)] ?? copy.ru;

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
            <span className="eyebrow">{data.eyebrow}</span>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
