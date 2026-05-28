'use client';
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🎯',
    title: 'AI-Powered Precision',
    desc: 'Our proprietary algorithms process billions of data points to deliver 99.9% accuracy in carbon tracking.',
  },
  {
    icon: '🌐',
    title: 'Supply Chain Depth',
    desc: 'Unlock Scope 3 transparency with real-time tracking across your entire global vendor network.',
  },
  {
    icon: '⚖️',
    title: 'Compliance-First',
    desc: 'Fully aligned with SEC, CSRD, and BRSR mandates, making your reporting audit-ready instantly.',
  },
]

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <motion.div 
          className="why-us-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag"><span className="line" /> WHY CARBONSYNC?</div>
          <h2 className="section-title">The precision you need for a <span>circular future.</span></h2>
        </motion.div>

        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
