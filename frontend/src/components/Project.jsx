import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa'
import Weather_App from "../Assest/project/Weather_App.png";
import AITeachingAssistant from "../Assest/project/AI_Teaching_Assistant.png";
import LearnEase from "../Assest/project/LearnEase.png";
import PayGate from "../Assest/project/PayGate.png";
import Spam_Detection from "../Assest/project/Spam_Detection.png";
import OpenClaw_Sentinel from "../Assest/project/OpenClaw_Sentinel.png";
import Food_Fiesta from "../Assest/project/Food_Fiesta.png";
import Blockchain_Payment from "../Assest/project/Blockchain_Payment.png";
import VisionGesture from "../Assest/project/VisionGesture.png";
import FinTrack from "../Assest/project/FinTrack.png";
import Fine_tune from "../Assest/project/Fine_tune.png";
import './Project.css'


const Project = () => {
  const projects = [

      {
  id: 1,
  title: "OpenClaw Sentinel",
  description:
    "A security-hardened autonomous AI agent bridge built on top of OpenClaw, designed for deploying controllable and auditable AI agents in production environments. Features HMAC-SHA256 secured communication, sandboxed filesystem execution, Telegram-based orchestration, audit logging, Playwright browser automation, email automation, and multi-provider LLM support including NVIDIA NIM, Groq, and OpenAI. Built with a zero-trust architecture focused on secure autonomous execution.",
  image:OpenClaw_Sentinel,
  technologies: [
    "Node.js",
    "Express.js",
    "Docker",
    "Telegram Bot API",
    "Telegraf",
    "HMAC-SHA256",
    "Playwright",
    "SMTP",
    "IMAP",
    "OpenAI API",
    "Groq API",
    "NVIDIA NIM",
    "JavaScript",
    "Filesystem Sandbox",
    "Audit Logging"
  ],
  githubLink: "https://github.com/yourusername/openclaw-sentinel",
  liveLink: "",
  category: "AI & Security"
},

        {
  id: 2,
  title: "Blockchain Payment Service API",
  description:
    "A production-style enterprise backend system built with Java 21 and Spring Boot featuring JWT authentication, role-based access control, REST APIs, gRPC communication, Redis caching, PostgreSQL persistence, Dockerized deployment, and blockchain integration using Hedera SDK and Solidity smart contracts. Includes transaction verification services, Swagger API documentation, and secure enterprise-grade architecture.",
  image: Blockchain_Payment,
  technologies: [
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Docker Compose",
    "Swagger/OpenAPI",
    "gRPC",
    "Solidity",
    "Hedera SDK",
    "Maven",
    "Hibernate"
  ],
  githubLink: "https://github.com/yourusername/blockchain-payment-service-api",
  liveLink: "",
  category: "Backend"
},

{
  id: 3,
  title: "Answer Reviewer AI",
  description:
    "An AI-powered automatic answer grading system built by fine-tuning Mistral-7B-Instruct using QLoRA. The model evaluates student answers against reference answers, predicts grading categories, and generates feedback explanations. Trained on real academic datasets with efficient 4-bit quantization and LoRA-based fine-tuning for deployment on low-resource hardware.",
  image: Fine_tune,
  technologies: [
    "Python",
    "Mistral-7B",
    "QLoRA",
    "LoRA",
    "Transformers",
    "Hugging Face",
    "bitsandbytes",
    "Google Colab",
    "PyTorch",
    "Machine Learning"
  ],
  githubLink: "",
  liveLink: "",
  category: "AI & Machine Learning",
},
{
  id: 4,
  title: "VisionGestureControl",
  description:
    "A real-time computer vision application that enables touchless web navigation using hand gestures. Built with MediaPipe hand landmark detection and OpenCV, the system tracks palm movement in real time and converts vertical hand gestures into smooth browser scrolling actions with intelligent cooldown handling and visual feedback.",
  image: VisionGesture,
  technologies: [
    "Python",
    "MediaPipe",
    "OpenCV",
    "PyAutoGUI",
    "Computer Vision",
    "Pytest"
  ],
  githubLink: "https://github.com/Aamir377300/VisionGestureControl",
  liveLink: "",
  category: "Computer Vision & AI",
},


        {
  id: 5,
  title: "Food Fiesta",
  description:
    "A fullstack dining management application built with Java 21 and Spring Boot featuring role-based authentication, product inventory management, order processing, Swagger API documentation, H2/PostgreSQL database support, and a modern Thymeleaf UI. Includes admin dashboard, customer flows, Docker support, and optional Google OAuth2 login integration.",
  image: Food_Fiesta,
  technologies: [
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "Thymeleaf",
    "H2 Database",
    "PostgreSQL",
    "Swagger/OpenAPI",
    "Docker",
    "Maven",
    "JavaScript",
    "CSS"
  ],
  githubLink: "https://github.com/Aamir377300/Food-Fiesta",
  liveLink: "",
  category: "Full Stack"
},
    
    {
      id: 6,
      title: "AI Teaching Assistant – AI-Powered Learning Platform (ongoing)",
      description: "A full-stack AI-powered teaching platform that enables teachers to generate notes, quizzes, and slides using LLMs. Implements Retrieval-Augmented Generation (RAG) with FastAPI and Pinecone to answer queries from uploaded PDFs. Includes Google OAuth and Calendar API integration for automatic Google Meet scheduling, role-based access control (JWT) for teachers and students, assignment submission with one-attempt quizzes, and PDF export of results using PDFKit and Cloudinary. Designed scalable APIs and AI workflows to centralize teaching and learning.",
      image: AITeachingAssistant,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "FastAPI", "Pinecone", "Groq (Llama 3.1)", "JWT", "Cloudinary", "Google OAuth", "Google Calendar API", "PDFKit", "Sentence-transformer"],
      githubLink: "https://github.com/Aamir377300/Gen-AI-Teaching-Assistant",
      liveLink: "",
      category: "AI / Full Stack"
    },

    {
  id: 7,
  title: "FinTrack AI",
  description:
    "A professional-grade AI-powered expense management mobile app built with React Native Expo. Features OCR-based receipt scanning, automated metadata extraction using Groq AI, JWT authentication, Kafka-driven event architecture, and MongoDB storage for intelligent financial tracking.",
  image: FinTrack,
  technologies: [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Kafka",
    "Groq AI",
    "Google Vision API",
    "JWT",
    "Docker"
  ],
  githubLink: "https://github.com/Aamir377300/FinTrack-AI",
  liveLink: "",
  category: "AI & Mobile Development",
},

    {
      id: 8,
      title: "LearnEase – Mini Learning Management System (LMS)",
      description: "A full-stack MERN-based Learning Management System supporting students, instructors, and admins with secure JWT authentication and role-based access control. Features include course management, Cloudinary video uploads, assignment submission and grading workflow, real-time course chat, automated Google Meet scheduling via Google Calendar API, CI/CD integration with GitHub Actions, and Docker-based development setup.",
      image: LearnEase,
      technologies: ["React (Vite)", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Google Calendar API", "Docker", "GitHub Actions"],
      githubLink: "https://github.com/Aamir377300/LearnEase",
      liveLink: "https://learn-ease-six.vercel.app",
      category: "Full Stack"
    },
    {
      id: 9,
      title: "PayGate – Payment Gateway Integration System",
      description: "A full-stack payment processing application built with Django REST Framework and React, integrated with Razorpay for secure online transactions. Features include user authentication, CSRF protection, order creation and signature verification, transaction history tracking, admin dashboard for monitoring payments, payment logs for audit trails, and real-time payment status updates. The project is fully deployed with backend on Render and frontend on Vercel, with automated test cases ensuring secure and reliable payment handling.",
      image: PayGate,
      technologies: ["Django", "Django REST Framework", "React", "Vite", "PostgreSQL", "Razorpay", "Axios", "Gunicorn", "Render", "Vercel"],
      githubLink: "https://github.com/Aamir377300/Payment-Gateway-Integration",
      liveLink: "https://payment-gateway-integration-ashen.vercel.app/",
      category: "Full Stack"
    },
    {
      id: 10,
      title: "SMS Spam Detection System – Ensemble Machine Learning Project",
      description: "An end-to-end text classification system built using the Kaggle SMS Spam Collection dataset. Performed data cleaning, exploratory data analysis (EDA), text preprocessing (tokenization, stopword removal, stemming), and feature extraction using TF-IDF. Trained and evaluated multiple machine learning models including Naive Bayes, Logistic Regression, Decision Tree, Random Forest, SVM, and KNN. Improved prediction performance using ensemble techniques such as Voting Classifier (hard and soft voting) and Stacking with a meta-model, and compared model accuracy, precision, recall, and F1-score to select the best-performing model.",
      image: Spam_Detection,
      technologies: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Pandas", "NumPy", "Matplotlib"],
      githubLink: "https://colab.research.google.com/drive/1vZC3V8ZfF0xq8X3QkeafWKvXyRFqO3Hh#scrollTo=PD4lzJ1yzRp3",
      liveLink: "https://colab.research.google.com/drive/1vZC3V8ZfF0xq8X3QkeafWKvXyRFqO3Hh#scrollTo=PD4lzJ1yzRp3",
      category: "Machine Learning"
    },







      // {
      //   id: ,
      //   title: ,
      //   description: ,
      //   image: ,
      //   technologies: ,
      //   githubLink: ,
      //   liveLink: ,
      //   category:
      // },
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
              <div className="project-image-container">
                <div className="project-browser-frame">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
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
