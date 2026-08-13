export function SupportSection() {
  return (
    <section className="support-section" id="support">
      <div className="support-section__card">
        <p className="section-title__eyebrow">Support us, we need your help.</p>
        <h2>Support us, we need your help.</h2>
        <p>
          May Allah bless your charity. Those who give with sincerity spend in
          goodness night and day.
        </p>
        <div className="support-section__meters">
          <div>
            <div className="support-section__meter-labels">
              <span>Raised 45,000</span>
              <span>Goal 80,000</span>
            </div>
            <div className="support-section__meter">
              <span style={{ width: '56%' }} />
            </div>
          </div>
        </div>
        <a className="button button--gold" href="#contact">
          Donate Now
        </a>
      </div>
    </section>
  )
}
