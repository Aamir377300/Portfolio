import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCalendar, FaUser } from 'react-icons/fa'
import './Blogs.css'

const Blogs = () => {
  const blogPosts = [
    // {
    //   id: 1,
    //   title: 'Building Scalable React Applications',
    //   excerpt: 'Learn the best practices for building large-scale React applications that can handle millions of users...',
    //   image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=React+Scalability',
    //   author: 'Your Name',
    //   date: 'January 15, 2024',
    //   readTime: '8 min read',
    //   category: 'React',
    //   url: 'https://yourblog.com/react-scalability'
    // },
    // {
    //   id: 2,
    //   title: 'Modern CSS Techniques for 2024',
    //   excerpt: 'Explore the latest CSS features including Grid, Flexbox, and CSS custom properties for modern web design...',
    //   image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Modern+CSS',
    //   author: 'Your Name',
    //   date: 'January 10, 2024',
    //   readTime: '6 min read',
    //   category: 'CSS',
    //   url: 'https://yourblog.com/modern-css-2024'
    // },
    // {
    //   id: 3,
    //   title: 'Node.js Performance Optimization',
    //   excerpt: 'Discover techniques to optimize your Node.js applications for better performance and scalability...',
    //   image: 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Node+Performance',
    //   author: 'Your Name',
    //   date: 'January 5, 2024',
    //   readTime: '10 min read',
    //   category: 'Node.js',
    //   url: 'https://yourblog.com/nodejs-performance'
    // },
    // {
    //   id: 4,
    //   title: 'The Future of Web Development',
    //   excerpt: 'A comprehensive look at emerging technologies and trends that will shape the future of web development...',
    //   image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Future+Web',
    //   author: 'Your Name',
    //   date: 'December 30, 2023',
    //   readTime: '12 min read',
    //   category: 'Web Development',
    //   url: 'https://yourblog.com/future-web-development'
    // }
  ]

  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="section-title">Blog & Articles</h2>
          <p className="section-subtitle">Thoughts and insights on web development</p> */}
        </motion.div>
        
        <div className="blogs-grid">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">
                    <FaUser /> {post.author}
                  </span>
                  <span className="blog-date">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <motion.a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More <FaExternalLinkAlt />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
