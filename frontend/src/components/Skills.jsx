import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, 
  FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt,
  FaJs,
  //  FaPhp,FaLaravel, FaVuejs, FaAngular
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    // { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    // { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
    // { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
    // { name: 'Angular', icon: FaAngular, color: '#DD0031' },
    { name: 'Database', icon: FaDatabase, color: '#336791' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className="skill-icon"
                style={{ color: skill.color }}
              >
                <skill.icon size={40} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
