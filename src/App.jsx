import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#home" className="text-2xl font-bold text-white">Hassan Jumaa</a>
              <p className="mt-4 text-sm leading-6 text-gray-400">
                Data analyst and developer building dashboards, insight workflows, and responsive web tools with real business value.
              </p>
              <div className="mt-5 flex gap-4 text-sm font-semibold">
                <a href="https://github.com/Riq-wq" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/mrisa-juma-56a600416" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
                <a href="mailto:jumaah933@gmail.com" className="hover:text-cyan-300 transition-colors">Email</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-cyan-300 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-300 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Featured Work</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Madhav Ecommerce Sales Dashboard</a></li>
                <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Customer Shopping Behavior Analysis</a></li>
                <li><a href="#projects" className="hover:text-cyan-300 transition-colors">ImpactHub Foundation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Availability</h4>
              <p className="text-sm text-gray-400 mb-4">
                Open to data analyst and BI roles, plus freelance dashboard and web projects. I typically respond within 24 hours.
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for new opportunities
              </span>
            </div>
          </div>

          <div className="border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Hassan Jumaa. All rights reserved.</p>
              <p>Built with React, Vite &amp; Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
