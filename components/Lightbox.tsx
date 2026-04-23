'use client';

import { useEffect, useState } from 'react';

type LightboxPayload = {
  src: string;
  title?: string;
};

declare global {
  interface Window {
    openMetalwLightbox?: (payload: LightboxPayload) => void;
  }
}

export function Lightbox() {
  const [image, setImage] = useState<LightboxPayload | null>(null);

  useEffect(() => {
    window.openMetalwLightbox = (payload: LightboxPayload) => setImage(payload);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setImage(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      delete window.openMetalwLightbox;
    };
  }, []);

  if (!image) return null;

  return (
    <div className="lightbox" onClick={() => setImage(null)} role="dialog" aria-modal="true">
      <button className="lightbox-close" type="button" aria-label="Закрыть">
        ×
      </button>
      <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.title || 'Metalw project image'} />
        {image.title ? <div className="lightbox-title">{image.title}</div> : null}
      </div>
    </div>
  );
}
