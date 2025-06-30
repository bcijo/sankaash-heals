import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FaWhatsapp, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CircularReviewsGallery from './components/CircularReviewsGallery';

function App() {
  // Smooth scrolling for navigation links and hash-based navigation
  useEffect(() => {
    // Handle in-page scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Handle scrolling to section based on URL hash
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100); // Delay to ensure DOM is fully rendered
      }
    }

    // Header scroll effect
    function handleHeaderScroll() {
      const header = document.querySelector('.header');
      
      if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = 'none';
      }
    }

    // Throttle function for better performance
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    }

    // Add scroll event listener with throttling
    window.addEventListener('scroll', throttle(handleHeaderScroll, 16));

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Add a small delay for staggered animations
          const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
          entry.target.style.transitionDelay = `${delay}ms`;
        }
      });
    }, observerOptions);

    // Initialize animations for service cards and corporate services
    const animatedElements = document.querySelectorAll('.service-card, .corporate-service');
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease';
      fadeInObserver.observe(el);
    });

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener('scroll', throttle(handleHeaderScroll, 16));
    };
  }, []); // Empty dependency array means this runs once on mount



  // Contact details
  const WHATSAPP_LINK = 'https://wa.me/message/DGDETAOHXV72N1'; // Replace with your WhatsApp business link
  const EMAIL = 'connect@sankaashbharadwaj.in'; // Your business email
  const PHONE = '+919113529050'; // Replace with your business phone number
  const INSTAGRAM_LINK = 'https://www.instagram.com/sankaash_bharadwaj_2.0?igsh=YzljYTk1ODg3Zg==';

  function handlePhoneClick(e) {
    if (window.innerWidth > 1024) {
      e.preventDefault();
      navigator.clipboard.writeText(PHONE);
      alert('Phone number copied to clipboard!');
    } else {
      // On mobile/tablet, let the default tel: link open the dialer
      // No preventDefault
    }
  }

  // Reviews data (move outside render for clarity)
  const reviewsArr = [
    {
      review: "Sankaash brother is authentic in his approach and shares teachings from his experiences directly which makes him very approachable.",
      name: "R. Varuneshwaran",
    },
    {
      review: "✨ Grateful for the Law of Attraction Training! This powerful programme helped me shift my mindset 🌈, stay focused 🎯, and attract positivity 🌟. It made a real impact on both my personal life 💫 and professional journey 🚀. Thank you Sankaash ji for this magical transformation! 🙏💖",
      name: "Bobbili Mamatha",
    },
    {
      review: "Attending Sankaash's sessions has truly been a turning point in my life. I’ve started feeling genuinely happy about the little things I have, something I used to overlook. His guidance helped me build a simple yet meaningful routine, and writing about my daily experiences has become a powerful habit that brings clarity and peace. What I appreciate the most is that he’s just a call away whenever I need guidance on my spiritual journey. Thank you so much, Sankaash, for being such a grounding presence!",
      name: "Chandana Prasad",
    },
    {
      review: "Hi, I attended one session only but before that i met him , I talked personally. I asked some questions and also asked to decode my dream. He replied with a sentence for that .His words i have taken very seriously and started analyzing what I am looking for. Finally I found it. The conversation with him made me think and analyze. This helped me a lot in my spiritual path. I am happy for that. Thank you 😊",
      name: "Uma Bhargavi",
    },
    {
      review: "I'm so grateful for the energy cleansing sessions with Sankash! I felt lighter and happier afterward. He helped me gain clarity when I was uncertain, and his guidance encouraged me to stay positive - even when things got tough, I reminded myself that things can get better, and they did! He also shared valuable tips on pausing before reacting, which made me reflect on my actions. Thank you, Sankash, for your support and wisdom!",
      name: "Pankaj Sharma",
    },
    {
      review: "Truly gifted! Your energy is incredibly calming and powerful. I could feel their deep knowledge and presence in every session. Super powerful alignment of divine with you 🙏",
      name: "Priyanka Agarwal",
    }
  ];



  // Animation variants for page transition
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  // The actual JSX that will be rendered
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Sankaash Bharadwaj Logo" className="logo-image" />
            Sankaash Bharadwaj
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><Link to="/corporate">Corporate</Link></li>
            <li><Link to="/edu">Educational</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sankaash Bharadwaj</h1>
            <div className="hero-subtitle">Energy Healer • Law of Attraction Teacher • Life Coach • Habit Coach</div>
            <div className="hero-description">
            Unlock your true potential and transform your life with a perfect blend of ancient wisdom and modern science. Drawing from timeless Vedic teachings, Energy Healing, the Law of Attraction, and the power of Habit Science, I invite you to embark on a journey of self-discovery and lasting change. Together, we’ll explore practical and profound ways to align your inner and outer worlds, creating a life that truly resonates with your highest self.
            </div>
            <a href="#services" className="cta-button">Discover Your Transformation</a>
          </div>
          <div className="hero-image">
            <img src={process.env.PUBLIC_URL + '/image1.jpg'} alt="Sankaash Bharadwaj" />
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-header">
            <div className="about-header-content">
              <span className="about-label">About Sankaash</span>
              <h2 className="about-title">Bridging Ancient Wisdom with Modern Science</h2>
              <p className="about-intro">
              Starting his journey in Energy Healing at 13, Sankaash blends ancient wisdom with modern tools to help others unlock their true potential and live their best lives.
              </p>
            </div>
          </div>
          
          <div className="about-content-wrapper">
            <div className="about-content-grid">
              <div className="about-text-section">
                <div className="about-text-content">
                  <div className="about-highlight">
                    <h3>What Makes Sankaash Unique</h3>
                    <p className="about-description">
                      Sankaash effortlessly blends ancient wisdom from the <strong>Vedas</strong> and <strong>Tantra</strong> with modern advancements in <strong>Neuroscience, Energy Healing</strong>, the <strong>Law of Attraction</strong>, and <strong>Habit Science</strong>. His holistic approach integrates timeless spiritual philosophies with contemporary practices, creating a path of transformation that nurtures the <strong>mind, body</strong>, and <strong>spirit</strong>.
                    </p>
                  </div>
                  
                  <div className="about-impact">
                    <h4>Proven Impact</h4>
                    <p className="about-text">
                      Through <strong>workshops, one-on-one coaching</strong>, and <strong>energy healing sessions</strong>, Sankaash has transformed many lives by inspiring <strong>self-awareness</strong>, promoting <strong>well-being</strong>, and guiding clients towards <strong>abundance</strong> and <strong>fulfillment</strong>.
                    </p>
                  </div>
                  
                  <div className="about-stats">
                    <div className="stat-item">
                      <span className="stat-number">13+</span>
                      <span className="stat-label">Years of Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">2000+</span>
                      <span className="stat-label">Lives Transformed</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">200+</span>
                      <span className="stat-label">Seminars & Workshops</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="about-visual-section">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src={process.env.PUBLIC_URL + '/image2.jpg'} alt="Sankaash Bharadwaj - Energy Healer and Life Coach" />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <span className="overlay-text">Transforming Lives Since 2011</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="about-credentials">
                  <div className="credential-item">
                    <div className="credential-icon">🧘</div>
                        <div className="credential-text">
                          <h5>Master Healer and Life Coach</h5>
                          <p>Certified in diverse healing and coaching modalities</p>
                        </div>
                      </div>
                      <div className="credential-item">
                        <div className="credential-icon">🎓</div>
                        <div className="credential-text">
                          <h5>Scientific Integration</h5>
                          <p>A scientific integration of Habit Science, Energy Healing, the Law of Attraction, and Neuroscience.</p>
                        </div>
                      </div>
                      <div className="credential-item">
                        <div className="credential-icon">🧠</div>
                        <div className="credential-text">
                          <h5>Psychologist in the Making</h5>
                          <p>Blending academic knowledge with real-world experience to empower personal transformation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Tailored Wellness Programs</h2>
          <p className="section-subtitle">Comprehensive healing and coaching services designed to transform your life from the inside out</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Energy Healing with Crystals</h3>
              <p>At the core of what I do is energy healing with crystals, a powerful practice that addresses the root cause of any physical, mental, or emotional issue. Whether you're dealing with chronic pain, stress, anxiety, or emotional blocks, I use intuitive and proven techniques to restore balance, realign your energy, and activate your body's natural ability to heal itself.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Habit Coaching</h3>
              <p>Let's transform the habits that hold you back and create ones that support the life you truly want. Together, we'll build simple, sustainable routines that align with your goals and make growth feel natural.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌟</div>
              <h3>Life Coaching</h3>
              <p>Life can be messy, but you don't have to navigate it alone. I'm here to help you gain clarity, tackle challenges, and create a life that feels true to who you are and where you want to be.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="corporate">
        <div className="container">
          <div className="corporate-content">
            <div className="corporate-image">
              <img src={process.env.PUBLIC_URL + '/image3.jpg'} alt="Corporate Wellness" />
            </div>
            <div className="corporate-text">
              <h2>Corporate Wellness Programs</h2>
              <p>In today's demanding work environment, stress and burnout are all too common. I believe that when employees feel balanced and supported, they bring their best to both work and life. That's why I offer wellness programs designed to help teams reduce stress, build better habits, and create a more positive and productive workplace.</p>
              <Link to="/corporate" className="cta-button">Explore Corporate Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section id="educational" className="educational">
        <div className="container">
          <div className="educational-content">
            <img src={process.env.PUBLIC_URL + '/image4.jpg'} alt="Educational Workshops for Teens" />
            <div className="educational-text">
              <h2>Educational Programs</h2>
              <p>
                <br />
                Our educational programs empower teens and young adults with essential life skills through interactive workshops on self-confidence, positive habits, mindful social media use, bullying prevention, and addiction awareness. Led by Sankaash S Bharadwaj, a seasoned expert with over 13 years of experience in energy healing and coaching, these sessions blend ancient wisdom with modern science to create impactful and transformative learning experiences.
                <br /></p>
              <Link to="/edu" className="cta-button">Explore Educational Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="reviews" className="reviews-section">
        <CircularReviewsGallery reviews={reviewsArr} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Transform Your Life?</h2>
          <p>Take the first step towards a life of balance, abundance, and fulfillment. Let's work together to unlock your true potential and create lasting positive change.</p>
          <div className="contact-icons">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={36} />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              title="Instagram"
            >
              <FaInstagram size={36} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="contact-icon"
              title="Send Email"
            >
              <FaEnvelope size={36} />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="contact-icon"
              title="Call"
              onClick={handlePhoneClick}
            >
              <FaPhone size={36} />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default App;
