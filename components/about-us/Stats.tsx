'use client';
import { motion } from 'framer-motion'

const stats = [
  { number: '150', suffix: '+', label: 'Global Clients' },
  { number: '98', suffix: '%', label: 'Success Rate' },
  { number: '12', suffix: '', label: 'Years Experience' },
  { number: '45', suffix: 'M+', label: 'Revenue Generated' },
]

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="stat-number">
              {stat.number}<span>{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
