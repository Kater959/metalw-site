'use client';

import { useEffect, createElement } from 'react';
import { media } from '@/content/media';

export function ModelShowcase() {
  useEffect(() => {
    const existing = document.querySelector('script[data-model-viewer]');
    if (existing) return;

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.setAttribute('data-model-viewer', 'true');
    document.head.appendChild(script);
  }, []);

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
            <span className="eyebrow">Interactive 3D</span>
            <h2>Инженерная модель до изготовления</h2>
          </div>
          <p>
            Клиент видит не просто фото готового изделия, а полный инженерный подход:
            3D модель, конструкция, производство и внедрение.
          </p>
        </div>

        <div className="model-showcase">
          <div className="model-viewer-shell">
            {modelViewer}
            <div className="model-viewer-hint">Крутите модель мышкой</div>
          </div>

          <div className="model-showcase-info">
            <span className="tag">GLB / CAD preview</span>
            <h3>Двухпозиционная зажимная оснастка</h3>
            <p>
              Интерактивная модель для демонстрации конструкции, компоновки и инженерной логики решения.
              Можно вращать мышкой, приближать и смотреть под разными углами.
            </p>
            <ul className="list">
              <li>Проектирование под конкретную деталь</li>
              <li>Проверка компоновки до изготовления</li>
              <li>Наглядная демонстрация для технических служб заказчика</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
