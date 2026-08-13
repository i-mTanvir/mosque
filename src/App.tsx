import './styles/app.css'
import { SiteHeader } from './components/layout/SiteHeader'
import { CommunitySection } from './sections/CommunitySection'
import { FeatureSection } from './sections/FeatureSection'
import { HeroSection } from './sections/HeroSection'
import { PillarsSection } from './sections/PillarsSection'
import { PrayerTimesSection } from './sections/PrayerTimesSection'
import { SiteFooter } from './components/layout/SiteFooter'
import { ServicesSection } from './sections/ServicesSection'
import { SupportSection } from './sections/SupportSection'
import { WelcomeSection } from './sections/WelcomeSection'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureSection />
        <WelcomeSection />
        <PrayerTimesSection />
        <SupportSection />
        <ServicesSection />
        <PillarsSection />
        <CommunitySection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
