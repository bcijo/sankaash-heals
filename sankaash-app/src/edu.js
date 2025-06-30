import React, { useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import './edu.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Edu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Animation variants for page transition
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const INSTAGRAM_LINK = 'https://www.instagram.com/sankaash_bharadwaj_2.0?igsh=YzljYTk1ODg3Zg==';

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <header className="header">
        <nav className="nav">
          <div className="logo">Sankaash Bharadwaj</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/corporate">Corporate</Link></li>
            <li><Link to="/edu">Educational</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section id="educational" className="educational">
        <div className="container">
          <div className="educational-content">
            <div className="educational-text">
              <h2>Educational Programs</h2>
              <p>
                <br /><br />
                Our educational programs are designed to equip teens and young adults with essential life skills to navigate the challenges of modern life. Through interactive workshops, we address critical topics such as self-confidence, positive habit formation, mindful social media use, bullying prevention, and addiction awareness.
                <br /><br />
                Led by Sankaash S Bharadwaj, a seasoned expert with over 13 years of experience in energy healing and coaching, these workshops combine ancient wisdom with modern science to create transformative learning experiences.
                <br /><br />
                Explore our range of workshops below and discover how we can support your educational institution in fostering a generation of empowered, mindful, and resilient individuals.
              </p>
            </div>
            <div className="educational-image">
              <img src={process.env.PUBLIC_URL + '/image4.jpg'} alt="Educational Workshops for Teens" />
            </div>
          </div>
          <div className="educational-workshops">
            <div className="educational-workshop">
              <h4>Magnetic Mindset for Teens</h4>
              <ul>
                <li>Positive thinking & self-belief</li>
                <li>Visualization techniques</li>
                <li>Daily mindset practices</li>
              </ul>
            </div>
            <div className="educational-workshop">
              <h4>The Art of Being Yourself</h4>
              <ul>
                <li>Overcoming self-doubt & societal pressure</li>
                <li>Discovering and embracing uniqueness</li>
                <li>Self-empowerment exercises</li>
              </ul>
            </div>
            <div className="educational-workshop">
              <h4>Vision to Victory</h4>
              <ul>
                <li>Science of habit formation</li>
                <li>Creating positive daily habits</li>
                <li>Setting and achieving personal goals</li>
              </ul>
            </div>
            <div className="educational-workshop">
              <h4>From Screen to Self</h4>
              <ul>
                <li>Digital detox techniques</li>
                <li>Identifying social media traps</li>
                <li>Healthy screen time management</li>
              </ul>
            </div>
            <div className="educational-workshop">
              <h4>Choose Respect</h4>
              <ul>
                <li>Recognizing and responding to bullying</li>
                <li>Building empathy and kindness</li>
                <li>Strategies to prevent and stop bullying</li>
              </ul>
            </div>
            <div className="educational-workshop">
              <h4>Escape the Trap</h4>
              <ul>
                <li>Understanding addiction and its impact</li>
                <li>Healthy coping mechanisms</li>
                <li>Saying NO with confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
          <div className="container">
            <h2>Get in Touch</h2>
            <p>Ready to transform lives through education? Contact us now.</p>
            <div className="contact-icons">
              <a href="https://wa.me/message/DGDETAOHXV72N1" target="_blank" rel="noopener noreferrer" className="contact-icon" title="Chat on WhatsApp">
                <FaWhatsapp size={36} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="contact-icon" title="Instagram">
                <FaInstagram size={36} />
              </a>
              <a href="mailto:connect@sankaashbharadwaj.in" className="contact-icon" title="Send Email">
                <FaEnvelope size={36} />
              </a>
              <a href="tel:+919113529050" className="contact-icon" title="Call">
                <FaPhone size={36} />
              </a>
            </div>
          </div>
        </section>
    </motion.div>
  );
}

export default Edu;
