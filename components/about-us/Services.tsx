'use client';
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🛡️',
    title: 'Risk Management',
    desc: 'Comprehensive risk assessment and mitigation strategies tailored to protect your organization\'s future.',
  },
  {
    icon: '📊',
    title: 'Compliance & Audit',
    desc: 'End-to-end compliance management ensuring your business meets all regulatory and industry standards.',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity',
    desc: 'Advanced threat detection and security frameworks that safeguard your critical infrastructure.',
  },
  {
    icon: '⚡',
    title: 'Digital Transformation',
    desc: 'Strategic digital roadmaps and implementation that modernize your operations with confidence.',
  },
  {
    icon: '🌍',
    title: 'ESG Advisory',
    desc: 'Sustainability consulting and ESG reporting frameworks to guide your net-zero transition.',
  },
  {
    icon: '📈',
    title: 'Strategic Growth',
    desc: 'Data-driven insights and growth strategies to scale your business across new markets.',
  },
]

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <motion.div
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="line" />
          What We Do
          <span className="line" />
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Empowering organizations with solutions built on trust, expertise, and unwavering commitment.
        </motion.p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="service-link">
              Learn More <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
