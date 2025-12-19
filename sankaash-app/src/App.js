import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { FaWhatsapp, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CircularReviewsGallery from './components/CircularReviewsGallery';
import SpiritualBackground from './components/SpiritualBackground';
import GlassCard from './components/GlassCard';
import RitualEntry from './components/RitualEntry';

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
      return function () {
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
    },
    {
      review: "Sankaash is a very good law of attraction teacher, at such an young age he has mastered the subject with diligent practice. He takes you through the process step by step. He is an immensely good energy healer.  His ability to hold your hand through the entire process of transformation is commendable. I would recommend everyone to go through his session. Thank you Sankaash for doing such a great job in transforming lives.",
      name: "Supriya",
    },
    {
      review: "At 19 years old, discovering the Law of Attraction has really changed the way I see life and my goals. I've come to understand that my thoughts and emotions have powerful abilities to create my reality. With a positive focus on intentions and believing in my aspirations, I've begun bringing into my life opportunities and experiences that I really desire. It's also learned me to remain positive, be patient, and trust the process, and it has made a huge impact on my confidence and overall outlook and the credit has to go to Mr. Sankaash Bharadwaj to give me a fresh perspective.",
      name: "Samskruti",
    },
    {
      review: "My name is Srihari and me along with my wife Padmasri are spiritual seekers in our own way. On our quest to understand the power of universe and cosmos, we came across the course on Law of Attraction conducted by Sankaash Bhardwaj. This was an eye opener to understand how the power of manifestation works and to materlize. Sankaash conducted a very structured series of sessions that paved way for us to adopt to materlize our beliefs. We continue to practice it in our daily lives. Thanks a lot Sankaash for conducting such a wonderful course and teaching the power of manifestation.",
      name: "Padmashri & Srihari",
    }
  ];



  // Animation variants for page transition
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
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
      <RitualEntry />
      <SpiritualBackground />
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
            <div className="hero-subtitle">GBP Consultant • Life Optimization Guide • Integrative Healer • Transformational Workshop Leader</div>
            <div className="hero-description">
            Imagine unlocking your true potential and transforming your life with a perfect blend of ancient wisdom and modern science. I've drawn from timeless Vedic and Tantric teachings, Genetic Brain Profiling, integrative healing, the Principle of Conscious Creation, the power of Habit Science, and the body's inherent wisdom for recovery through mindful dietary choices and purposeful fasting to guide my own journey—and now, I invite you to join me on yours. Together, we'll uncover practical, profound ways to align your inner and outer worlds, crafting a life that truly resonates with your highest self.
            </div>
            <a href="#services" className="cta-button">Discover Your Transformation</a>
          </div>
          <div className="hero-image">
            <img src={process.env.PUBLIC_URL + '/image1.jpg'} alt="Sankaash Bharadwaj" />
          </div>
        </div>
      </section>      {/* About Section */}
      <motion.section
        id="about"
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <GlassCard className="about-header">
            <div className="about-header-content">
              <span className="about-label">About Sankaash</span>
              <h2 className="about-title">Harmonizing perennial insights with contemporary research</h2>
              <p className="about-intro">
              Energy healing found me at 13. Now, I combine its ancient roots with contemporary methods to support you in revealing your authentic power and help you in stepping into your best life.
              </p>
            </div>
          </GlassCard>

          <div className="about-content-wrapper">
            <div className="about-content-grid">
              <div className="about-text-section">
                <div className="about-text-content">
                  <div className="about-highlight">
                    <h3>What Makes Sankaash Unique</h3>
                    <p className="about-description">
                      <strong>My work with you draws straight from the breakthroughs I've forged in my own life—from discovering energy healing at 13, to weaving Vedic and Tantric wisdom with Genetic Brain Profiling, habit science, and more.</strong>
                    </p>
                  </div>

                  <div className="about-impact">
                    <h4>Proven Impact</h4>
                    <p className="about-text">
                      Through <strong>workshops, one-on-one coaching</strong>, and <strong>energy healing sessions</strong>, I have transformed many lives by inspiring <strong>self-awareness</strong>, promoting <strong>well-being</strong>, and guiding clients towards <strong>abundance</strong> and <strong>fulfillment</strong>.
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

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <h2>Your journey with me</h2>
          <p className="section-subtitle">Together, we turn inner insights into outer change through practical coaching, seminars, and workshops.</p>

          <div className="services-grid">
            <GlassCard className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Genetic Brain Profiling (GBP)</h3>
              <p>Genetic Brain Profiling is a scientific method used to assess and understand an individual’s unique personality, strengths, learning style, and behavioural traits through the study of brain patterns via fingerprint analysis and neurogenetic insights. This profiling helps map inborn potential, career choices, and personal development paths, empowering people of all ages to make informed life decisions that align with their natural abilities.</p>
            </GlassCard>

            <GlassCard className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Habit Coaching</h3>
              <p>Many of us have tried to make changes in life through motivation alone, only to face the guilt and frustration when those changes don’t stick. Through my habit coaching and workshops, I help individuals move beyond fleeting motivation to build lasting, sustainable change by reshaping their habits in alignment with their true desires and purpose, empowering them to create a life that genuinely reflects their authentic goals and values.</p>
            </GlassCard>

            <GlassCard className="service-card">
              <div className="service-icon">🌟</div>
              <h3>Law of attraction</h3>
              <p>The law of attraction is one of the most powerful universal laws, and my mission is to help people truly understand how it works so they can use this transformative tool to discover their authentic selves and manifest their deepest desires. In my workshops and coaching sessions, I empower clients to clarify personal intentions, align their thoughts and energy, and take inspired action toward creating the life they truly want, turning dreams into real experiences.</p>
            </GlassCard>
          </div>
        </div>
      </motion.section>

      {/* Corporate Section */}
      <motion.section
        id="corporate"
        className="corporate"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <GlassCard className="corporate-content">
            <div className="corporate-image">
              <img src={process.env.PUBLIC_URL + '/image3.jpg'} alt="Corporate Wellness" />
            </div>
            <div className="corporate-text">
              <h2>Corporate Wellness Programs</h2>
              <p>In today's demanding work environment, stress and burnout are all too common. I believe that when employees feel balanced and supported, they bring their best to both work and life. That's why I offer wellness programs designed to help teams reduce stress, build better habits, and create a more positive and productive workplace.</p>
              <Link to="/corporate" className="cta-button">Explore Corporate Programs</Link>
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* Educational Section */}
      <motion.section
        id="educational"
        className="educational"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="container">
          <GlassCard className="educational-content">
            <img src={process.env.PUBLIC_URL + '/image4.jpg'} alt="Educational Workshops for Teens" />
            <div className="educational-text">
              <h2>Educational Programs</h2>
              <p>
                <br />
                Our educational programs empower teens and young adults with essential life skills through interactive workshops on self-confidence, positive habits, mindful social media use, bullying prevention, and addiction awareness. Led by Sankaash S Bharadwaj, a seasoned expert with over 13 years of experience in energy healing and coaching, these sessions blend ancient wisdom with modern science to create impactful and transformative learning experiences.
                <br /></p>
              <Link to="/edu" className="cta-button">Explore Educational Programs</Link>
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* Client Reviews Section */}
      <motion.section
        id="reviews"
        className="reviews-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <CircularReviewsGallery reviews={reviewsArr} />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
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
      </motion.section>
    </motion.div>
  );
}

export default App;
