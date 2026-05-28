'use client';
import { motion } from 'framer-motion'

const brands = [
  'STRIPE',
  'BLACKROCK',
  'SALESFORCE',
  'MICROSOFT',
  'UNILEVER',
  'GOLDMAN SACHS',
  'ACCENTURE',
  'MORGAN STANLEY',
]

const Logos = () => {
  return (
    <div className="logos-section">
      <div className="logos-wrapper">
        <motion.div
          className="logos-track"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div key={index} className="logo-item">
              {brand}
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {brands.map((brand, index) => (
            <div key={`dup-${index}`} className="logo-item">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Logos
