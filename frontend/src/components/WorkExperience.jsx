// import { motion } from 'framer-motion'
// import './WorkExperience.css'

// const WorkExperience = () => {
//   const experiences = [
//     {
//       id: 1,
//       company: 'Tech Company Inc.',
//       position: 'Senior Full Stack Developer',
//       duration: '2022 - Present',
//       description: 'Led development of multiple web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.',
//       technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
//     },
//     {
//       id: 2,
//       company: 'Startup XYZ',
//       position: 'Full Stack Developer',
//       duration: '2020 - 2022',
//       description: 'Built scalable web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.',
//       technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis']
//     },
//     {
//       id: 3,
//       company: 'Digital Agency',
//       position: 'Frontend Developer',
//       duration: '2018 - 2020',
//       description: 'Developed responsive websites and web applications. Worked with clients to understand requirements and deliver solutions.',
//       technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress']
//     }
//   ]

//   return (
//     <section className="work-experience" id="work-experience">
//       <div className="container">
//         <motion.div 
//           className="section-header"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Work Experience</h2>
//           <p className="section-subtitle">My professional journey</p>
//         </motion.div>
        
//         <div className="timeline">
//           {experiences.map((experience, index) => (
//             <motion.div 
//               key={experience.id}
//               className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="timeline-content">
//                 <div className="timeline-header">
//                   <h3 className="position">{experience.position}</h3>
//                   <h4 className="company">{experience.company}</h4>
//                   <span className="duration">{experience.duration}</span>
//                 </div>
//                 <p className="description">{experience.description}</p>
//                 <div className="technologies">
//                   {experience.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="tech-tag">{tech}</span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WorkExperience


import { motion } from 'framer-motion'
import './WorkExperience.css'

const WorkExperience = () => {
  // Define a single "experience" item to represent the current status
  const currentStatus = {
    id: 1,
    company: 'Currently Seeking Internship Opportunities',
    position: 'Second-Year Student',
    duration: 'Actively Looking',
    description: `As a motivated second-year student, I am eager to apply my growing skills and knowledge in a professional setting. I am actively searching for challenging internship roles where I can contribute to innovative projects, learn from experienced professionals, and gain practical experience in software development, web technologies, or related fields.`,
    technologies: ['Frontend', 'Backend', 'Full Stack', 'Cloud', 'Data Science', 'Machine Learning'] // Example areas of interest
  }

  return (
    <section className="work-experience" id="work-experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Journey & Goals</h2>
          <p className="section-subtitle">A peek into my professional aspirations</p>
        </motion.div>
        
        {/* The timeline structure is retained for consistent design */}
        <div className="timeline">
          <motion.div 
            key={currentStatus.id}
            // Using 'left' class for consistent styling for a single item
            className={`timeline-item left`} 
            initial={{ opacity: 0, x: -100 }} // Starts from left for visual consistency
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="position">{currentStatus.position}</h3>
                <h4 className="company">{currentStatus.company}</h4>
                <span className="duration">{currentStatus.duration}</span>
              </div>
              <p className="description">{currentStatus.description}</p>
              
              {/* Display areas of interest as tech tags */}
              <div className="technologies">
                <span className="tech-tag">Seeking Internships</span>
                {currentStatus.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="call-to-action"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className='para-text'>
            If you have an exciting internship opportunity or would like to discuss my skills further, feel free to <a href="#contact" className="contact-link">get in touch</a>!
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default WorkExperience
