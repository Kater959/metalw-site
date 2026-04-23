import { media } from '@/content/media';
import { OpenableImage } from '@/components/OpenableImage';

const cases = [
  {
    title: 'Двухпозиционная зажимная оснастка',
    tag: 'CNC / Hydraulic fixture',
    src: media.photos.doubleClamp,
    result: 'Ускорение установки детали и стабильная повторяемость обработки.',
  },
  {
    title: 'Поворотный агрегатный комплекс',
    tag: 'Special-purpose machine',
    src: media.photos.aggregateReal,
    result: 'Решение под серийный производственный цикл и специальные операции.',
  },
  {
    title: 'Двухопорный позиционер',
    tag: 'Welding / Assembly fixture',
    src: media.photos.installed,
    result: 'Фиксация и позиционирование крупногабаритных изделий.',
  },
];

export function RealCases() {
  return (
    <section className="real-cases-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Cases</span>
            <h2>От проекта до внедрения на производстве</h2>
          </div>
          <p>
            Такие блоки превращают сайт из визитки в доказательство компетенции:
            модель, изготовление, монтаж, эксплуатация.
          </p>
        </div>

        <div className="real-cases-grid">
          {cases.map((item) => (
            <article className="real-case-card" key={item.title}>
              <OpenableImage src={item.src} alt={item.title} />
              <div>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
