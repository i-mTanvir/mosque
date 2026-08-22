import { navigationItems } from '../../data/site'

export function SiteHeader() {
  const onArchive = window.location.pathname === '/khutba'
  const onInnerPage = window.location.pathname !== '/'
  const resolveHref = (href: string) => href === '#support' ? '/support' : (onInnerPage && href.startsWith('#') ? `/${href}` : href)
  return (
    <header className={`site-header${onArchive ? ' site-header--archive' : ''}`}>
      <a className="site-header__brand" href="#top" aria-label="আশরাফিয়া জামে মসজিদের হোম">
        <img src="/media/logo.png" alt="আশরাফিয়া জামে মসজিদের লোগো" />
      </a>
      <nav
        id="primary-navigation"
        className="site-header__navigation"
        aria-label="প্রধান নেভিগেশন"
      >
        <ul className="site-header__nav">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={resolveHref(item.href)}>{item.label}</a>
            </li>
          ))}
          <li><a href="/khutba">জুমার খুতবা</a></li>
        </ul>
      </nav>
    </header>
  )
}
