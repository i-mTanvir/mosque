import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'
import { FiChevronRight, FiMail, FiMapPin, FiMoon, FiPhone } from 'react-icons/fi'

import { contactDetails, footerLinks } from '../../data/site'

const contactIcons = {
  Hotline: FiPhone,
  Email: FiMail,
  Address: FiMapPin,
} as const

const socialLinks = [
  { href: '#facebook', label: 'Facebook', icon: FaFacebookF },
  { href: '#twitter', label: 'X', icon: FaXTwitter },
  { href: '#linkedin', label: 'LinkedIn', icon: FaLinkedinIn },
  { href: '#instagram', label: 'Instagram', icon: FaInstagram },
]

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__cta">
        <FiMoon className="site-footer__cta-icon" aria-hidden="true" />
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
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.label as keyof typeof contactIcons] ?? FiPhone

              return (
                <li key={detail.label}>
                  <span className="site-footer__contact-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>
                      {detail.label}: {detail.value}
                    </strong>
                    {detail.note ? <span>{detail.note}</span> : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="site-footer__links-block">
          <h3>Quick Links</h3>
          <ul className="site-footer__links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <FiChevronRight aria-hidden="true" />
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__divider" />

      <div className="site-footer__bottom">
        <p>
          Muezzin &copy; Copyright 2026, <span>All Rights Reserved</span>
        </p>
        <div className="site-footer__socials" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a key={link.label} href={link.href} aria-label={link.label}>
                <Icon aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
