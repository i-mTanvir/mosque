import { useState } from 'react'

import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { mosqueInfo } from '../data/site'

const Copy = ({ value }: { value: string }) => (
  <button
    type="button"
    className="copy-button"
    onClick={() => navigator.clipboard?.writeText(value)}
  >
    কপি
  </button>
)

export function SupportPage() {
  const [privateInfo, setPrivateInfo] = useState(false)

  return (
    <div className="support-page">
      <SiteHeader />

      <main className="support-page__main">
        <section className="support-page__hero">
          <p className="section-title__eyebrow">মসজিদের উন্নয়নে সহযোগিতা করুন</p>
          <h1>ছাদ নির্মাণ, সৌন্দর্যবর্ধন ও সম্প্রসারণের কাজ চলমান</h1>
          <p>{mosqueInfo.name} এর উন্নয়ন কাজে আপনার দান এগিয়ে নিতে সহায়তা করবে।</p>
        </section>

        <section className="support-page__content">
          <div className="support-details">
            <h2>দান করার মাধ্যম</h2>
            <div className="support-method">
              <b>বিকাশ</b>
              <span>
                {mosqueInfo.phone} <Copy value={mosqueInfo.phone} />
              </span>
            </div>
            <div className="support-method">
              <b>নগদ</b>
              <span>
                {mosqueInfo.phone} <Copy value={mosqueInfo.phone} />
              </span>
            </div>
            <div className="support-method">
              <b>রকেট</b>
              <span>
                {mosqueInfo.phone} <Copy value={mosqueInfo.phone} />
              </span>
            </div>
            <div className="support-bank">
              <b>ব্যাংক অ্যাকাউন্ট</b>
              <span>{mosqueInfo.name}</span>
              <span>
                অ্যাকাউন্ট নং: XXXXXXXX <Copy value="XXXXXXXX" />
              </span>
              <span>ব্যাংক: ইসলামী ব্যাংক বাংলাদেশ</span>
            </div>
          </div>

          <form
            className="support-form"
            onSubmit={(event) => {
              event.preventDefault()
              alert('আপনার তথ্য গ্রহণ করা হয়েছে। জাযাকাল্লাহু খাইরান।')
            }}
          >
            <h2>আপনার সহযোগিতার তথ্য</h2>
            <label>
              দানের পরিমাণ (টাকা)
              <input type="number" required placeholder="যেমন: ৫০০০" />
            </label>
            <label>
              রেফারেন্স নম্বর
              <input type="text" required placeholder="অনলাইন ট্রানজেকশন রেফারেন্স" />
            </label>
            <label className={privateInfo ? 'is-hidden' : ''}>
              আপনার নাম
              <input type="text" required placeholder="নাম লিখুন" />
            </label>
            <label className={privateInfo ? 'is-hidden' : ''}>
              মোবাইল নম্বর
              <input type="tel" required placeholder={mosqueInfo.phone} />
            </label>
            <label className="support-private">
              <input
                type="checkbox"
                checked={privateInfo}
                onChange={(event) => setPrivateInfo(event.target.checked)}
              />
              তথ্য গোপন করুন
            </label>
            <button className="button button--gold" type="submit">
              তথ্য জমা দিন
            </button>
          </form>
        </section>

        <section className="support-inspiration">
          <p className="section-title__eyebrow">সদকাহ জারিয়াহ</p>
          <p className="support-hadith">
            “যে ব্যক্তি একটি মসজিদ নির্মাণ করবে, আল্লাহ তার জন্য জান্নাতে একটি ঘর নির্মাণ
            করবেন।”
            <small>সুনানে আন-নাসায়ী, হাদিস নং ৬৮৮</small>
          </p>
          <img className="support-proof" src="/media/goal.png" alt="মসজিদের চলমান কাজ" />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
