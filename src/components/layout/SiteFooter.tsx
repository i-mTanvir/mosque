import { contactDetails, footerLinks } from '../../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__cta">
        <div className="site-footer__cta-icon" aria-hidden="true">
          <span className="site-footer__cta-moon" />
          <span className="site-footer__cta-person" />
        </div>
        <div className="site-footer__cta-copy">
          <p>Become a Part of Our Community</p>
          <h2>Inspired? Join Us Right Now!</h2>
        </div>
        <a className="button button--gold site-footer__cta-button" href="#contact">
          Join Community
        </a>
      </div>

      <div className="site-footer__divider" />

      <div className="site-footer__grid">
        <div className="site-footer__brand-block">
          <img
            className="site-footer__logo"
            src="/media/footer-logo.png"
            alt="An Nur footer logo"
          />
        </div>
        <div className="site-footer__info-block">
          <h3>Information</h3>
          <p>
            Elit duis volutpat ligula nulla a getmolestie mi consectetur auctor
            ugue ac tincidunt, var ius felis et, augue lorem. Aliquam accumsan
            fringilla.
          </p>
        </div>
        <div className="site-footer__contact-block">
          <h3>Contact Info</h3>
          <ul className="site-footer__list">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <span className="site-footer__contact-icon">{detail.icon}</span>
                <div>
                  <strong>{detail.label}: {detail.value}</strong>
                  {detail.note ? <span>{detail.note}</span> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__links-block">
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

      <div className="site-footer__divider" />

      <div className="site-footer__bottom">
        <p>
          Muezzin © Copyright 2026, <span>All Rights Reserved</span>
        </p>
        <div className="site-footer__socials" aria-label="Social links">
          <a href="#facebook">f</a>
          <a href="#twitter">t</a>
          <a href="#linkedin">in</a>
          <a href="#instagram">ig</a>
        </div>
      </div>
    </footer>
  )
}
