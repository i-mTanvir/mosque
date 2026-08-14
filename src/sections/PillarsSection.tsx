import { SectionTitle } from '../components/common/SectionTitle'

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
      <div className="pillars-section__image-wrap">
        <img
          className="pillars-section__image"
          src="/media/seven.png"
          alt="Five pillars of Islam visual"
        />
      </div>
    </section>
  )
}
