'use client';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const heroBg = "/about-assets/hero-bg.png";

const Hero = () => {
  const [showStory, setShowStory] = useState(false);

  return (
    <section className="hero" id="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <img src={heroBg} alt="Modern skyscrapers" />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="diamond">✦</span>
          ESTABLISHED 2015
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Culture <em>of</em><br />
          Confidence.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          We believe in creating a culture of confidence for our customers,
          our organizations, and those whom you serve — where certainty in
          managing and securing your net-zero transition is met.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowStory(true)}
        >
          DISCOVER OUR STORY
        </motion.button>
      </motion.div>

      {/* Story Modal */}
      <AnimatePresence>
        {showStory && (
          <div className="story-modal-overlay" onClick={() => setShowStory(false)}>
            <motion.div 
              className="story-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="story-modal-close" onClick={() => setShowStory(false)}>×</button>
              <div className="story-modal-grid">
                <div className="story-modal-image">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Our Office" />
                </div>
                <div className="story-modal-text">
                  <div className="story-tag">OUR JOURNEY</div>
                  <h2 className="story-title">A Vision for <span>Certainty.</span></h2>
                  <p className="story-body">
                    Founded in 2015, CarbonSync began with a simple yet profound realization: 
                    the transition to net-zero is the greatest challenge of our generation, 
                    but the tools to manage it were fragmented and manual.
                  </p>
                  <p className="story-body">
                    We built the world's first autonomous carbon intelligence platform to 
                    bring absolute clarity to complex supply chains. Today, we empower 
                    global leaders to move beyond estimates and lead with confidence.
                  </p>
                  <div className="story-stats">
                    <div className="stat">
                      <span className="val">2015</span>
                      <span className="lbl">FOUNDED</span>
                    </div>
                    <div className="stat">
                      <span className="val">500+</span>
                      <span className="lbl">PARTNERS</span>
                    </div>
                    <div className="stat">
                      <span className="val">10M+</span>
                      <span className="lbl">TONS TRACKED</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
