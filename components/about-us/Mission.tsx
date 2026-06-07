'use client';
import { motion } from 'framer-motion'
const missionBg = "/about-assets/mission-bg.webp";
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CalendlyWidget from './CalendlyWidget'


const Mission = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section className="mission-section" id="mission">
      <div className="mission-container">
        {/* Left: Content */}
        <motion.div
          className="mission-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mission-tag">
            <span className="mission-tag-dot" />
            OUR MISSION
          </div>

          <h2 className="mission-title">
            Simplifying the path to net-zero through intelligent automation.
          </h2>

          <p className="mission-desc">
            We protect the future by providing a real-time platform that
            automates emissions tracking across complex supply
            chains. By eliminating manual entry and providing predictive
            insights, we enable organizations to focus on strategy and
            reduction rather than spreadsheets.
          </p>

          <motion.a
            className="mission-cta"
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              setShowCalendly(true);
            }}
          >
            LOG IN TO THE PLATFORM <span className="mission-arrow">→</span>
          </motion.a>

        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="mission-image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={missionBg} alt="Team meeting in boardroom" />
        </motion.div>
      </div>

      <AnimatePresence>
        {showCalendly && (
          <CalendlyWidget onClose={() => setShowCalendly(false)} />
        )}
      </AnimatePresence>
    </section>

  )
}

export default Mission
