export function FeatureSection() {
  return (
    <section className="feature-section">
      <img
        className="feature-section__image"
        src="/media/second-section.png"
        alt=""
        aria-hidden="true"
      />
      <div className="feature-section__content">
        <h2>Pray to Allah and be confident of a response.</h2>
        <p>
          It is a community center for all.
          <span>The Center is committed to preserving an Islamic.</span>
        </p>
        <a className="feature-section__button" href="#pillars">
          <span className="feature-section__button-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="currentColor" />
              <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#D9A538" />
            </svg>
          </span>
          Listen Holy Quran
        </a>
        <div className="feature-section__dots" aria-hidden="true">
          <span />
          <span />
          <span className="is-active" />
        </div>
      </div>
    </section>
  )
}
