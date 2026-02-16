import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa'
import NEC from '../Assest/Certificate/NEC.png'
import HTML_CSS from '../Assest/Certificate/HTML_CSS.png'
// import java from '../Assest/Certificate/java.png'
// import JS from '../Assest/Certificate/JS.png'
import Postman from '../Assest/Certificate/Postman.png'
import Wadhwani from '../Assest/Certificate/Wadhwani.png'
import Hacktoberfest from '../Assest/Certificate/Hacktoberfest.png'
import leetcode_50day from '../Assest/leetcode_50day.png'
import leetcode_Dec from '../Assest/leetcode_Dec.png'

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
    // {
    //   id: 3,
    //   title: 'HTML & CSS',
    //   description: 'Successfully completed the HTML & CSS Bootcamp from Lets Upgrade. This certification signifies my foundational knowledge in creating and styling web pages, including a strong grasp of semantic HTML and responsive design using CSS.',
    //   image: HTML_CSS,
    //   icon: FaCertificate,
    //   category: ['Web Development', 'Front-End'],
    //   date: 'January 2025'
    // },
    // {
    //   id: 4,
    //   title: 'Java Programming Fundamentals Certification',
    //   description: 'Successfully completed the Java Programming Bootcamp by Lets Upgrade. This certification validates my foundational knowledge of Java, including object-oriented programming (OOP) principles, data structures, and core programming concepts.',
    //   image: java,
    //   icon: FaCertificate,
    //   category: 'java Programming',
    //   date: 'November 2024'
    // },
    {
      id: 3,
      title: 'API Testing with Postman Certification',
      description: 'Achieved a certification in API Testing with Postman. This demonstrates my proficiency in using Postman to test, automate, and document APIs, ensuring their functionality and reliability.',
      image: Postman,
      icon: FaCertificate,
      category: ['API Testing', 'Quality Assurance (QA)', 'Software Development'],
      date: 'December 2024'
    },
    {
      id: 4,
      title: 'Hacktoberfest Super Contributor',
      description: 'Achieved the Super Contributor status in Hacktoberfest after successfully merging 6 pull requests in open-source repositories. Contributed meaningful features and improvements while collaborating with the global developer community.',
      image: Hacktoberfest,
      icon: FaCertificate,
      // icon: 'fa-solid fa-code-branch',
      category: 'Open Source',
      date: '2025'
    },
    {
      id: 5,
      title: "LeetCode 50 Days Badge – 2025",
      description: "Earned the 50 Days Badge on LeetCode by consistently solving coding problems for 50+ days in 2025. Strengthened my problem-solving skills, data structures knowledge, and algorithmic thinking through daily practice.",
      image: leetcode_50day,
      icon: "🏅",
      category: "Achievement",
      date: "2025"
    },

    {
      id: 6,
      title: "LeetCode DCC December Badge – 2025",
      description: "Earned the LeetCode Daily Coding Challenge (DCC) December 2025 Badge by consistently solving daily problems throughout the month. Improved problem-solving speed, algorithmic thinking, and mastery of data structures through continuous practice.",
      image: leetcode_Dec,
      icon: "🎯",
      category: "Achievement",
      date: "December 2025"
    },
    // {
    //   id: 5,
    //   title: '',
    //   description: '',
    //   image: leetcode_Dec,
    //   icon: ,
    //   category: ,
    //   date: ''
    // },
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
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
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
                    <Icon size={40} />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements