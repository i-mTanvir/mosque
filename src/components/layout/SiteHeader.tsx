import { navigationItems } from '../../data/site'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label="An Nur home">
        <img src="/media/logo.png" alt="An Nur Mosque logo" />
      </a>
      <nav aria-label="Primary navigation">
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
