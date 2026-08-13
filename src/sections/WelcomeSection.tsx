import { SectionTitle } from '../components/common/SectionTitle'

export function WelcomeSection() {
  return (
    <section className="welcome-section">
      <SectionTitle
        eyebrow="Welcome to the Islamic center"
        title="In the Name of Allah the Beneficent the Merciful"
        description=""
        centered
      />
      <div className="welcome-section__body">
        <div className="welcome-section__copy">
          <p>
            Our mosque exists to be a spiritual home for worship, a center for
            Islamic learning, and a place of belonging for families, youth, and
            neighbors. Through daily prayer, Quran study, charity, and
            community service, we aim to strengthen faith, nurture good
            character, and serve the wider society with mercy, respect, and
            sincere care.
          </p>
          <a className="welcome-section__button" href="#services">
            Read More
          </a>
        </div>

        <div className="welcome-section__points">
          <article className="welcome-point">
            <div className="welcome-point__icon">
              <img src="/media/allah-icon.jpg" alt="Allah icon" />
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be a welcoming mosque that inspires faith, provides Islamic
                guidance, and helps every generation grow in worship,
                knowledge, and community belonging.
              </p>
            </div>
          </article>

          <article className="welcome-point">
            <div className="welcome-point__icon">
              <img src="/media/quran-icon.jpg" alt="Quran icon" />
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To serve spiritual, educational, and communal needs through
                prayer, Quran learning, outreach, charity, and positive service
                to the wider society.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
