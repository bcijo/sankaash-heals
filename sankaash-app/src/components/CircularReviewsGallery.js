import React, { useState, useEffect, useRef } from 'react';
import './CircularReviewsGallery.css';

const CircularReviewsGallery = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, angle: 0 });

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, reviews.length]);

  // Handle mouse/touch events for manual control
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    dragStartRef.current = { x: e.clientX, angle, startIndex: currentIndex };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStartRef.current.x;
    const sensitivity = 0.01;
    const deltaIndex = Math.round(deltaX * sensitivity);
    const newIndex = (dragStartRef.current.startIndex - deltaIndex + reviews.length) % reviews.length;
    setCurrentIndex(newIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  // Scroll wheel support
  const handleWheel = (e) => {
    e.preventDefault();
    setIsAutoPlaying(false);
    const direction = e.deltaY > 0 ? 1 : -1;
    setCurrentIndex(prev => (prev + direction + reviews.length) % reviews.length);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  // Calculate position for each review card
  const getCardTransform = (index) => {
    const totalCards = reviews.length;
    const angle = (index - currentIndex) * (2 * Math.PI / totalCards);
    const radius = 280;
    const x = Math.sin(angle) * radius;
    const y = -Math.cos(angle) * radius * 0.3; // Flatten the circle vertically
    const z = Math.cos(angle) * radius * 0.5;
    
    // Scale and opacity based on position
    const normalizedAngle = ((angle + Math.PI) % (2 * Math.PI)) - Math.PI;
    const scale = 0.4 + (Math.cos(normalizedAngle) + 1) * 0.3; // 0.4 to 1.0
    const opacity = 0.3 + (Math.cos(normalizedAngle) + 1) * 0.35; // 0.3 to 1.0
    
    // Blur effect - less blur for front cards
    const blur = Math.abs(normalizedAngle) * 2;
    
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
      opacity: Math.max(0.2, opacity),
      filter: `blur(${Math.min(blur, 4)}px)`,
      zIndex: Math.round(100 - Math.abs(normalizedAngle) * 50)
    };
  };

  // Check if card is at the front (top center)
  const isCardAtFront = (index) => {
    const diff = Math.abs(((index - currentIndex + reviews.length) % reviews.length));
    return diff === 0;
  };

  // Handle case where reviews might not be provided
  if (!reviews || reviews.length === 0) {
    return (
      <div className="reviews-gallery-container">
        <p>No reviews to display.</p>
      </div>
    );
  }

  return (
        <div className="reviews-gallery-container">
            <div className="reviews-gallery-inner">
                <h2 className="reviews-gallery-title">
          ✨ Voices of Transformation ✨
        </h2>
        
                <div 
          ref={containerRef}
          className="reviews-perspective-container"
          style={{ perspective: '1000px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
                    <div className="reviews-cards-wrapper">
            {reviews.map((review, index) => {
              const transform = getCardTransform(index);
              const isAtFront = isCardAtFront(index);
              
              return (
                                <div
                  key={index}
                  className={`review-card-item ${
                    isAtFront ? 'is-at-front' : ''
                  }`}
                  style={{
                    ...transform,
                    transform: `translateX(-50%) translateY(-50%) ${transform.transform}`
                  }}
                >
                                    <div className={`review-card-content ${
                    isAtFront ? 'is-at-front' : ''
                  }`}>
                                        <div className="review-card-header">
                                            <div 
                        className="review-card-initials"
                        
                      >
                        {getInitials(review.name)}
                      </div>
                                            <div className={`review-card-name ${
                        isAtFront ? 'is-at-front' : ''
                      }`}>
                        {review.name}
                      </div>
                    </div>
                    
                                        <div className={`review-card-text ${
                      isAtFront ? 'is-at-front' : ''
                    }`}>
                      "{review.review}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation dots */}
                <div className="reviews-nav-dots">
          {reviews.map((_, index) => (
                        <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 2000);
              }}
              className={`review-nav-dot ${
                index === currentIndex ? 'active' : ''
              }`}
            />
          ))}
        </div>
        
        {/* Instructions */}
                <div className="reviews-instructions">
          <p>Drag to rotate • Scroll to navigate • Auto-rotates every 4 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CircularReviewsGallery;
