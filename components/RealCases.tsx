import { media } from '@/content/media';
import { OpenableImage } from '@/components/OpenableImage';

const copy = {
  ru: {
    eyebrow: 'Cases',
    title: 'От проекта до внедрения на производстве',
    lead: 'Показываем полный путь: инженерная модель, изготовление, монтаж и реальное применение на участке.',
    cases: [
      { title: 'Двухпозиционная зажимная оснастка', tag: 'CNC / Hydraulic fixture', src: media.photos.doubleClamp, result: 'Ускорение установки детали и стабильная повторяемость обработки.' },
      { title: 'Поворотный агрегатный комплекс', tag: 'Special-purpose machine', src: media.photos.aggregateReal, result: 'Решение под серийный производственный цикл и специальные операции.' },
      { title: 'Двухопорный позиционер', tag: 'Welding / Assembly fixture', src: media.photos.installed, result: 'Фиксация и позиционирование крупногабаритных изделий.' },
    ],
  },
  en: {
    eyebrow: 'Cases',
    title: 'From engineering design to production launch',
    lead: 'A complete project path: CAD model, manufacturing, installation and real production use.',
    cases: [
      { title: 'Dual-position clamping fixture', tag: 'CNC / Hydraulic fixture', src: media.photos.doubleClamp, result: 'Faster part setup and stable machining repeatability.' },
      { title: 'Rotary aggregate machine complex', tag: 'Special-purpose machine', src: media.photos.aggregateReal, result: 'A solution for serial production cycles and dedicated operations.' },
      { title: 'Dual-support positioner', tag: 'Welding / Assembly fixture', src: media.photos.installed, result: 'Positioning and fixation of large-format industrial parts.' },
    ],
  },
  zh: {
    eyebrow: '案例',
    title: '从工程设计到生产导入',
    lead: '完整项目路径：CAD模型、制造、安装以及实际生产应用。',
    cases: [
      { title: '双工位夹紧工装', tag: 'CNC / 液压夹具', src: media.photos.doubleClamp, result: '缩短零件装夹时间并保证加工重复性。' },
      { title: '回转组合机床系统', tag: '专用设备', src: media.photos.aggregateReal, result: '面向批量生产节拍和专用工序的解决方案。' },
      { title: '双支撑定位器', tag: '焊接 / 装配工装', src: media.photos.installed, result: '用于大型工业零件的定位和固定。' },
    ],
  },
};

export function RealCases({ locale = 'ru' }: { locale?: string }) {
  const data = copy[(locale as keyof typeof copy)] ?? copy.ru;

  return (
    <section className="real-cases-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{data.eyebrow}</span>
            <h2>{data.title}</h2>
          </div>
          <p>{data.lead}</p>
        </div>

        <div className="real-cases-grid">
          {data.cases.map((item) => (
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
