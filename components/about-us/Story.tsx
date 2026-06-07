'use client';
import { motion } from 'framer-motion'
const storyBg = "/about-assets/story-bg.webp";

const Story = () => {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        {/* Left: Image */}
        <motion.div
          className="story-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={storyBg} alt="Forest and lake landscape" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="story-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="story-tag">
            <span className="story-tag-dot" />
            OUR STORY
          </div>

          <h2 className="story-title">
            From a single seed of frustration to a global canopy.
          </h2>

          <p className="story-desc">
            NextLevel was born from the realization that while the
            climate crisis was accelerating, the tools to manage it were
            stuck in the past. Today, we are transforming how leading
            organizations manage their environmental footprint,
            providing the digital infrastructure for planetary
            stewardship.
          </p>

          <motion.a
            className="story-cta"
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            READ OUR FULL STORY <span className="story-arrow">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Story
