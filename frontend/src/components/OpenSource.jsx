import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import openSour1 from '../Assest/OpenSorce/openSource1.png'
import './OpenSource.css'

const OpenSource = () => {
  const projects = [
    {
      id: 1,
      title: 'Added Detailed Comments and Documentation to GeoPlot.py for Clarity',
      description: 'Raised a pr for adding details comments and documents for the easier to understand',
      image: openSour1,
      github: 'https://github.com/AgentTorch/visualize/pull/82',
      live: 'https://your-library-demo.com',
      technologies: ['python']
    }
    // ,
    // {
    //   id: 2,
    //   title: 'Node.js API Framework',
    //   description: 'Lightweight and fast API framework built on Node.js with Express, featuring authentication and validation.',
    //   image: 'https://via.placeholder.com/300x200/059669/FFFFFF?text=Node+API',
    //   github: 'https://github.com/yourusername/node-api-framework',
    //   live: 'https://your-api-docs.com',
    //   technologies: ['Node.js', 'Express', 'JWT', 'MongoDB']
    // },
    // {
    //   id: 3,
    //   title: 'Python Data Tools',
    //   description: 'Collection of Python utilities for data processing, analysis, and visualization with pandas and matplotlib.',
    //   image: 'https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Python+Tools',
    //   github: 'https://github.com/yourusername/python-data-tools',
    //   live: 'https://your-python-tools.com',
    //   technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy']
    // },
    // {
    //   id: 4,
    //   title: 'Vue.js Dashboard',
    //   description: 'Modern admin dashboard built with Vue.js, featuring charts, tables, and responsive design.',
    //   image: 'https://via.placeholder.com/300x200/4FC08D/FFFFFF?text=Vue+Dashboard',
    //   github: 'https://github.com/yourusername/vue-dashboard',
    //   live: 'https://your-dashboard-demo.com',
    //   technologies: ['Vue.js', 'Vuex', 'Chart.js', 'Tailwind CSS']
    // }
  ]

  return (
    <section className="open-source" id="open-source">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Open Source Contributions</h2>
          <p className="section-subtitle">Projects I've contributed to and built</p>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSource