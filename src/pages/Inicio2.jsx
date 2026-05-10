import Hero from '../components/sections/Hero'
import KeyBenefits from '../components/sections/KeyBenefits'
import PainPoints from '../components/sections/PainPoints'
import Certifications from '../components/sections/Certifications'
import TransportSpotlight from '../components/sections/TransportSpotlight'
import AboutBanner from '../components/sections/AboutBanner'
import SolutionsGrid from '../components/sections/SolutionsGrid'
import ModulesOverview from '../components/sections/ModulesOverview'
import TrustStats from '../components/sections/TrustStats'
import Testimonials from '../components/sections/Testimonials'
import GetStarted from '../components/sections/GetStarted'

export default function Inicio2() {
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
