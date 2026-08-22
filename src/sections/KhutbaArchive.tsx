import { useEffect, useMemo, useState } from 'react'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'

const posts = [
  { title: 'মসজিদ: তাকওয়া ও ঐক্যের কেন্দ্র', theme: 'ঈমান ও সমাজ', date: '১৫ আগস্ট ২০২৬', image: '/media/second-section.png' },
  { title: 'সদকাহ জারিয়াহর মর্যাদা', theme: 'আখিরাতের প্রস্তুতি', date: '০৮ আগস্ট ২০২৬', image: '/media/goal.png' },
  { title: 'রমজানের শিক্ষা ও আত্মশুদ্ধি', theme: 'পবিত্র মাস', date: '২৫ জুলাই ২০২৬', image: '/media/hero3.png' },
  { title: 'আল্লাহর ঘরের মর্যাদা', theme: 'হাদিস ও শিক্ষা', date: '১১ জুলাই ২০২৬', image: '/media/hero2.png' },
  { title: 'নামাজ: মুমিনের মেরাজ', theme: 'ইবাদত', date: '২০ জুন ২০২৬', image: '/media/hero1.png' },
  { title: 'পরিবারে ইসলামী মূল্যবোধ', theme: 'জীবন ও সমাজ', date: '০৯ মে ২০২৬', image: '/media/hero4.png' },
]

export function KhutbaArchive() {
  const [query, setQuery] = useState(''); const [month, setMonth] = useState('all'); const [selected, setSelected] = useState<string | null>(null)
  const filtered = useMemo(() => posts.filter((post) => post.title.includes(query) || post.theme.includes(query)).filter((post) => month === 'all' || post.date.includes(month)), [query, month])
  useEffect(() => { const handles = Array.from(document.querySelectorAll<HTMLElement>('.archive-card__image span')); handles.forEach((el,index) => el.onclick = () => setSelected(filtered[index]?.title || null)); return () => handles.forEach((el) => { el.onclick = null }) }, [filtered])
  useEffect(() => { const frame = document.querySelector<HTMLIFrameElement>('.video-modal iframe'); if (frame) frame.src = 'https://www.youtube.com/embed/RCKCeNxvgsQ' }, [selected])
  return <div className="archive-page"><SiteHeader /><main className="archive-main"><div className="archive-hero"><p className="section-title__eyebrow">জুমার খুতবা ও ইসলামি লেখা</p><h1>জ্ঞান, অনুপ্রেরণা ও আমলের কথা</h1><p>আমাদের সকল খুতবা, আলোচনা ও ইসলামি পোস্ট এক জায়গায়।</p></div><div className="archive-tools"><label><span>খুঁজুন</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="খুতবা বা বিষয় খুঁজুন..." /></label><label><span>তারিখ অনুযায়ী</span><select value={month} onChange={(event) => setMonth(event.target.value)}><option value="all">সব তারিখ</option><option value="আগস্ট">আগস্ট ২০২৬</option><option value="জুলাই">জুলাই ২০২৬</option><option value="জুন">জুন ২০২৬</option><option value="মে">মে ২০২৬</option></select></label></div><div className="archive-grid">{filtered.map((post) => <article className="archive-card" key={post.title}><div className="archive-card__image"><img src={post.image} alt="" /><span>▶</span></div><div className="archive-card__body"><p>{post.theme}</p><h2>{post.title}</h2><time>{post.date}</time><a href="#video" onClick={(event)=>{event.preventDefault();setSelected(post.title)}}>ভিডিও দেখুন ↗</a></div></article>)}</div>{filtered.length === 0 && <p className="archive-empty">কোনো লেখা পাওয়া যায়নি।</p>}{selected && <div className="video-modal" onClick={()=>setSelected(null)}><div className="video-modal__content" onClick={(event)=>event.stopPropagation()}><button className="video-modal__close" onClick={()=>setSelected(null)}>বন্ধ করুন</button><div className="video-modal__frame-wrap"><iframe title={selected} src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen /></div></div></div>}</main><SiteFooter /></div>
}
