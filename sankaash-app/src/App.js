import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Smooth scrolling for navigation links
  useEffect(() => {
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

  // The actual JSX that will be rendered
  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">Sankaash S Bharadwaj</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#corporate">Corporate</a></li>
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
            <h1>Sankaash S Bharadwaj</h1>
            <div className="hero-subtitle">Energy Healer • Law of Attraction Teacher • Life Coach • Habit Coach</div>
            <div className="hero-description">
              Bridging ancient wisdom with modern science to unlock your true potential and create lasting transformation. Experience the perfect blend of Vedic teachings, quantum physics, and neuroscience for holistic growth.
            </div>
            <a href="#services" className="cta-button">Discover Your Transformation</a>
          </div>
          <div className="hero-image">
            <img src="/image1.jfif" alt="Sankaash Bharadwaj" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="services">
        <div className="container">
          <h2 className="section-title">About Sankaash</h2>
          <p className="section-subtitle">
            Beginning his journey into energy healing at age 13, Sankaash has dedicated his life to empowering others through a unique integration of ancient teachings and modern science.
          </p>
          
          <div className="about-content">
            <div>
              <p className="about-text">
                What makes Sankaash unique is his ability to seamlessly bridge ancient teachings—such as the Vedas, Vedanta, and Tantra—with modern advancements in quantum physics, neuroscience, and habit science. By integrating timeless spiritual philosophies with cutting-edge technologies, he provides a comprehensive, holistic approach to transformation and growth.
              </p>
              <p className="about-text">
                Through his workshops, one-on-one coaching, and energy healing sessions, Sankaash has transformed many lives by inspiring self-awareness, promoting well-being, and guiding clients toward a life of abundance and fulfillment.
              </p>
            </div>
            <div>
              <img src="/image2.jfif" alt="About Sankaash" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services services-white">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">Comprehensive healing and coaching services designed to transform your life from the inside out</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Energy Healing</h3>
              <p>At the core of what I do is energy healing—a powerful practice that addresses the root cause of any physical, mental, or emotional issue. Whether you're dealing with chronic pain, stress, anxiety, or emotional blocks, I use intuitive and proven techniques to restore balance, realign your energy, and activate your body's natural ability to heal itself.</p>
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
            <div className="corporate-text">
              <h2>Corporate Wellness Programs</h2>
              <p>In today's demanding work environment, stress and burnout are all too common. I believe that when employees feel balanced and supported, they bring their best to both work and life. That's why I offer wellness programs designed to help teams reduce stress, build better habits, and create a more positive and productive workplace.</p>
            </div>
            <div className="corporate-image">
              <img src="/image3.jfif" alt="Corporate Wellness" />
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Ready to Transform Your Life?</h2>
          <p>Take the first step towards a life of balance, abundance, and fulfillment. Let's work together to unlock your true potential and create lasting positive change.</p>
          <a href="mailto:connect@sankaashbharadwaj.in" className="contact-button">Get In Touch</a>
        </div>
      </section>
    </>
  );
}

export default App;