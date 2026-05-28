'use client';
import { motion } from 'framer-motion'
const visionBg = "/about-assets/vision-bg.png";

const Vision = () => {
  return (
    <section className="vision-section" id="vision">
      <div className="vision-container">
        {/* Left: Image */}
        <motion.div
          className="vision-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={visionBg} alt="Modern office interior" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="vision-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="vision-tag">
            <span className="vision-tag-dot" />
            OUR VISION
          </div>

          <h2 className="vision-title">
            To empower every organization for a liveable planet.
          </h2>

          <p className="vision-desc">
            At NextLevel, we believe that sustainability data should
            be as accurate, accessible, and actionable as financial data.
            Our vision is a world where every enterprise, regardless of
            size, has the clarity to thrive in a circular economy and
            protect the ecosystems we all share.
          </p>

          <motion.a
            className="vision-cta"
            href="#"
            whileHover={{ gap: '14px' }}
          >
            SEE OUR VISION <span className="vision-arrow">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision
