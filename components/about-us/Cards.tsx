'use client';
import { motion } from 'framer-motion'

const Cards = () => {
  return (
    <section className="cards">
      {[1,2,3].map((item) => (
        <motion.div 
          key={item}
          className="card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3>Card {item}</h3>
          <p>Animated card content</p>
        </motion.div>
      ))}
    </section>
  )
}

export default Cards
