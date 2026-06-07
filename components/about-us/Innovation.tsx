'use client';
import { motion } from 'framer-motion'
const innovationBg = "/about-assets/innovation-bg.webp";

const Innovation = () => {
  return (
    <section className="innovation-section" id="innovation">
      <div className="innovation-container">
        {/* Left: Image with large rounded corners */}
        <motion.div
          className="innovation-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={innovationBg} alt="Advanced Circuitry" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="innovation-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="innovation-tag">
            INNOVATION CENTRES
          </div>

          <h2 className="innovation-title">
            Engineering a <span>precise legacy.</span>
          </h2>

          <p className="innovation-desc">
            At our Innovation Lab, we merge climate science with cutting-edge AI. 
            Our STEWARDS are focused on reducing uncertainty in Scope 3 emissions 
            using planetary-scale sensor data and predictive modeling.
          </p>

          <div className="innovation-features">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h3>Sensor Fusion Technology</h3>
                <p>Aggregating 1B+ data points from IoT devices globally.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚙️</div>
              <div className="feature-text">
                <h3>Real-time Remittance</h3>
                <p>Automated carbon remittance based on smart contracts.</p>
              </div>
            </div>
          </div>

          <motion.a
            href="#team"
            className="innovation-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            MEET THE STEWARDS <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Innovation
