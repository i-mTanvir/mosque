import { SectionTitle } from '../components/common/SectionTitle'
import { services, stats } from '../data/site'

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <SectionTitle
        eyebrow="What we offer"
        title="Our Services"
        description="Programs and care that make the mosque a daily center for worship, service, and belonging."
        centered
      />
      <div className="services-section__layout">
        <div className="services-section__column">
          {services.slice(0, 2).map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__icon">
                <span>{service.icon}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="services-section__portrait">
          <div className="ornate-frame ornate-frame--large">
            <img src="/service-portrait.svg" alt="Portrait illustration for mosque services" />
          </div>
        </div>
        <div className="services-section__column">
          {services.slice(2).map((service) => (
            <article key={service.title} className="service-card service-card--right">
              <div className="service-card__icon">
                <span>{service.icon}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="stats-row">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <p className="stat-card__value">{stat.value}</p>
            <h3>{stat.label}</h3>
            <p>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
