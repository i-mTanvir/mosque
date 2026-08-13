import { SectionTitle } from '../components/common/SectionTitle'
import { pillars } from '../data/site'

export function PillarsSection() {
  return (
    <section className="pillars-section" id="pillars">
      <div className="pillars-section__intro">
        <SectionTitle
          eyebrow="The five pillars of Islam"
          title="Pillars of Islam"
          description="Faith is carried through belief, worship, sacrifice, discipline, and lifelong devotion."
        />
        <p>
          This section mirrors the vertical card rhythm from your reference while
          keeping the content editable from a single data file.
        </p>
      </div>
      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="pillar-card">
            <div className="pillar-card__number">{pillar.icon}</div>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
            <div className="pillar-card__orb" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
