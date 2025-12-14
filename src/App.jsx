import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import MarketPrices from './components/MarketPrices'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <MarketPrices />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

