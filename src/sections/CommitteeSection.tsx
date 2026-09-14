import { useEffect } from 'react'

const leaders = [
  {
    image: '0.webp',
    role: 'প্রতিষ্ঠাতা',
    name: 'মরহুম মোঃ হানিফ সাহেব',
    bio: 'এই মসজিদ ও কমপ্লেক্সের সম্মানিত প্রতিষ্ঠাতা। তার আন্তরিক উদ্যোগ, অক্লান্ত ত্যাগ ও দ্বীনি ভালোবাসায় প্রতিষ্ঠিত হয়েছে এই প্রতিষ্ঠান। আল্লাহ তাআলা তার এই মহৎ খেদমত কবুল করুন এবং তাঁকে জান্নাতুল ফেরদাউসের সর্বোচ্চ মাকাম দান করুন।',
    type: 'founder'
  },
  {
    image: '1m.webp',
    role: 'উদ্ভাবক',
    name: 'মরহুম সৈয়দ আহমেদ মোল্লা',
    bio: 'এই মসজিদ ও সেবাকেন্দ্রের স্বপ্নদ্রষ্টা ও উদ্ভাবক। তার দূরদর্শিতা, ইখলাস ও মানুষের কল্যাণে অটুট নিষ্ঠা আজও আমাদের পথ দেখায়। আল্লাহ তাঁকে জান্নাতুল ফেরদাউস নসিব করুন।',
    type: 'innovator'
  }
]

const generalMembers = [
  { image: '2m.webp', role: 'ইমাম ও খতিব', name: 'মোঃ আমিনুল এহছান হাসান' },
  { image: '3m.webp', role: 'মুয়াজ্জিন', name: 'মোঃ শাহিন আলম' },
  { image: '3.5m.webp', role: 'খাদেম', name: 'মোঃ আরমান হোসাইন' },
  { image: '4m.webp', role: 'সভাপতি', name: 'দারাজ মাহমুদ' },
  { image: '4.5m.webp', role: 'সিনিয়র সহ-সভাপতি', name: 'মোঃ মিজানুর রহমান' },
  { image: '5m.webp', role: 'সহ-সভাপতি', name: 'সৌরভ হোসেন' },
  { image: '6m.webp', role: 'সহ-সভাপতি', name: 'মোঃ জাহাঙ্গীর আলম' },
  { image: '7m.webp', role: 'সেক্রেটারি', name: 'হোসেন আহমেদ মাস্টার' },
  { image: '7.5m.webp', role: 'সহ-সেক্রেটারি', name: 'নাচিমুল হক সুমন' },
  { image: '8m.webp', role: 'কোষাধ্যক্ষ', name: 'ইব্রাহিম খলিল' },
  { image: '9m.webp', role: 'সহকারী কোষাধ্যক্ষ', name: 'মোঃ সুমন হোসাইন' },
]

export function CommitteeSection() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.committee-reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.14 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="committee-section" id="committee">
      <div className="section-title section-title--centered committee-reveal">
        <p className="section-title__eyebrow">আমাদের কমিটি</p>
        <h2>যারা আমাদের পথচলার সঙ্গী</h2>
        <p>ইখলাস, আমানতদারি ও সেবার আদর্শে নিবেদিত আমাদের কমিটি মেম্বারবৃন্দ।</p>
      </div>

      {leaders.map((leader) => (
        <article
          className={`committee-founder committee-founder--${leader.type} committee-reveal`}
          key={leader.image}
        >
          <div className="committee-founder__portrait">
            <img
              src={`/media/committee members/${leader.image}`}
              alt={leader.role}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="committee-founder__copy">
            <p className="committee-card__role">{leader.role}</p>
            <h3>{leader.name}</h3>
            <p>{leader.bio}</p>
          </div>
        </article>
      ))}

      <div className="committee-rows">
        {[
          generalMembers.slice(0, 3),
          generalMembers.slice(3, 5),
          generalMembers.slice(5, 8),
          generalMembers.slice(8, 11),
        ].map((row, rowIndex) => (
          <div className={`committee-row committee-row--${row.length}`} key={rowIndex}>
            {row.map((member, index) => (
              <article
                className="committee-card committee-reveal"
                style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}
                key={member.image}
              >
                <div className="committee-card__image">
                  <img
                    src={`/media/committee members/${member.image}`}
                    alt={member.role}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

