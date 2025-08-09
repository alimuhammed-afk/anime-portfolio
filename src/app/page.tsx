import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import LiveStats from '@/components/LiveStats'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Portfolio />
      <div id="stats">
        <LiveStats />
      </div>
      <Services />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
