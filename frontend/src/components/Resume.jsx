import { motion } from 'framer-motion'
import { FaFilePdf } from 'react-icons/fa'
import './Resume.css'
import myResume from '../Assest/change_resume.pdf'

const Resume = () => {

  const handleViewResume = () => {
    // Opens PDF in a new tab
    window.open(myResume, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="resume" id="resume">
      <div className="container">

        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">View my detailed resume</p>
        </motion.div>
        
        {/* Resume Card */}
        <motion.div 
          className="resume-content"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="resume-card">

            <div className="resume-icon">
              <FaFilePdf size={60} />
            </div>
            
            <h3 className="resume-title">My Resume</h3>
            <p className="resume-description">
              View my complete resume including my education, projects, skills,
              and achievements.
            </p>

            <motion.button 
              className="resume-download-btn"
              onClick={handleViewResume}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.button>
            
            <div className="resume-info">
              <p><strong>Format:</strong> PDF</p>
              <p><strong>Last Updated:</strong>Jan 2026</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Resume