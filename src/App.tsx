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

    if (!hash) {
      return
    }

    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ block: 'start' })
    }, 500)

    return () => window.clearTimeout(timer)
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
