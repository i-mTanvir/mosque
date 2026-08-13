import { prayerTimes } from '../data/site'

export function PrayerTimesSection() {
  return (
    <section className="prayer-times-section">
      <div className="prayer-times-section__header">
        <p className="section-title__eyebrow">Prayer times in nearest states</p>
        <h2>Our Namaz Timings</h2>
      </div>
      <div className="prayer-times-grid">
        {prayerTimes.map((time) => (
          <article key={time.name} className="timing-card">
            <div className="timing-card__diamond">
              <div className="timing-card__content">
                <h3>{time.name}</h3>
                <p>{time.begins}</p>
                <p>{time.iqamah}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
