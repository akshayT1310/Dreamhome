import { useRef, useState } from 'react';
import { beforeAfterImages } from '../data/siteData';

export default function BeforeAfter() {
  const [divider, setDivider] = useState(50);
  const sliderRef = useRef(null);

  const updateDivider = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setDivider(Math.min(100, Math.max(0, percent)));
  };

  const handlePointer = (event) => {
    updateDivider(event.clientX);
  };

  return (
    <section className="before-after-section">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker dark">BEFORE / AFTER</p>
          <h2>
            Concepts Brought
            <span>To Life In 3D.</span>
          </h2>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="compare-slider"
        onPointerMove={handlePointer}
        onPointerDown={(event) => handlePointer(event)}
        role="slider"
        tabIndex={0}
        aria-label="Before and after design comparison"
      >
        <img className="before-layer" src={beforeAfterImages.before} alt="Concept visual" />
        <div className="after-layer" style={{ width: `${divider}%` }}>
          <img src={beforeAfterImages.after} alt="Final 3D design" />
        </div>
        <div className="divider" style={{ left: `${divider}%` }}>
          <span className="divider-knob" aria-hidden="true" />
        </div>

        <div className="compare-label before-label">CONCEPT</div>
        <div className="compare-label after-label">FINAL 3D DESIGN</div>
      </div>
    </section>
  );
}
