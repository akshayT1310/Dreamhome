import React from "react";


const FounderDesk = ({ onNavigate }) => {
  const handleContact = () => {
    if (onNavigate) {
      onNavigate("#contact");
      return;
    }

    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="professional-founder" id="founder-desk">
      <div className="professional-founder__container">

        {/* =========================================
            TOP BAR
        ========================================= */}
        <header className="professional-founder__top">
          <div className="professional-founder__eyebrow">
            <span className="professional-founder__dot" />
            <span>FOUNDER'S DESK</span>
          </div>

          <div className="professional-founder__top-right">
            <span>CREATIVE HOME PLAN & DESIGN</span>
            <span className="professional-founder__year">2021</span>
          </div>
        </header>


        {/* =========================================
            MAIN EDITORIAL AREA
        ========================================= */}
        <div className="professional-founder__grid">

          {/* =======================================
              LEFT — STATEMENT
          ======================================= */}
          <div className="professional-founder__statement">

            <p className="professional-founder__small-title">
              DESIGNING WITH INTENT
            </p>

            <h2 className="professional-founder__headline">
              Built on
              <br />
              <em>vision.</em>
              <br />
              Driven by
              <br />
              <strong>purpose.</strong>
            </h2>

            <div className="professional-founder__statement-meta">
              <span>01</span>
              <span className="professional-founder__meta-line" />
              <span>FOUNDER / PRINCIPAL</span>
            </div>

          </div>


          {/* =======================================
              CENTER — PORTRAIT
          ======================================= */}
          <div className="professional-founder__portrait-column">

            <div className="professional-founder__portrait-frame">

              <img
                src="/assets/fndr.jpeg"
                alt="Er. Aman Shah - Founder & Principal Consultant"
                className="professional-founder__portrait"
              />

              <div className="professional-founder__portrait-number">
                01
              </div>

            </div>

            <div className="professional-founder__caption">
              <div>
                <span className="professional-founder__caption-name">
                  ER. AMAN SHAH
                </span>

                <span className="professional-founder__caption-role">
                  FOUNDER & PRINCIPAL CONSULTANT
                </span>
              </div>

              <span className="professional-founder__caption-year">
                2021
              </span>
            </div>

          </div>


          {/* =======================================
              RIGHT — FOUNDER PROFILE
          ======================================= */}
          <div className="professional-founder__profile">

            {/* IDENTITY */}
            <div className="professional-founder__identity">

              <div className="professional-founder__initial">
                AS
              </div>

              <div className="professional-founder__identity-text">
                <h3>Er. Aman Shah</h3>

                <p>
                  Founder & Principal Consultant
                </p>
              </div>

            </div>


            {/* DISCIPLINES */}
            <div className="professional-founder__discipline">
              <span>Civil Engineer</span>
              <i>•</i>
              <span>Architect</span>
              <i>•</i>
              <span>Interior & Structural Consultant</span>
            </div>


            {/* DIVIDER */}
            <div className="professional-founder__divider" />


            {/* QUOTE */}
            <blockquote className="professional-founder__quote">
              “A well-designed space is not simply
              beautiful. It is thoughtful, functional
              and made for the way people live.”
            </blockquote>


            {/* DESCRIPTION */}
            <div className="professional-founder__message">

              <p>
                At Creative Home Plan & Design, our approach
                begins with understanding the people, purpose
                and possibilities behind every project.
              </p>

              <p>
                Architecture, interiors and structural
                expertise come together to create spaces
                that are balanced, practical and timeless.
              </p>

            </div>


            {/* SIGNATURE */}
            <div className="professional-founder__signature">

              <div className="professional-founder__signature-main">
                <span>Aman Shah</span>
                <i />
              </div>

              <span className="professional-founder__signature-role">
                FOUNDER
              </span>

            </div>


            {/* CTA */}
            <button
              type="button"
              className="professional-founder__cta"
              onClick={handleContact}
            >
              <span>DISCUSS YOUR PROJECT</span>

              <span className="professional-founder__cta-icon">
                ↗
              </span>
            </button>

          </div>

        </div>


        {/* =========================================
            EXPERTISE
        ========================================= */}
        <div className="professional-founder__expertise">

          <div className="professional-founder__expertise-heading">

            <div>
              <span>CORE EXPERTISE</span>

              <p>
                One integrated approach
                <br />
                to better spaces.
              </p>
            </div>

            <span className="professional-founder__expertise-count">
              04
            </span>

          </div>


          <div className="professional-founder__expertise-grid">

            {/* 01 */}
            <article className="professional-founder__expertise-item">

              <div className="professional-founder__expertise-number">
                01
              </div>

              <div>
                <h4>Architecture</h4>

                <p>
                  Concept, planning and spatial design
                  developed around purpose and context.
                </p>
              </div>

              <span className="professional-founder__expertise-arrow">
                ↗
              </span>

            </article>


            {/* 02 */}
            <article className="professional-founder__expertise-item">

              <div className="professional-founder__expertise-number">
                02
              </div>

              <div>
                <h4>Interior Design</h4>

                <p>
                  Refined interiors balancing material,
                  light, comfort and functionality.
                </p>
              </div>

              <span className="professional-founder__expertise-arrow">
                ↗
              </span>

            </article>


            {/* 03 */}
            <article className="professional-founder__expertise-item">

              <div className="professional-founder__expertise-number">
                03
              </div>

              <div>
                <h4>Structural Consultancy</h4>

                <p>
                  Practical engineering solutions focused
                  on safety, stability and durability.
                </p>
              </div>

              <span className="professional-founder__expertise-arrow">
                ↗
              </span>

            </article>


            {/* 04 */}
            <article className="professional-founder__expertise-item">

              <div className="professional-founder__expertise-number">
                04
              </div>

              <div>
                <h4>Project Consultancy</h4>

                <p>
                  Professional guidance from the initial
                  idea through planning and execution.
                </p>
              </div>

              <span className="professional-founder__expertise-arrow">
                ↗
              </span>

            </article>

          </div>
        </div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}
        <div className="professional-founder__bottom">

          <span>
            CREATIVE HOME PLAN & DESIGN
          </span>

          <p>
            Designed with purpose.
            <em> Built for living.</em>
          </p>

          <span>
            IND / 2021 — PRESENT
          </span>

        </div>

      </div>
    </section>
  );
};

export default FounderDesk;