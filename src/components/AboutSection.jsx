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

        {/* TOP BAR */}
        <div className="professional-founder__top">
          <div className="professional-founder__eyebrow">
            <span className="professional-founder__dot" />
            FOUNDER'S DESK
          </div>

          <div className="professional-founder__top-right">
            <span>CREATIVE HOME PLAN & DESIGN</span>
            <span className="professional-founder__year">2021</span>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="professional-founder__grid">

          {/* LEFT */}
          <div className="professional-founder__left">

            

            <div className="professional-founder__heading-wrap">
              <p className="professional-founder__small-title">
                DESIGNING WITH INTENT
              </p>

              <h2>
                Built on
                <br />
                <em>vision.</em>
                <br />
                Driven by
                <br />
                <strong>purpose.</strong>
              </h2>
            </div>

          </div>

          {/* RIGHT */}
          <div className="professional-founder__right">

            {/* FOUNDER IDENTITY */}
            <div className="professional-founder__identity">

              <div className="professional-founder__initial">
                AS
              </div>

              <div>
                <p className="professional-founder__name">
                  Er. Aman Shah
                </p>

                <p className="professional-founder__position">
                  Founder & Principal Consultant
                </p>
              </div>

            </div>

            <div className="professional-founder__discipline">
              Civil Engineer
              <span>•</span>
              Architect
              <span>•</span>
              Interior & Structural Consultant
            </div>

            {/* LINE */}
            <div className="professional-founder__line" />

            {/* MESSAGE */}
            <div className="professional-founder__message">

              <p className="professional-founder__quote">
                “A well-designed space is not simply
                beautiful. It is thoughtful, functional
                and made for the way people live.”
              </p>

              <p className="professional-founder__body">
                At Creative Home Plan & Design, our approach
                begins with understanding the people,
                purpose and possibilities behind every project.
                Architecture, interiors and structural
                expertise are brought together to create
                spaces that are balanced, practical and
                timeless.
              </p>

              <p className="professional-founder__body">
                From the first concept to the final detail,
                every decision is guided by clarity,
                functionality and long-term value.
              </p>

            </div>

            {/* SIGNATURE AREA */}
            <div className="professional-founder__signature">

              <div>
                <span className="professional-founder__signature-name">
                  Aman Shah
                </span>

                <span className="professional-founder__signature-line" />
              </div>

              <span className="professional-founder__signature-role">
                Founder
              </span>

            </div>

            {/* CTA */}
            <button
              type="button"
              className="professional-founder__cta"
              onClick={handleContact}
            >
              <span>DISCUSS YOUR PROJECT</span>

              <span className="professional-founder__cta-arrow">
                ↗
              </span>
            </button>

          </div>
        </div>

        {/* PROFESSIONAL EXPERTISE */}
        <div className="professional-founder__expertise">

          <div className="professional-founder__expertise-intro">
            <span>CORE EXPERTISE</span>

            <p>
              One integrated approach
              <br />
              to better spaces.
            </p>
          </div>

          <div className="professional-founder__expertise-grid">

            <article>
              <span>01</span>

              <div>
                <h3>Architecture</h3>
                <p>
                  Concept, planning and spatial design
                  developed around purpose and context.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <h3>Interior Design</h3>
                <p>
                  Refined interiors balancing material,
                  light, comfort and functionality.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <h3>Structural Consultancy</h3>
                <p>
                  Practical engineering solutions focused
                  on safety, stability and durability.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>

              <div>
                <h3>Project Consultancy</h3>
                <p>
                  Professional guidance from the initial
                  idea through planning and execution.
                </p>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderDesk;