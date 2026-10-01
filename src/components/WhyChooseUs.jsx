import React, { useEffect, useState } from "react";

const galleryImages = [
  "/assets/assets/video/gallery/gallery1.jpeg",
  "/assets/assets/video/gallery/gallery2.jpeg",
  "/assets/assets/video/gallery/gallery3.jpeg",
  "/assets/assets/video/gallery/gallery4.jpeg",
 
  "/assets/assets/video/gallery/gallery6.jpeg",
  "/assets/assets/video/gallery/gallery7.jpeg",
  "/assets/assets/video/gallery/gallery8.jpeg",
  "/assets/assets/video/gallery/gallery9.jpeg",
  "/assets/assets/video/gallery/gallery10.jpeg",
  "/assets/assets/video/gallery/gallery11.jpeg",
  "/assets/assets/video/gallery/gallery12.jpeg",
  "/assets/assets/video/gallery/gallery13.jpeg",
  "/assets/assets/video/gallery/gallery14.jpeg",
  "/assets/assets/video/gallery/gallery15.jpeg",
];
export default function GallerySlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= galleryImages.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev <= 0 ? galleryImages.length - 3 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="gallery-slider" id="gallery">
      <div className="gallery-slider__container">

        <div className="gallery-slider__header">
          <div>
            <span className="gallery-slider__label">
              OUR WORK
            </span>

            <h2>
              Spaces we've <em>designed.</em>
            </h2>
          </div>

          <div className="gallery-slider__controls">
            <button onClick={prevSlide} aria-label="Previous">
              ←
            </button>

            <button onClick={nextSlide} aria-label="Next">
              →
            </button>
          </div>
        </div>

        <div className="gallery-slider__viewport">
          <div
            className="gallery-slider__track"
            style={{
              transform: `translateX(calc(-${current} * (33.333% + 8px)))`,
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                className="gallery-slider__item"
                key={index}
              >
                <img
                  src={image}
                  alt={`Creative Home Design ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-slider__dots">
          {galleryImages.slice(0, galleryImages.length - 2).map(
            (_, index) => (
              <button
                key={index}
                className={
                  current === index
                    ? "active"
                    : ""
                }
                onClick={() => setCurrent(index)}
                aria-label={`Slide ${index + 1}`}
              />
            )
          )}
        </div>

      </div>

      <style>{`

        .gallery-slider {
          background: #101828;
          padding: 90px 0;
          overflow: hidden;
        }

        .gallery-slider__container {
          width: min(1200px, calc(100% - 48px));
          margin: auto;
        }

        .gallery-slider__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 35px;
        }

        .gallery-slider__label {
          display: block;
          margin-bottom: 12px;

          font-family: "Manrope", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .2em;
          color: #c2a263;
        }

        .gallery-slider__header h2 {
          margin: 0;

          font-family: "Cormorant Garamond", serif;
          font-size: clamp(48px, 6vw, 78px);
          line-height: .9;
          font-weight: 400;
          color: #fff;
        }

        .gallery-slider__header h2 em {
          color: #c2a263;
          font-weight: 400;
        }

        .gallery-slider__controls {
          display: flex;
          gap: 8px;
        }

        .gallery-slider__controls button {
          width: 46px;
          height: 46px;

          border: 1px solid rgba(255,255,255,.2);
          background: transparent;
          color: #fff;

          font-size: 18px;
          cursor: pointer;

          transition: .3s ease;
        }

        .gallery-slider__controls button:hover {
          background: #c2a263;
          border-color: #c2a263;
          color: #101828;
        }

        .gallery-slider__viewport {
          width: 100%;
          overflow: hidden;
        }

        .gallery-slider__track {
          display: flex;
          gap: 12px;

          transition: transform .7s cubic-bezier(.22,.61,.36,1);
        }

        .gallery-slider__item {
          flex: 0 0 calc((100% - 24px) / 3);

          height: 300px;

          overflow: hidden;
          background: #1b2636;
        }

        .gallery-slider__item img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform .6s ease;
        }

        .gallery-slider__item:hover img {
          transform: scale(1.05);
        }

        .gallery-slider__dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 25px;
        }

        .gallery-slider__dots button {
          width: 7px;
          height: 7px;
          padding: 0;

          border: 0;
          border-radius: 50%;

          background: #626b78;
          cursor: pointer;

          transition: .3s ease;
        }

        .gallery-slider__dots button.active {
          width: 24px;
          border-radius: 10px;
          background: #c2a263;
        }

        @media (max-width: 700px) {

          .gallery-slider {
            padding: 70px 0;
          }

          .gallery-slider__container {
            width: calc(100% - 30px);
          }

          .gallery-slider__header {
            align-items: flex-end;
          }

          .gallery-slider__header h2 {
            font-size: 48px;
          }

          .gallery-slider__controls button {
            width: 40px;
            height: 40px;
          }

          .gallery-slider__item {
            flex: 0 0 calc((100% - 12px) / 2);
            height: 220px;
          }

        }

        @media (max-width: 480px) {

          .gallery-slider__header {
            align-items: flex-start;
            gap: 20px;
          }

          .gallery-slider__header h2 {
            font-size: 42px;
          }

          .gallery-slider__item {
            flex: 0 0 100%;
            height: 240px;
          }

        }

      `}</style>
    </section>
  );
}