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
    <section className="welcome-section">
      <SectionTitle
        eyebrow="Welcome to the Islamic center"
        title="In the Name of Allah the Beneficent the Merciful"
        description=""
        centered
      />
      <div className="welcome-section__body">
        <div className="welcome-section__copy">
          <p>
            Our mosque exists to be a spiritual home for worship, a center for
            Islamic learning, and a place of belonging for families, youth, and
            neighbors. Through daily prayer, Quran study, charity, and
            community service, we aim to strengthen faith, nurture good
            character, and serve the wider society with mercy, respect, and
            sincere care.
          </p>
          <a className="welcome-section__button" href="#services">
            Read More
          </a>
        </div>

        <div className="welcome-section__points">
          <article className="welcome-point">
            <div className="welcome-point__icon">
              <img src="/media/allah-icon.jpg" alt="Allah icon" />
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To be a welcoming mosque that inspires faith, provides Islamic
                guidance, and helps every generation grow in worship,
                knowledge, and community belonging.
              </p>
            </div>
          </article>

          <article className="welcome-point">
            <div className="welcome-point__icon">
              <img src="/media/quran-icon.jpg" alt="Quran icon" />
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>
                To serve spiritual, educational, and communal needs through
                prayer, Quran learning, outreach, charity, and positive service
                to the wider society.
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
          aria-label="Play mosque video"
        >
          <img
            className="welcome-section__image"
            src="/media/salat.png"
            alt="People performing salah in the mosque"
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
          aria-label="Mosque video player"
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
              aria-label="Close video"
            >
              Close
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
