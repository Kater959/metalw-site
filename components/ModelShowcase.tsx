'use client';

import { useEffect, createElement } from 'react';
import { media } from '@/content/media';

const copy = {
  ru: {
    eyebrow: 'Interactive 3D',
    title: 'Инженерная модель до изготовления',
    lead: 'Клиент видит не просто фото готового изделия, а полный инженерный подход: 3D модель, конструкция, производство и внедрение.',
    tag: 'GLB / CAD preview',
    cardTitle: 'Двухпозиционная зажимная оснастка',
    text: 'Интерактивная модель для демонстрации конструкции, компоновки и инженерной логики решения. Можно вращать мышкой, приближать и смотреть под разными углами.',
    bullets: ['Проектирование под конкретную деталь', 'Проверка компоновки до изготовления', 'Наглядная демонстрация для технических служб заказчика'],
  },
  en: {
    eyebrow: 'Interactive 3D',
    title: 'Engineering model before manufacturing',
    lead: 'The client sees not just a finished product photo, but the full engineering approach: 3D model, design, manufacturing and implementation.',
    tag: 'GLB / CAD preview',
    cardTitle: 'Dual-position clamping fixture',
    text: 'An interactive model for showing the structure, layout and engineering logic of the solution. It can be rotated, zoomed and reviewed from different angles.',
    bullets: ['Designed for a specific part', 'Layout validation before manufacturing', 'Clear demonstration for customer engineering teams'],
  },
  zh: {
    eyebrow: '交互式3D',
    title: '制造前的工程模型',
    lead: '客户看到的不只是成品照片，而是完整工程方法：3D模型、结构、制造和导入。',
    tag: 'GLB / CAD预览',
    cardTitle: '双工位夹紧工装',
    text: '交互式模型用于展示结构、布局和工程逻辑。可旋转、缩放并从不同角度查看。',
    bullets: ['针对具体零件设计', '制造前验证布局', '便于向客户工程团队展示'],
  },
};

export function ModelShowcase({ locale = 'ru' }: { locale?: string }) {
  useEffect(() => {
    const existing = document.querySelector('script[data-model-viewer]');
    if (existing) return;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.setAttribute('data-model-viewer', 'true');
    document.head.appendChild(script);
  }, []);

  const data = copy[(locale as keyof typeof copy)] ?? copy.ru;

  const modelViewer = createElement('model-viewer', {
    src: media.modelDoubleFixture,
    'camera-controls': true,
    'auto-rotate': true,
    'rotation-per-second': '18deg',
    'shadow-intensity': '0.8',
    exposure: '0.9',
    'environment-image': 'neutral',
    loading: 'lazy',
    reveal: 'auto',
    ar: true,
  });

  return (
    <section className="model-showcase-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{data.eyebrow}</span>
            <h2>{data.title}</h2>
          </div>
          <p>{data.lead}</p>
        </div>

        <div className="model-showcase">
          <div className="model-viewer-shell">
            {modelViewer}
          </div>

          <div className="model-showcase-info">
            <span className="tag">{data.tag}</span>
            <h3>{data.cardTitle}</h3>
            <p>{data.text}</p>
            <ul className="list">
              {data.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
