const khutbas = [
  { title: 'মসজিদ: তাকওয়া ও ঐক্যের কেন্দ্র', theme: 'ঈমান ও সমাজ', date: '১৫ মার্চ ২০২৫', image: '/media/second-section.png', href: 'https://www.youtube.com/' },
  { title: 'সদকাহ জারিয়াহর মর্যাদা', theme: 'আখিরাতের প্রস্তুতি', date: '০৮ মার্চ ২০২৫', image: '/media/goal.png', href: 'https://www.youtube.com/' },
  { title: 'রমজানের শিক্ষা ও আত্মশুদ্ধি', theme: 'পবিত্র মাস', date: '০১ মার্চ ২০২৫', image: '/media/hero3.png', href: 'https://www.youtube.com/' },
]

export function KhutbaSection() {
  return <section className="khutba-section" id="khutba"><div className="section-title khutba-section__heading committee-reveal is-visible"><p className="section-title__eyebrow">জুমার খুতবা</p><h2>সাম্প্রতিক খুতবা ও আলোচনা</h2><p>ইসলামি জ্ঞান, আত্মশুদ্ধি ও সমাজ গঠনের গুরুত্বপূর্ণ আলোচনা একসাথে শুনুন।</p></div><div className="khutba-grid">{khutbas.map((item, index) => <article className="khutba-card committee-reveal is-visible" style={{ '--delay': `${index * 90}ms` } as React.CSSProperties} key={item.title}><a href={item.href} target="_blank" rel="noreferrer"><div className="khutba-card__image"><img src={item.image} alt="" /><span className="khutba-card__play">▶</span></div><div className="khutba-card__body"><p className="khutba-card__theme">{item.theme}</p><h3>{item.title}</h3><p className="khutba-card__date">{item.date}</p></div></a></article>)}</div><a className="button button--gold khutba-section__more" href="/khutba">সব খুতবা দেখুন <span aria-hidden="true">↗</span></a></section>
}
