export function SupportSection() {
  return (
    <section className="support-section" id="support">
      <div className="support-section__card">
        <img
          className="support-section__image"
          src="/media/goal.png"
          alt=""
          aria-hidden="true"
        />
        <div className="support-section__content">
          <h2>Support Us, We Need Your Help.</h2>
          <p>
            May Allah bless you! Thank you. Those who give in charity spend of
            their goods by night and by day.
          </p>
          <div className="support-section__meters">
            <div>
              <div className="support-section__meter-labels">
                <span>Raised: 29000</span>
                <span>Goal: 50000</span>
              </div>
              <div className="support-section__meter">
                <span style={{ width: '58%' }} />
              </div>
            </div>
          </div>
          <a className="button button--gold" href="#contact">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}
