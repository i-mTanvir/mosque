import { SectionTitle } from '../components/common/SectionTitle'

export function PillarsSection() {
  return (
    <section className="pillars-section" id="pillars">
      <div className="pillars-section__intro">
        <SectionTitle
          eyebrow="ইসলামের পাঁচটি স্তম্ভ"
          title="ইসলামের স্তম্ভসমূহ"
          description="বিশ্বাস, ইবাদত, ত্যাগ, শৃঙ্খলা ও আজীবন নিষ্ঠার মাধ্যমে ঈমানের প্রকাশ ঘটে।"
        />
        <p>
          ইসলামের মৌলিক স্তম্ভগুলো সম্পর্কে জানুন এবং সঠিকভাবে জীবনযাপনে
          সেগুলোর শিক্ষা কাজে লাগান।
        </p>
      </div>
      <div className="pillars-section__image-wrap">
        <img
          className="pillars-section__image"
          src="/media/seven.png"
          alt="ইসলামের পাঁচটি স্তম্ভের চিত্র"
        />
      </div>
    </section>
  )
}
