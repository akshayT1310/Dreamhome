import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const HeroSection = ({ onNavigate }) => {
  const scrollTo = (id) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }

    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section className="chp-hero" id="home">

        {/* ================= VIDEO ================= */}
        <video
          className="chp-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/assets/assets/video/homepagevideo.mp4"
            type="video/mp4"
          />
        </video>

        {/* ================= OVERLAY ================= */}
        <div className="chp-hero-overlay" />

        {/* ================= TOP INFO ================= */}
        <div className="chp-hero-top">
          <span>Er Aman Shah | Founder & Principal Architect</span>

          <span>
            ARCHITECTURE · INTERIORS · STRUCTURE
          </span>
        </div>

        {/* ================= CENTER CONTENT ================= */}
        <div className="chp-hero-content">

          {/* EYEBROW */}
          <div className="chp-hero-eyebrow">
            <span />
            <span className="chp-eyebrow-text">
              ARCHITECTURAL DESIGN STUDIO
            </span>
            <span />
          </div>

          {/* HEADING */}
          <h1>
            Spaces
            <br />
            <span>Designed With</span>
            <br />
            Purpose.
          </h1>

          {/* DESCRIPTION */}
          <p className="chp-hero-description">
            Architecture, interiors and structural expertise
            crafted to transform ideas into meaningful spaces
            built for modern living.
          </p>

          {/* BUTTONS */}
          <div className="chp-hero-actions">

            <button
              type="button"
              className="chp-btn chp-btn-primary"
              onClick={() => scrollTo("#projects")}
            >
              <span>Explore Our Work</span>
              <ArrowUpRight size={15} strokeWidth={2} />
            </button>

            <button
              type="button"
              className="chp-btn chp-btn-secondary"
              onClick={() => scrollTo("#contact")}
            >
              Start Your Project
            </button>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="chp-hero-bottom">

          <div className="chp-hero-tags">
            <span>PLAN</span>
            <i />
            <span>DESIGN</span>
            <i />
            <span>VISUALIZE</span>
            <i />
            <span>BUILD</span>
          </div>

          <div className="chp-hero-scroll">

            <span>SCROLL TO EXPLORE</span>

            <button
              type="button"
              aria-label="Scroll to services"
              onClick={() => scrollTo("#services")}
            >
              <ChevronDown size={17} />
            </button>

          </div>
        </div>

       
      </section>

      <style>{`

        /* =====================================================
           HERO
        ===================================================== */

       /* =========================================================
   CREATIVE HOME PLAN & DESIGN
   HERO SECTION
========================================================= */

.chp-hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 680px;

  overflow: hidden;
  isolation: isolate;

  background: #1b1915;
  color: #ffffff;
}


/* =========================================================
   BACKGROUND VIDEO
========================================================= */

.chp-hero-video {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center center;

  z-index: 0;
}


/* =========================================================
   VIDEO OVERLAY
========================================================= */

.chp-hero-overlay {
  position: absolute;
  inset: 0;

  z-index: 1;

  pointer-events: none;

  background:
    linear-gradient(
      90deg,
      rgba(20, 18, 14, 0.48) 0%,
      rgba(20, 18, 14, 0.30) 25%,
      rgba(20, 18, 14, 0.12) 52%,
      rgba(20, 18, 14, 0.03) 78%,
      rgba(20, 18, 14, 0) 100%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.10) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.16) 100%
    );
}


/* =========================================================
   TOP INFORMATION
========================================================= */

.chp-hero-top {
  position: absolute;

  top: 125px;
  left: 6vw;
  right: 6vw;

  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family:
    "Manrope",
    Arial,
    sans-serif;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.20em;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.96);

  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.42);
}

.chp-hero-top span:last-child {
  color: rgba(255, 255, 255, 0.82);
}


/* =========================================================
   MAIN HERO CONTENT
   LEFT ALIGNED
========================================================= */

.chp-hero-content {
  position: absolute;

  z-index: 4;

  top: 50%;
  left: 6vw;

  transform: translateY(-50%);

  width: min(760px, 80%);

  margin: 0;
  padding: 0;

  text-align: left;

  background: transparent;
}


/* =========================================================
   EYEBROW
========================================================= */

.chp-hero-eyebrow {
  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 12px;

  margin-bottom: 24px;

  font-family:
    "Manrope",
    Arial,
    sans-serif;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.22em;

  color: #ffffff;

  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.45);
}


/* Left line */

.chp-hero-eyebrow > span:first-child {
  display: block;

  width: 36px;
  height: 1px;

  flex-shrink: 0;

  background:
    rgba(255, 255, 255, 0.88);
}


/* Hide optional right line */

.chp-hero-eyebrow > span:last-child {
  display: none;
}


/* Eyebrow text */

.chp-eyebrow-text {
  width: auto !important;
  height: auto !important;

  background: transparent !important;

  white-space: nowrap;
}


/* =========================================================
   MAIN HEADING
========================================================= */

.chp-hero-content h1 {
  margin: 0;

  font-family:
    "Cormorant Garamond",
    Georgia,
    serif;

  font-size:
    clamp(
      68px,
      8vw,
      118px
    );

  font-weight: 400;

  line-height: 0.84;

  letter-spacing: -0.045em;

  text-align: left;

  color: #fffdf8;

  text-shadow:
    0 2px 5px rgba(0, 0, 0, 0.32),
    0 8px 28px rgba(0, 0, 0, 0.20);
}


/* =========================================================
   GOLD HEADING
========================================================= */

.chp-hero-content h1 span {
  color: #e6c98d;

  font-style: italic;

  text-shadow:
    0 2px 5px rgba(0, 0, 0, 0.34),
    0 8px 25px rgba(0, 0, 0, 0.20);
}


/* =========================================================
   DESCRIPTION
========================================================= */

.chp-hero-description {
  max-width: 560px;

  margin: 32px 0 0;

  font-family:
    "DM Sans",
    Arial,
    sans-serif;

  font-size: 15px;

  line-height: 1.75;

  text-align: left;

  color:
    rgba(
      255,
      255,
      255,
      0.96
    );

  text-shadow:
    0 2px 5px rgba(0, 0, 0, 0.45),
    0 5px 18px rgba(0, 0, 0, 0.22);
}


/* =========================================================
   BUTTON CONTAINER
========================================================= */

.chp-hero-actions {
  position: relative;

  z-index: 10;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 8px;

  margin-top: 38px;
}


/* =========================================================
   COMMON BUTTON
========================================================= */

.chp-btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  height: 38px;
  min-height: 38px;

  padding: 0 16px;

  border: 1px solid transparent;

  border-radius: 999px;

  font-family:
    "Manrope",
    Arial,
    sans-serif;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.09em;

  line-height: 1;

  text-transform: uppercase;

  white-space: nowrap;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}


/* =========================================================
   BUTTON HOVER
========================================================= */

.chp-btn:hover {
  transform: translateY(-2px);
}


/* =========================================================
   PRIMARY BUTTON
========================================================= */

.chp-btn-primary {
  min-width: 165px;

  background:
    linear-gradient(
      135deg,
      rgba(236, 213, 164, 0.98),
      rgba(210, 178, 112, 0.96)
    );

  color: #17130d;

  border-color:
    rgba(
      255,
      255,
      255,
      0.45
    );

  box-shadow:
    0 5px 16px
    rgba(0, 0, 0, 0.15);
}


/* Primary hover */

.chp-btn-primary:hover {
  background:
    linear-gradient(
      135deg,
      #f3dfb6,
      #e0bf7c
    );

  box-shadow:
    0 9px 22px
    rgba(0, 0, 0, 0.20);
}


/* =========================================================
   SECONDARY BUTTON
========================================================= */

.chp-btn-secondary {
  min-width: 165px;

  background:
    rgba(
      255,
      255,
      255,
      0.10
    );

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.72
    );

  color: #ffffff;

  box-shadow:
    0 5px 16px
    rgba(0, 0, 0, 0.10);
}


/* Secondary hover */

.chp-btn-secondary:hover {
  background:
    rgba(
      255,
      255,
      255,
      0.92
    );

  color: #171717;

  border-color:
    rgba(
      255,
      255,
      255,
      0.95
    );

  box-shadow:
    0 9px 22px
    rgba(0, 0, 0, 0.20);
}


/* =========================================================
   HERO BOTTOM
========================================================= */

.chp-hero-bottom {
  position: absolute;

  left: 6vw;
  right: 6vw;

  bottom: 34px;

  z-index: 5;

  display: flex;

  align-items: flex-end;

  justify-content: space-between;
}


/* =========================================================
   BOTTOM TAGS
========================================================= */

.chp-hero-tags {
  display: flex;

  align-items: center;

  gap: 13px;

  font-family:
    "Manrope",
    Arial,
    sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.22em;

  color:
    rgba(
      255,
      255,
      255,
      0.90
    );

  text-shadow:
    0 2px 10px
    rgba(0, 0, 0, 0.30);
}


/* Gold dots */

.chp-hero-tags i {
  display: block;

  width: 3px;
  height: 3px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #e2c98f;
}


/* =========================================================
   SCROLL AREA
========================================================= */

.chp-hero-scroll {
  display: flex;

  align-items: center;

  gap: 14px;
}

.chp-hero-scroll > span {
  font-family:
    "Manrope",
    Arial,
    sans-serif;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.18em;

  color:
    rgba(
      255,
      255,
      255,
      0.84
    );

  text-shadow:
    0 2px 10px
    rgba(0, 0, 0, 0.30);
}


/* =========================================================
   SCROLL BUTTON
========================================================= */

.chp-hero-scroll button {
  width: 42px;
  height: 42px;

  display: grid;

  place-items: center;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.72
    );

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      0.12
    );

  color: #ffffff;

  cursor: pointer;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.chp-hero-scroll button:hover {
  background:
    rgba(
      255,
      255,
      255,
      0.90
    );

  color: #111111;

  transform: translateY(3px);
}


/* =========================================================
   SIDE INDEX
========================================================= */

.chp-hero-index {
  position: absolute;

  right: 28px;
  top: 50%;

  transform:
    translateY(-50%);

  z-index: 5;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 12px;

  font-family:
    "Manrope",
    Arial,
    sans-serif;

  font-size: 9px;

  letter-spacing: 0.12em;

  color:
    rgba(
      255,
      255,
      255,
      0.78
    );

  text-shadow:
    0 2px 10px
    rgba(0, 0, 0, 0.25);
}


/* Index line */

.chp-hero-index div {
  width: 1px;

  height: 55px;

  background:
    rgba(
      255,
      255,
      255,
      0.55
    );
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1000px) {

  .chp-hero-top {
    top: 105px;

    left: 5vw;
    right: 5vw;
  }


  .chp-hero-content {
    left: 5vw;

    width: 82%;
  }


  .chp-hero-content h1 {
    font-size:
      clamp(
        60px,
        10vw,
        92px
      );
  }


  .chp-hero-bottom {
    left: 5vw;
    right: 5vw;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 640px) {

  .chp-hero {
    height: 100svh;

    min-height: 650px;
  }


  /* =====================================================
     VIDEO
  ===================================================== */

  .chp-hero-video {
    object-position: 58% center;
  }


  /* =====================================================
     MOBILE OVERLAY
  ===================================================== */

  .chp-hero-overlay {
    background:
      linear-gradient(
        90deg,
        rgba(20, 18, 14, 0.52) 0%,
        rgba(20, 18, 14, 0.25) 55%,
        rgba(20, 18, 14, 0) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.08) 0%,
        rgba(0, 0, 0, 0.14) 100%
      );
  }


  /* =====================================================
     TOP
  ===================================================== */

  .chp-hero-top {
    top: 88px;

    left: 22px;
    right: 22px;
  }


  .chp-hero-top span {
    font-size: 8px;

    letter-spacing: 0.15em;
  }


  .chp-hero-top span:last-child {
    display: none;
  }


  /* =====================================================
     CONTENT
  ===================================================== */

  .chp-hero-content {
    position: absolute;

    top: 50%;
    left: 22px;

    transform:
      translateY(-50%);

    width:
      calc(100% - 44px);

    margin: 0;

    padding: 0;

    text-align: left;
  }


  /* =====================================================
     EYEBROW
  ===================================================== */

  .chp-hero-eyebrow {
    justify-content: flex-start;

    gap: 8px;

    margin-bottom: 19px;

    font-size: 7px;

    letter-spacing: 0.13em;
  }


  .chp-hero-eyebrow > span:first-child {
    width: 24px;
  }


  /* =====================================================
     HEADING
  ===================================================== */

  .chp-hero-content h1 {
    font-size:
      clamp(
        52px,
        16vw,
        74px
      );

    line-height: 0.88;

    letter-spacing: -0.04em;

    text-align: left;
  }


  /* =====================================================
     DESCRIPTION
  ===================================================== */

  .chp-hero-description {
    max-width: 310px;

    margin: 24px 0 0;

    font-size: 12px;

    line-height: 1.65;

    text-align: left;
  }


  /* =====================================================
     BUTTONS
  ===================================================== */

  .chp-hero-actions {
    display: flex;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 8px;

    margin-top: 30px;
  }


  .chp-btn {
    min-width: 145px;

    width: auto;

    height: 36px;

    min-height: 36px;

    padding: 0 14px;

    font-size: 7px;

    border-radius: 999px;
  }


  .chp-btn-primary,
  .chp-btn-secondary {
    min-width: 145px;
  }


  /* =====================================================
     BOTTOM
  ===================================================== */

  .chp-hero-bottom {
    left: 22px;
    right: 22px;

    bottom: 22px;
  }


  /* Hide tags */

  .chp-hero-tags {
    display: none;
  }


  /* =====================================================
     SCROLL
  ===================================================== */

  .chp-hero-scroll {
    width: 100%;

    justify-content:
      space-between;
  }


  .chp-hero-scroll > span {
    font-size: 8px;
  }


  /* =====================================================
     SIDE INDEX HIDDEN
  ===================================================== */

  .chp-hero-index {
    display: none;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

  .chp-hero-content {
    left: 16px;

    width:
      calc(100% - 32px);
  }


  .chp-hero-content h1 {
    font-size:
      clamp(
        48px,
        15.5vw,
        66px
      );
  }


  .chp-hero-description {
    max-width: 285px;

    font-size: 11.5px;

    line-height: 1.6;
  }


  .chp-hero-actions {
    margin-top: 27px;

    gap: 7px;
  }


  .chp-btn {
    min-width: 135px;

    height: 35px;

    min-height: 35px;

    padding: 0 12px;

    font-size: 6.8px;
  }


  .chp-btn-primary,
  .chp-btn-secondary {
    min-width: 135px;
  }

}
      `}</style>
    </>
  );
};

export default HeroSection;