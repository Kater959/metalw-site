'use client';

export function OpenableImage({
  src,
  alt,
  className,
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}) {
  return (
    <button
      type="button"
      className={className ? `openable-image ${className}` : 'openable-image'}
      onClick={() => window.openMetalwLightbox?.({ src, title: alt })}
      aria-label={`Открыть фото: ${alt}`}
    >
      <img src={src} alt={alt} loading={loading} />
      <span className="openable-image-zoom">Открыть</span>
    </button>
  );
}
