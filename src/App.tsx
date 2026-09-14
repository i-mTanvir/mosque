import { useEffect } from 'react'

import './styles/app.css'
import { SiteHeader } from './components/layout/SiteHeader'
import { FeatureSection } from './sections/FeatureSection'
import { HeroSection } from './sections/HeroSection'
import { PillarsSection } from './sections/PillarsSection'
import { SiteFooter } from './components/layout/SiteFooter'
import { SupportSection } from './sections/SupportSection'
import { WelcomeSection } from './sections/WelcomeSection'
import { CommitteeSection } from './sections/CommitteeSection'
import { KhutbaSection } from './sections/KhutbaSection'
import { KhutbaArchive } from './sections/KhutbaArchive'
import { SupportPage } from './sections/SupportPage'
import { DonationPopup } from './components/DonationPopup'
import { HistorySection } from './sections/HistorySection'

function App() {
  if (window.location.pathname === '/khutba') return <KhutbaArchive />
  if (window.location.pathname === '/support') return <SupportPage />
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const scrollToTarget = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    scrollToTarget()
    const t1 = window.setTimeout(scrollToTarget, 100)
    const t2 = window.setTimeout(scrollToTarget, 400)
    const t3 = window.setTimeout(scrollToTarget, 1000)

    window.addEventListener('load', scrollToTarget)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.removeEventListener('load', scrollToTarget)
    }
  }, [])

  return (
    <div className="site-shell"><DonationPopup />
      <SiteHeader />
      <main>
        <HeroSection />
        <HistorySection />
        <FeatureSection />
        <WelcomeSection />
        <SupportSection />
        <CommitteeSection />
        <KhutbaSection />
        <PillarsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
