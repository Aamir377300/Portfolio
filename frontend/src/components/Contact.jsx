import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, 
  FaGithub, FaTwitter, FaGlobe 
} from 'react-icons/fa'
import './Contact.css'
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  // State to manage form submission status
  const [status, setStatus] = useState({
    message: '',
    isSuccess: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Sending...', isSuccess: false });
    
    // Replace with your backend server URL


    try {
      const response = await fetch(`${backendUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ message: 'Thanks for Connecting with Me 😊', isSuccess: true });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
      } else {
        setStatus({ message: data.message || 'Failed to send message. 😞', isSuccess: false });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ message: 'Failed to connect to the server. 😞', isSuccess: false });
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'belalaamirkhan@gmail.com',
      link: 'mailto:belalaamirkhan@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8172830018',
      link: 'tel:+91 8172830018'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Whitefield, Bengluru',
      link: null
    },
    // {
    //   icon: FaGlobe,
    //   label: 'Website',
    //   value: 'www.yourwebsite.com',
    //   link: 'https://www.yourwebsite.com'
    // }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aamir-belal-khan-497b92321/',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/Aamir377300',
      color: '#333'
    },
    {
    icon: FaTwitter,
    label: 'X',
    url: 'https://x.com/Aamir624568',
    color: '#000',      // X logo color
    hoverColor: '#1DA1F2' // subtle blue on hover like X interface
  }
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact Me</h2>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about technology.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ color: social.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={status.message === 'Sending...'}
              >
                {status.message === 'Sending...' ? 'Sending...' : 'Send Message'}
              </motion.button>
              {status.message && (
                <p className={`form-status ${status.isSuccess ? 'success' : 'error'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact