import React, { useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import './Corporate.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpiritualBackground from './components/SpiritualBackground';
import GlassCard from './components/GlassCard';

function Corporate() {
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
      <SpiritualBackground />
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Sankaash Bharadwaj Logo" className="logo-image" />
            Sankaash Bharadwaj
          </div>
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

      <section id="corporate" className="corporate">
        <div className="container">
          <div className="corporate-content">
            <div className="corporate-text">
              <h2>Corporate Wellness Programs</h2>
              <p>In today's demanding work environment, stress and burnout are all too common. I believe that when employees feel balanced and supported, they bring their best to both work and life. That's why I offer wellness programs designed to help teams reduce stress, build better habits, and create a more positive and productive workplace.</p>
            </div>
            <div className="corporate-image">
              <img src={process.env.PUBLIC_URL + '/image3.jpg'} alt="Corporate Wellness" />
            </div>
          </div>

          <div className="corporate-services">
            <div className="corporate-service">
              <h4>Stress Management and Mindfulness</h4>
              <ul>
                <li>Simple, practical ways to manage stress at work</li>
                <li>Guided mindfulness practices to help teams feel calmer and more focused</li>
                <li>Tools to bring more peace and clarity into everyday tasks</li>
              </ul>
            </div>

            <div className="corporate-service">
              <h4>Habit Coaching for Success</h4>
              <ul>
                <li>Helping your team break free from unproductive habits</li>
                <li>Building small, meaningful routines that improve productivity</li>
                <li>Making lasting changes feel achievable and natural</li>
              </ul>
            </div>

            <div className="corporate-service">
              <h4>Leadership Alignment</h4>
              <ul>
                <li>Supporting leaders to connect with their teams through emotional intelligence</li>
                <li>Tools to stay calm, make better decisions, and inspire others</li>
                <li>Creating a workplace culture that people feel proud to be a part of</li>
              </ul>
            </div>

            <div className="corporate-service">
              <h4>Energy Healing and Sound Healing for Teams</h4>
              <ul>
                <li>Group sessions to release stress and create a more positive vibe</li>
                <li>Practices to help individuals feel recharged and energized</li>
                <li>Tips to maintain personal balance, even in a busy workday</li>
              </ul>
            </div>

            <div className="corporate-service">
              <h4>Work-Life Balance Coaching</h4>
              <ul>
                <li>Helping employees find balance between work and personal life</li>
                <li>Practical ways to set boundaries and build healthier routines</li>
                <li>Creating space for growth and resilience, even in tough times</li>
              </ul>
            </div>


          </div>
        </div>
      </section>

      <section id="genetic-profiling" className="genetic-profiling">
        <div className="container">
          <h2>Genetic Brain Profiling</h2>
          <div className="genetic-profiling-grid">
            <div className="genetic-feature">
              <img src={process.env.PUBLIC_URL + '/team-profile-icon.svg'} alt="Team Profile" className="feature-icon" />
              <h3>Decodes Team Brain Profiles</h3>
              <p>Understand how your team members naturally think and process information.</p>
            </div>
            <div className="genetic-feature">
              <img src={process.env.PUBLIC_URL + '/role-match-icon.svg'} alt="Role Match" className="feature-icon" />
              <h3>Matches Roles to Strengths</h3>
              <p>Align responsibilities with innate capabilities for optimal performance.</p>
            </div>
            <div className="genetic-feature">
              <img src={process.env.PUBLIC_URL + '/growth-icon.svg'} alt="Growth" className="feature-icon" />
              <h3>Builds lasting Resilience</h3>
              <p>Develop emotional strength and adaptability across your organization.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Ready to transform lives through corporate wellness? Contact us now.</p>
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

export default Corporate;