'use client';

export function LoadingScreen() {
  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-inner">
        <div className="loading-logo">METALW</div>
        <div className="loading-sub">Industrial engineering systems</div>
        <div className="loading-bar"><span /></div>
      </div>
    </div>
  );
}
