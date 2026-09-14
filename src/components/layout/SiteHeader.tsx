import { mosqueInfo, navigationItems } from '../../data/site'

export function SiteHeader() {
  const onArchive = window.location.pathname === '/khutba'
  const onInnerPage = window.location.pathname !== '/'

  const resolveHref = (href: string) =>
    href === '#top'
      ? '/'
      : href === '#support'
        ? '/support'
        : href === '#contact'
          ? '#contact'
          : onInnerPage && href.startsWith('#')
            ? `/${href}`
            : href

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#contact') {
      event.preventDefault()
      const contactEl = document.getElementById('contact')
      if (!contactEl) return

      // Initial smooth scroll
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', '#contact')

      // Actively track target while scrolling so any late-loading lazy images
      // won't strand the viewport before the footer
      const startTime = Date.now()
      const poller = setInterval(() => {
        const el = document.getElementById('contact')
        if (!el || Date.now() - startTime > 2000) {
          clearInterval(poller)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }

        const rect = el.getBoundingClientRect()
        // If the footer is still below the visible viewport, continue guiding the scroll
        if (rect.top > window.innerHeight) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          // Reached the footer
          clearInterval(poller)
        }
      }, 100)
    }
  }

  return (
    <header className={`site-header${onArchive ? ' site-header--archive' : ''}`}>
      <a className="site-header__brand" href="#top" aria-label={`${mosqueInfo.name} এর হোম`}>
        <img src="/media/logo.webp" alt={`${mosqueInfo.name} এর লোগো`} fetchPriority="high" />
      </a>

      <nav
        id="primary-navigation"
        className="site-header__navigation"
        aria-label="প্রধান নেভিগেশন"
      >
        <ul className="site-header__nav">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className={
                  window.location.pathname === item.href ||
                  (item.href === '#top' && window.location.pathname === '/') ||
                  (item.href === '#support' && window.location.pathname === '/support')
                    ? 'is-active'
                    : ''
                }
                href={resolveHref(item.href)}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a className={window.location.pathname === '/khutba' ? 'is-active' : ''} href="/khutba">
              জুমার খুতবা
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
