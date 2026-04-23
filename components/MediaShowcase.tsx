import { media } from '@/content/media';
import { OpenableImage } from '@/components/OpenableImage';

const copy = {
  ru: {
    eyebrow: 'Real production',
    title: 'Реальные инженерные решения, а не стоковые картинки',
    lead: 'Показываем настоящие фото производства, оснастки и специальных станков. Это сразу повышает доверие крупных промышленных клиентов.',
    items: [
      { title: 'Агрегатные станки', text: 'Поворотные комплексы и специальные решения для серийных операций.', src: media.photos.aggregateRotary },
      { title: 'Зажимная оснастка', text: 'Двухпозиционные и многоместные приспособления для CNC обработки.', src: media.photos.doubleClamp },
      { title: 'Стапели и позиционеры', text: 'Сборочные и сварочные решения под геометрию изделия.', src: media.photos.dualPositioner },
      { title: 'Производственная база', text: 'Цех, сборка, контроль, подготовка и внедрение решений.', src: media.photos.workshop },
    ],
  },
  en: {
    eyebrow: 'Real production',
    title: 'Real engineering solutions, not stock imagery',
    lead: 'Actual production photos, fixtures and special-purpose equipment create immediate trust with industrial clients.',
    items: [
      { title: 'Aggregate machines', text: 'Rotary complexes and dedicated systems for serial operations.', src: media.photos.aggregateRotary },
      { title: 'Clamping fixtures', text: 'Dual-position and multi-part fixtures for CNC machining.', src: media.photos.doubleClamp },
      { title: 'Jigs and positioners', text: 'Assembly and welding solutions designed around product geometry.', src: media.photos.dualPositioner },
      { title: 'Production base', text: 'Workshop, assembly, control and implementation preparation.', src: media.photos.workshop },
    ],
  },
  zh: {
    eyebrow: '真实生产',
    title: '真实工程解决方案，而不是素材图片',
    lead: '真实的生产、工装和专用设备照片能够立即增强工业客户的信任。',
    items: [
      { title: '组合机床', text: '用于批量工序的回转设备和专用系统。', src: media.photos.aggregateRotary },
      { title: '夹紧工装', text: '用于CNC加工的双工位和多工位夹具。', src: media.photos.doubleClamp },
      { title: '胎架与定位器', text: '围绕产品几何设计的装配和焊接解决方案。', src: media.photos.dualPositioner },
      { title: '生产基地', text: '车间、装配、控制和导入准备。', src: media.photos.workshop },
    ],
  },
};

export function MediaShowcase({ locale = 'ru' }: { locale?: string }) {
  const data = copy[(locale as keyof typeof copy)] ?? copy.ru;

  return (
    <section className="real-media-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{data.eyebrow}</span>
            <h2>{data.title}</h2>
          </div>
          <p>{data.lead}</p>
        </div>

        <div className="real-media-grid">
          {data.items.map((item, index) => (
            <article className={index === 0 ? 'real-media-card large' : 'real-media-card'} key={item.title}>
              <OpenableImage src={item.src} alt={item.title} />
              <div className="real-media-caption">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
