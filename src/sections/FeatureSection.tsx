export function FeatureSection() {
  return (
    <section className="feature-section" id="services">
      <img
        className="feature-section__image"
        src="/media/second-section.png"
        alt=""
        aria-hidden="true"
      />
      <div className="feature-section__content">
        <h2>আল্লাহর কাছে দোয়া করুন এবং তাঁর সাড়া পাওয়ার আশায় দৃঢ় থাকুন।</h2>
        <p>
          এটি সবার জন্য উন্মুক্ত একটি মিলনকেন্দ্র।
          <span>ইসলামি মূল্যবোধ সংরক্ষণে এই কেন্দ্র অঙ্গীকারবদ্ধ।</span>
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
          পবিত্র কুরআন শুনুন
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
