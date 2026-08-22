import { useEffect, useState } from 'react'

import { SectionTitle } from '../components/common/SectionTitle'

const videoEmbedUrl =
  'https://www.youtube.com/embed/zalLv2NY98k?autoplay=1&rel=0'

export function WelcomeSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    if (!isVideoOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVideoOpen])

  return (
    <section className="welcome-section" id="welcome">
      <SectionTitle
        eyebrow="ইসলামিক কেন্দ্রে আপনাকে স্বাগতম"
        title="পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে"
        description=""
        centered
      />
      <div className="welcome-section__body">
        <div className="welcome-section__copy">
          <p>
            আমাদের মসজিদ ইবাদতের আধ্যাত্মিক আশ্রয়, ইসলামি জ্ঞানচর্চার কেন্দ্র
            এবং পরিবার, তরুণ ও প্রতিবেশীদের আপন ঠিকানা। প্রতিদিনের নামাজ,
            কুরআন শিক্ষা, অনুদান ও মানবসেবার মাধ্যমে আমরা ঈমানকে দৃঢ় করতে,
            উত্তম চরিত্র গড়ে তুলতে এবং দয়া, সম্মান ও আন্তরিকতার সঙ্গে সমাজের
            সেবা করতে চাই।
          </p>
          <a className="welcome-section__button" href="#services">
            আরও পড়ুন
          </a>
        </div>

        <div className="welcome-section__points">
          <article className="welcome-point">
            <div className="welcome-point__icon">
              <img src="/media/allah-icon.jpg" alt="আল্লাহর নামের প্রতীক" />
            </div>
            <div>
              <h3>আমাদের স্বপ্ন</h3>
              <p>
                এমন একটি সবার-আপন মসজিদ হওয়া, যা ঈমান জাগ্রত করে, ইসলামি
                দিকনির্দেশনা দেয় এবং প্রতিটি প্রজন্মকে ইবাদত, জ্ঞান ও
                পারস্পরিক সম্প্রীতিতে বেড়ে উঠতে সহায়তা করে।
              </p>
            </div>
          </article>

          <article className="welcome-point">
            <div className="welcome-point__icon">
              <img src="/media/quran-icon.jpg" alt="কুরআনের প্রতীক" />
            </div>
            <div>
              <h3>আমাদের লক্ষ্য</h3>
              <p>
                নামাজ, কুরআন শিক্ষা, দাওয়াহ, অনুদান ও সমাজসেবার মাধ্যমে
                মানুষের আধ্যাত্মিক, শিক্ষাগত ও সামাজিক প্রয়োজন পূরণ করা।
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="welcome-section__image-wrap">
        <button
          className="welcome-section__video-trigger"
          type="button"
          onClick={() => setIsVideoOpen(true)}
          aria-label="মসজিদের ভিডিও চালু করুন"
        >
          <img
            className="welcome-section__image"
            src="/media/salat.png"
            alt="মসজিদে মুসল্লিদের নামাজ আদায়ের দৃশ্য"
          />
          <span className="welcome-section__play-button" aria-hidden="true">
            <span className="welcome-section__play-rings" />
            <span className="welcome-section__play-core">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path d="M9 7.5L17 12L9 16.5V7.5Z" fill="currentColor" />
              </svg>
            </span>
          </span>
        </button>
      </div>

      {isVideoOpen ? (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="মসজিদের ভিডিও প্লেয়ার"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="video-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="video-modal__close"
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="ভিডিও বন্ধ করুন"
            >
              বন্ধ করুন
            </button>
            <div className="video-modal__frame-wrap">
              <iframe
                src={videoEmbedUrl}
                title="Mosque YouTube video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
