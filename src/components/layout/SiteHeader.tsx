import { navigationItems } from '../../data/site'

export function SiteHeader() {
  return (
    <header className="site-header">
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
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
