import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio2 from './pages/Inicio2'
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

function HomePage() {
  return (
    <main className="overflow-x-hidden">
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
  )
}

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio-2" element={<Inicio2 />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
