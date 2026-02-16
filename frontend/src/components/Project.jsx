import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa'
import Weather_App from "../Assest/project/Weather_App.png";
import LearnEase from "../Assest/project/LearnEase.png";
import PayGate from "../Assest/project/PayGate.png";
import Spam_Detection from "../Assest/project/Spam_Detection.png";
import Launchpad from "../Assest/project/Launchpad.png";
import './Project.css'


const Project = () => {
  const projects = [
    {
        id: 1,
        title: "LearnEase – Mini Learning Management System (LMS)",
        description: "A full-stack MERN-based Learning Management System supporting students, instructors, and admins with secure JWT authentication and role-based access control. Features include course management, Cloudinary video uploads, assignment submission and grading workflow, real-time course chat, automated Google Meet scheduling via Google Calendar API, CI/CD integration with GitHub Actions, and Docker-based development setup.",
        image: LearnEase, 
        technologies: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Google Calendar API", "Docker", "GitHub Actions"],
        githubLink: "https://github.com/Aamir377300/LearnEase",
        liveLink: "https://learn-ease-six.vercel.app",
        category: "Full Stack"
      },
      {
        id: 2,
        title: "PayGate – Payment Gateway Integration System",
        description: "A full-stack payment processing application built with Django REST Framework and React, integrated with Razorpay for secure online transactions. Features include user authentication, CSRF protection, order creation and signature verification, transaction history tracking, admin dashboard for monitoring payments, payment logs for audit trails, and real-time payment status updates. The project is fully deployed with backend on Render and frontend on Vercel, with automated test cases ensuring secure and reliable payment handling.",
        image: PayGate,
        technologies: ["Django", "Django REST Framework", "React", "Vite", "PostgreSQL", "Razorpay", "Axios", "Gunicorn", "Render", "Vercel"],
        githubLink: "https://github.com/Aamir377300/Payment-Gateway-Integration",
        liveLink: "https://payment-gateway-integration-ashen.vercel.app/",
        category: "Full Stack"
      },
      {
        id: 3,
        title: "Launchpad – Career & Opportunity Platform",
        description: "A full-stack MERN platform connecting students, startups, and professionals in one ecosystem. Features include secure JWT-based authentication, student dashboard, admin panel, internship and opportunity listings, profile management with Cloudinary image uploads, and email integration via SMTP. Built with scalable backend architecture and deployed on Vercel, Launchpad focuses on simplifying career discovery and collaboration.",
        image: Launchpad,
        technologies: ["React (Vite)", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "SMTP", "Vercel"],
        githubLink: "https://github.com/Aamir377300/launchpad",
        liveLink: "https://launchpadsfinal.vercel.app/mainpage",
        category: "Full Stack",
      },
      {
        id: 4,
        title: "SMS Spam Detection System – Ensemble Machine Learning Project",
        description: "An end-to-end text classification system built using the Kaggle SMS Spam Collection dataset. Performed data cleaning, exploratory data analysis (EDA), text preprocessing (tokenization, stopword removal, stemming), and feature extraction using TF-IDF. Trained and evaluated multiple machine learning models including Naive Bayes, Logistic Regression, Decision Tree, Random Forest, SVM, and KNN. Improved prediction performance using ensemble techniques such as Voting Classifier (hard and soft voting) and Stacking with a meta-model, and compared model accuracy, precision, recall, and F1-score to select the best-performing model.",
        image: Spam_Detection,
        technologies: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Pandas", "NumPy", "Matplotlib"],
        githubLink: "https://colab.research.google.com/drive/1vZC3V8ZfF0xq8X3QkeafWKvXyRFqO3Hh#scrollTo=PD4lzJ1yzRp3",
        liveLink: "https://colab.research.google.com/drive/1vZC3V8ZfF0xq8X3QkeafWKvXyRFqO3Hh#scrollTo=PD4lzJ1yzRp3",
        category: "Machine Learning"
      },
      {
        id: 5,
        title: "WeatherApp – Interactive Weather Forecast Application",
        description: "A responsive and interactive weather application built using HTML, CSS, and JavaScript. It allows users to search any city or use their current location to fetch real-time weather data. Features include current temperature, weather conditions, humidity, Air Quality Index (AQI), moon phase calculation, 8-hour forecast, 7-day weekly forecast, and dynamic map integration using Leaflet and OpenStreetMap. The app consumes the OpenWeatherMap API and is fully deployed on Vercel.",
        image: Weather_App,
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Leaflet.js", "OpenStreetMap"],
        githubLink: "https://github.com/Aamir377300/WeatherApp",
        liveLink: "https://weather-app-seven-navy-94.vercel.app/",
        category: "Frontend"
      }







    //   {
    //     id: ,
    //     title: ,
    //     description: ,
    //     image: ,
    //     technologies: ,
    //     githubLink: ,
    //     liveLink: ,
    //     category:
    //   },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my recent work and contributions</p>
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
                    <a href={project.githubLink} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.liveLink} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
