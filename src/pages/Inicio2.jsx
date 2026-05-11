import Hero from '../components/sections/Hero'
import KeyBenefitsV2 from '../components/sections/KeyBenefitsV2'
import PainPoints from '../components/sections/PainPoints'
import Certifications from '../components/sections/Certifications'
import TransportSpotlight from '../components/sections/TransportSpotlight'
import AboutBanner from '../components/sections/AboutBanner'
import SolutionsShowcase from '../components/sections/SolutionsShowcase'
import ModulesOverview from '../components/sections/ModulesOverview'
import TrustStats from '../components/sections/TrustStats'
import Testimonials from '../components/sections/Testimonials'
import GetStarted from '../components/sections/GetStarted'

export default function Inicio2() {
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
