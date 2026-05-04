import { useState, useEffect } from 'react'
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
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] overflow-x-hidden">
      <Header isDark={isDark} toggleTheme={() => setIsDark(d => !d)} />
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
