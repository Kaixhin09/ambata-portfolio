import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Multimedia from './components/Multimedia.jsx'
import Skills from './components/Skills.jsx'
import Contacts from './components/Contacts.jsx'

function App() {
  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!revealTargets.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-ink font-body text-paper">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Multimedia />
        <Skills />
        <Contacts />
      </main>
      
    </div>
  )
}

export default App