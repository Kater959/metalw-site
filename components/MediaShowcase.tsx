import { media } from '@/content/media';
import { OpenableImage } from '@/components/OpenableImage';

const items = [
  {
    title: 'Агрегатные станки',
    text: 'Поворотные комплексы и специальные решения для серийных операций.',
    src: media.photos.aggregateRotary,
  },
  {
    title: 'Зажимная оснастка',
    text: 'Двухпозиционные и многоместные приспособления для CNC обработки.',
    src: media.photos.doubleClamp,
  },
  {
    title: 'Стапели и позиционеры',
    text: 'Сборочные и сварочные решения под геометрию изделия.',
    src: media.photos.dualPositioner,
  },
  {
    title: 'Производственная база',
    text: 'Чистый цех, сборка, контроль, подготовка и внедрение решений.',
    src: media.photos.workshop,
  },
];

export function MediaShowcase() {
  return (
    <section className="real-media-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Real production</span>
            <h2>Реальные инженерные решения, а не стоковые картинки</h2>
          </div>
          <p>
            Используем ваши настоящие фото производства, оснастки и специальных станков.
            Это сразу повышает доверие крупных промышленных клиентов.
          </p>
        </div>

        <div className="real-media-grid">
          {items.map((item, index) => (
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
