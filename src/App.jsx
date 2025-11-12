import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Showcase from './components/Showcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
