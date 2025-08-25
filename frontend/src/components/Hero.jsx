import { motion } from 'framer-motion'
import './Hero.css'
import profilePic from '../Assest/profile_pic.png'; // <-- Import your profile picture here


const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Aamir Belal Khan</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Student Developer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative web solutions and contributing to open source projects. 
            I love turning ideas into reality through clean, efficient code and beautiful user experiences.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
            >
              View Resume
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="profile-picture">
            {/* Replace the placeholder div with an img tag */}
            <img 
              src={profilePic} 
              alt="Aamir Belal Khan's profile picture" 
              className="profile-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero