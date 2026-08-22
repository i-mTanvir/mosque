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
          <h2>আমাদের সহায়তা করুন, আপনার সহযোগিতা প্রয়োজন।</h2>
          <p>
            আল্লাহ আপনাকে বরকত দিন! যারা দান করেন, তারা রাত ও দিনে নিজেদের
            সম্পদ থেকে ব্যয় করেন—আপনার অনুদানও আমাদের সেবার কাজে সহায়তা করবে।
          </p>
          <div className="support-section__meters">
            <div>
              <div className="support-section__meter-labels">
                <span>সংগৃহীত: ২৯,০০০</span>
                <span>লক্ষ্য: ৫০,০০০</span>
              </div>
              <div className="support-section__meter">
                <span style={{ width: '58%' }} />
              </div>
            </div>
          </div>
          <a className="button button--gold" href="#contact">
            এখনই অনুদান দিন
          </a>
        </div>
      </div>
    </section>
  )
}
