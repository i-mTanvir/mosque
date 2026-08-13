import { SectionTitle } from '../components/common/SectionTitle'
import { welcomeHighlights } from '../data/site'

export function WelcomeSection() {
  return (
    <section className="welcome-section">
      <SectionTitle
        eyebrow="Welcome to the Islamic center"
        title="In the Name of Allah the Beneficent the Merciful"
        description="From daily prayer to lifelong learning, the mosque serves as a place of peace, reflection, and community care."
        centered
      />
      <div className="welcome-section__highlights">
        {welcomeHighlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <div className="highlight-card__icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="welcome-section__media">
        <div className="arch-image">
          <img src="/sujood.svg" alt="Illustration of worshippers in prayer" />
          <button className="play-button" type="button" aria-label="Play welcome video">
            Play
          </button>
        </div>
      </div>
    </section>
  )
}
