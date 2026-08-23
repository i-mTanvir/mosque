import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6'
import { FiChevronRight, FiMapPin, FiMoon, FiPhone } from 'react-icons/fi'

import { contactDetails, footerLinks, mosqueInfo } from '../../data/site'

const contactIcons = {
  মোবাইল: FiPhone,
  লোকেশন: FiMapPin,
} as const

const socialLinks = [
  { href: '#facebook', label: 'ফেসবুক', icon: FaFacebookF },
  { href: '#twitter', label: 'এক্স', icon: FaXTwitter },
  { href: '#linkedin', label: 'লিংকডইন', icon: FaLinkedinIn },
  { href: '#instagram', label: 'ইনস্টাগ্রাম', icon: FaInstagram },
]

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__cta">
        <FiMoon className="site-footer__cta-icon" aria-hidden="true" />
        <div className="site-footer__cta-copy">
          <p>আমাদের মসজিদের সাথে থাকুন</p>
          <h2>ইবাদত, দ্বীনি শিক্ষা ও সমাজসেবার পথে একসাথে চলুন</h2>
        </div>
        <a className="button button--gold site-footer__cta-button" href="/support">
          অনুদান করুন
        </a>
      </div>

      <div className="site-footer__divider" />

      <div className="site-footer__grid">
        <div className="site-footer__brand-block">
          <img
            className="site-footer__logo"
            src="/media/footer-logo.png"
            alt={`${mosqueInfo.name} এর ফুটার লোগো`}
          />
        </div>

        <div className="site-footer__info-block">
          <h3>পরিচিতি</h3>
          <p>
            {mosqueInfo.name} হলো ইবাদত, জ্ঞানচর্চা, মানবসেবা ও সম্প্রীতির একটি প্রাণবন্ত
            ইসলামি কেন্দ্র। কুরআন-সুন্নাহর আলোকে সমাজে কল্যাণ, দ্বীনি চেতনা ও নৈতিকতার
            বিকাশে আমরা একসাথে কাজ করে যাচ্ছি।
          </p>
        </div>

        <div className="site-footer__contact-block">
          <h3>যোগাযোগ ও ঠিকানা</h3>
          <ul className="site-footer__list">
            {contactDetails.map((detail) => {
              const Icon = contactIcons[detail.label as keyof typeof contactIcons] ?? FiPhone

              return (
                <li key={detail.label}>
                  <span className="site-footer__contact-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{detail.label}</strong>
                    <span>{detail.value}</span>
                    {detail.note ? <span>{detail.note}</span> : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="site-footer__links-block">
          <h3>দ্রুত লিংক</h3>
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
          {mosqueInfo.name} &copy; ২০২৬, <span>সর্বস্বত্ব সংরক্ষিত</span>
        </p>
        <div className="site-footer__socials" aria-label="সামাজিক যোগাযোগের লিংক">
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
