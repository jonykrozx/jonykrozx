import { useEffect } from 'react'
import { LanguageProvider } from './lib/LanguageContext'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import KeyBenefits from './components/sections/KeyBenefits'
import PainPoints from './components/sections/PainPoints'
import Certifications from './components/sections/Certifications'
import TransportSpotlight from './components/sections/TransportSpotlight'
import AboutBanner from './components/sections/AboutBanner'
import SolutionsGrid from './components/sections/SolutionsGrid'
import ModulesOverview from './components/sections/ModulesOverview'
import TrustStats from './components/sections/TrustStats'
import Testimonials from './components/sections/Testimonials'
import GetStarted from './components/sections/GetStarted'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <KeyBenefits />
        <PainPoints />
        <Certifications />
        <TransportSpotlight />
        <AboutBanner />
        <SolutionsGrid />
        <ModulesOverview />
        <TrustStats />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  )
}

export default App
