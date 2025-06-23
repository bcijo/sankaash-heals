import React, { useEffect, useRef, useState } from 'react';
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

  // Reviews carousel pause/play logic
  const reviewsRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reviewsEl = reviewsRef.current;
    if (!reviewsEl) return;

    let animationPlayState = 'running';

    function pauseCarousel() {
      animationPlayState = 'paused';
      reviewsEl.style.animationPlayState = 'paused';
    }
    function playCarousel() {
      animationPlayState = 'running';
      reviewsEl.style.animationPlayState = 'running';
    }

    reviewsEl.addEventListener('mouseenter', pauseCarousel);
    reviewsEl.addEventListener('mouseleave', playCarousel);
    reviewsEl.addEventListener('mousedown', pauseCarousel);
    reviewsEl.addEventListener('mouseup', playCarousel);

    return () => {
      reviewsEl.removeEventListener('mouseenter', pauseCarousel);
      reviewsEl.removeEventListener('mouseleave', playCarousel);
      reviewsEl.removeEventListener('mousedown', pauseCarousel);
      reviewsEl.removeEventListener('mouseup', playCarousel);
    };
  }, []);

  // Helper to get placeholder emoji based on name (simple gender guess)
  function getPlaceholderEmoji(name) {
    // Very basic: if name ends with 'a' or 'i', assume woman, else man
    if (/a$|i$/i.test(name.split(' ')[0])) {
      return "🧑‍🦰"; // faceless woman
    }
    return "🧑"; // faceless man
  }

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
                      Through <strong>workshops, one-on-one coaching</strong>, and <strong>energy healing sessions</strong>, Sankaash has transformed many lives by inspiring <strong>self-awareness</strong>, promoting <strong>well-being</strong>, and guiding clients toward <strong>abundance</strong> and <strong>fulfillment</strong>.
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
                      <span className="stat-number">100+</span>
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
      <section id="services" className="services services-white">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
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

      {/* Educational Section */}
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
              {/* Placeholder image - replace with your actual image later */}
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

            {/* Client Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="reviews-title">✨ Voices of Transformation ✨</h2>
          <div
            className="reviews-carousel"
            ref={reviewsRef}
            tabIndex={0}
            aria-label="Client Reviews Carousel"
          >
            <div className="reviews-track">
              {/* Repeat reviews twice for seamless looping */}
              {[1, 2].map(loop =>
                [ // 4 placeholder reviews
                  {
                    review: "Working with Sankaash has been a life-changing experience. I feel more balanced and confident than ever before.",
                    name: "Priya Sharma",
                    img: process.env.PUBLIC_URL + '/review1.jpg'
                  },
                  {
                    review: "The energy healing sessions brought me clarity and peace. Highly recommended for anyone seeking real transformation.",
                    name: "Rahul Mehta",
                    img: process.env.PUBLIC_URL + '/review2.jpg'
                  },
                  {
                    review: "Sankaash’s workshops are both practical and inspiring. I’ve built habits that truly last.",
                    name: "Ananya Rao",
                    img: "" // No image, will show placeholder
                  },
                  {
                    review: "I never thought coaching could be so impactful. Thank you for helping me rediscover my purpose.",
                    name: "Vikram Singh",
                    img: "" // No image, will show placeholder
                  }
                ].map((r, idx) => (
                  <div className="review-card" key={loop + '-' + idx}>
                    <div className="review-image">
                      {r.img ?
                        <img src={r.img} alt={r.name + " portrait"} onError={e => { e.target.onerror = null; e.target.style.display = 'none'; e.target.parentNode.innerHTML = getPlaceholderEmoji(r.name); }} />
                        :
                        <span className="review-placeholder-emoji" aria-label="portrait placeholder">{getPlaceholderEmoji(r.name)}</span>
                      }
                    </div>
                    <div className="review-text">"{r.review}"</div>
                    <div className="review-name">— {r.name}</div>
                  </div>
                ))
              )}
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