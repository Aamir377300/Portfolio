import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf } from 'react-icons/fa'
import './Resume.css'
import myResume from '../Assest/latestResume.pdf' // <-- Change this path to your file name

const Resume = () => {
  const handleDownload = () => {
    // Use the imported variable directly
    const resumeUrl = myResume
    
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Aamir_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="resume" id="resume">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">Download my detailed resume</p>
        </motion.div>
        
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
              Download my comprehensive resume that includes my work experience, 
              skills, education, and achievements in detail.
            </p>
            
            <motion.button 
              className="resume-download-btn"
              onClick={handleDownload}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.button>
            
            <div className="resume-info">
              <p><strong>Format:</strong> PDF</p>
              <p><strong>Last Updated:</strong> Aug 2025</p>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
