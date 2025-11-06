import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'work-experience', label: 'Work Experience' },
    // { id: 'open-source', label: 'Open Source' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact Me' }
  ]

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>Portfolio</h2>
        </motion.div>
        
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
