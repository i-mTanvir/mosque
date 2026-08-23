const heroImages = [
  '/media/Hero Images/1.png',
  '/media/Hero Images/2.png',
  '/media/Hero Images/3.png',
  '/media/Hero Images/4.png',
  '/media/Hero Images/5.png',
  '/media/Hero Images/6.png',
].map((path) => encodeURI(path))

const slideDuration = 4

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__slides" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="hero-section__slide"
            style={{
              animationDelay: `${index * slideDuration}s`,
              animationDuration: `${heroImages.length * slideDuration}s`,
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      <div className="hero-section__overlay">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">স্বাগতম</p>
          <h1>
            আশ্রাফিয়া
            <br />
            জামে মসজিদ
          </h1>
          <p className="hero-section__text">
            নামাজ, জ্ঞানচর্চা, মানবসেবা ও আত্মিক উন্নতির এক প্রাণবন্ত ইসলামি কেন্দ্র।
          </p>
        </div>
      </div>
    </section>
  )
}
