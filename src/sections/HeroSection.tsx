const heroImages = [
  '/media/hero1.png',
  '/media/hero2.png',
  '/media/hero3.png',
  '/media/hero4.png',
]

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__slides" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="hero-section__slide"
            style={{ animationDelay: `${index * 4}s`, backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero-section__overlay">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">Welcome to</p>
          <h1>AN-NUR</h1>
          <p className="hero-section__text">
            The Islamic center for prayer, learning, community service, and spiritual growth.
          </p>
        </div>
      </div>
    </section>
  )
}
