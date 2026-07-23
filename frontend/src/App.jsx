import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contacts from './components/Contacts.jsx'

function App() {
  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <Navbar />
      <main>
        {/* Sections here */}
        <Hero />
        <Projects />
        <Skills />
        <Contacts />

      </main>
      
    </div>
  )
}

export default App