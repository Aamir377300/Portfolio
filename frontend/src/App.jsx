// open source from headers and open source components are also removed

import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Project from './components/Project'
import Achievements from './components/Achievements'
// import Blogs from './components/Blogs'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-animation">
          <h1>Welcome</h1>
          <div className="loading-spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Project />
        <WorkExperience />
        {/* <OpenSource /> */}
        <Achievements />
        {/* <Blogs /> */}
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
