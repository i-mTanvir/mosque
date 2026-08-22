import { useEffect, useState } from 'react'
const quotes = [
  ['রাসূলুল্লাহ (সাঃ) বলেছেন,', '“যে ব্যক্তি একটি মসজিদ নির্মাণ করবে, যাতে আল্লাহকে স্মরণ করা হবে, আল্লাহ তা\'আলা জান্নাতে তার জন্য একখানা ঘর নির্মাণ করবেন।”', 'সুনানে আন-নাসায়ী, হাদিস নং ৬৮৮'],
  ['রাসূলুল্লাহ (সাঃ) বলেছেন,', '“কেবল আল্লাহর সন্তুষ্টির উদ্দেশ্যে কেউ মসজিদ নির্মাণ করলে আল্লাহ তা\'আলাও তার জন্য জান্নাতের মধ্যে অনুরূপ একখানা ঘর তৈরি করবেন।”', 'সহিহ বুখারী, হাদিস নং ৪৫০; সহিহ মুসলিম, হাদিস নং ১০৭৭'],
  ['রাসূলুল্লাহ (সাঃ) বলেছেন,', '“আদম সন্তান যখন মারা যায়, তখন তার তিন প্রকার আমল ছাড়া অন্য সব রকম আমলের ধারা বন্ধ হয়ে যায়; সাদকাহ জারিয়াহ, অথবা ইল্ম যা দ্বারা উপকৃত হওয়া যায়, অথবা সুসন্তান যে তার জন্য নেক দু\'আ করতে থাকে।”', 'মুসলিম ১৬৩১, তিরমিযী ১৩৭৬, নাসায়ী ৩৬৫১, আবু দাউদ ২৮৮০'],
]
export function FeatureSection() {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % quotes.length), 6000); return () => window.clearInterval(timer) }, [])
  const quote = quotes[active]
  return <section className="feature-section" id="services"><img className="feature-section__image" src="/media/second-section.png" alt="" aria-hidden="true" /><div className="feature-section__content"><div className="feature-quote" key={active}><h2>{quote[0]}</h2><p>{quote[1]}<span>{quote[2]}</span></p></div><a className="feature-section__button" href="#pillars"><span className="feature-section__button-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="currentColor" /><path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#D9A538" /></svg></span>পবিত্র কুরআন শুনুন</a><div className="feature-section__dots" aria-hidden="true">{quotes.map((_, index) => <span className={index === active ? 'is-active' : ''} key={index} />)}</div></div></section>
}
