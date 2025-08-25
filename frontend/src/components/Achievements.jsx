import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa'
import NEC from '../Assest/Certificate/NEC.png'
import HTML_CSS from '../Assest/Certificate/HTML_CSS.png'
import java from '../Assest/Certificate/java.png'
import JS from '../Assest/Certificate/JS.png'
import Postman from '../Assest/Certificate/Postman.png'
import Wadhwani from '../Assest/Certificate/Wadhwani.png'

import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'NEC from IIT Bombay',
      description: 'Successfully participated in the National Entrepreneurship Challenge (NEC), a competition conducted by IIT Bombay. After clearing multiple rounds of tasks and challenges, I earned this certificate for my contributions to fostering an entrepreneurial spirit at my institution.',
      image: NEC,
      icon: FaTrophy,
      category: 'Entrepreneurship Challenge',
      date: 'November 2024'
    },
    {
      id: 2,
      title: 'Wadhwani Foundation ',
      description: 'Successfully completed a certified workshop on entrepreneurship and business development organized by the Wadhwani Foundation. This achievement highlights my participation in a rigorous program designed to cultivate entrepreneurial thinking and practical business skills.',
      image: Wadhwani,
      icon: FaMedal,
      category: 'Entrepreneurship',
      date: 'December 2024'
    },
    {
      id: 3,
      title: 'HTML & CSS',
      description: 'Successfully completed the HTML & CSS Bootcamp from Lets Upgrade. This certification signifies my foundational knowledge in creating and styling web pages, including a strong grasp of semantic HTML and responsive design using CSS.',
      image: HTML_CSS,
      icon: FaCertificate,
      category: ['Web Development', 'Front-End'],
      date: 'January 2025'
    },
    {
      id: 4,
      title: 'Java Programming Fundamentals Certification',
      description: 'Successfully completed the Java Programming Bootcamp by Lets Upgrade. This certification validates my foundational knowledge of Java, including object-oriented programming (OOP) principles, data structures, and core programming concepts.',
      image: java,
      icon: FaCertificate,
      category: 'java Programming',
      date: 'November 2024'
    },
    {
      id: 5,
      title: 'JavaScript Essentials Badge',
      description: 'Achieved a certificate in JavaScript Essentials from Lets Upgrade. This program solidified my foundational knowledge and practical skills in JavaScript, enabling me to develop interactive and dynamic web experiences.',
      image: JS,
      icon: FaStar,
      category: ['Web Development', 'Front-End', 'Programming'],
      date: 'November 2024'
    },
    {
      id: 6,
      title: 'API Testing with Postman Certification',
      description: 'Achieved a certification in API Testing with Postman. This demonstrates my proficiency in using Postman to test, automate, and document APIs, ensuring their functionality and reliability.',
      image: Postman,
      icon: FaCertificate,
      category: ['API Testing', 'Quality Assurance (QA)', 'Software Development'],
      date: 'December 2024'
    },
    // {
    //   id: 7,
    //   title: 'Best Developer Award 2023',
    //   description: 'Recognized in Bengaluru for outstanding contributions to open source projects and innovative solutions in web development.',
    //   image: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Developer+Award',
    //   icon: FaTrophy,
    //   category: 'Recognition',
    //   date: 'December 2023'
    // },
    // {
    //   id: 8,
    //   title: 'Top Open Source Contributor',
    //   description: 'Acknowledged as a leading contributor to various open source initiatives, with significant contributions made from Bengaluru.',
    //   image: 'https://via.placeholder.com/300x200/4C51EF/FFFFFF?text=Open+Source',
    //   icon: FaStar,
    //   category: 'Open Source',
    //   date: 'December 2023'
    // }
  ]

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Achievements & Certificates</h2>
          <p className="section-subtitle">Recognition for my work and contributions</p>
        </motion.div>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="achievement-image">
                <img src={achievement.image} alt={achievement.title} />
                <div className="achievement-overlay">
                  <div className="achievement-icon">
                    <achievement.icon size={40} />
                  </div>
                </div>
              </div>
              
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <div className="achievement-categories">
                    {Array.isArray(achievement.category) ? (
                      achievement.category.map((cat, catIndex) => (
                        <span key={catIndex} className="achievement-category">{cat}</span>
                      ))
                    ) : (
                      <span className="achievement-category">{achievement.category}</span>
                    )}
                  </div>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-footer">
                  <span className="achievement-date">{achievement.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements