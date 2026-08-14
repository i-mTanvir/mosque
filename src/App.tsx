import './styles/app.css'
import { SiteHeader } from './components/layout/SiteHeader'
import { FeatureSection } from './sections/FeatureSection'
import { HeroSection } from './sections/HeroSection'
import { PillarsSection } from './sections/PillarsSection'
import { SiteFooter } from './components/layout/SiteFooter'
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
        <SupportSection />
        <PillarsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
