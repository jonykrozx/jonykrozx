import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './lib/LanguageContext'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import KeyBenefitsV2 from './components/sections/KeyBenefitsV2'
import PainPoints from './components/sections/PainPoints'
import Certifications from './components/sections/Certifications'
import TransportSpotlight from './components/sections/TransportSpotlight'
import AboutBanner from './components/sections/AboutBanner'
import SolutionsShowcase from './components/sections/SolutionsShowcase'
import ModulesOverview from './components/sections/ModulesOverview'
import TrustStats from './components/sections/TrustStats'
import Testimonials from './components/sections/Testimonials'
import GetStarted from './components/sections/GetStarted'
import Footer from './components/Footer'
import NosotrosPage from './components/sections/NosotrosPage'

function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <KeyBenefitsV2 />
      <PainPoints bgClass="bg-[#F2F2F2] dark:bg-[#141414]" />
      <Certifications />
      <TransportSpotlight />
      <AboutBanner />
      <SolutionsShowcase />
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
          <Route path="/nosotros" element={<NosotrosPage />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
