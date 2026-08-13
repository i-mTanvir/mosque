import { contactDetails, footerLinks } from '../../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__grid">
        <div className="site-footer__brand-block">
          <div className="brand-badge brand-badge--footer">
            <span>AN</span>
          </div>
          <p>
            Masjid is a spiritual home built for prayer, learning, charity, and
            gathering together as one community.
          </p>
        </div>
        <div>
          <h3>Information</h3>
          <p>
            We also welcome families, students, and visitors through weekly circles,
            Quran learning, and community support.
          </p>
        </div>
        <div>
          <h3>Contact Info</h3>
          <ul className="site-footer__list">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="site-footer__links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>Masjid Copyright 2026. All rights reserved.</p>
        <div className="site-footer__socials" aria-label="Social links">
          <a href="#facebook">Fb</a>
          <a href="#twitter">Tw</a>
          <a href="#linkedin">In</a>
          <a href="#youtube">Yt</a>
        </div>
      </div>
    </footer>
  )
}
