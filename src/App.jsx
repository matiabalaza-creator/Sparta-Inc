import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sandbox from './components/Sandbox.jsx'
import WorkSection from './components/WorkSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import StyleSwitcher from './components/StyleSwitcher.jsx'
import CustomCursor from './components/CustomCursor.jsx'

export default function App() {
  return (
    <div className="theme-transition min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Sandbox />
        <WorkSection />
        <Contact />
      </main>
      <Footer />
      <StyleSwitcher />
    </div>
  )
}
