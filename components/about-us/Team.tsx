'use client';
import { motion } from 'framer-motion'
const team1 = "/about-assets/team-1.webp";

const team = [
  {
    name: 'Adrian Vane',
    role: 'CHIEF EXECUTIVE OFFICER',
    image: team1,
  },
  {
    name: 'Sarah Chen',
    role: 'CHIEF TECHNOLOGY OFFICER',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop&grayscale=true',
  },
  {
    name: 'Marcus Thorne',
    role: 'CHIEF SCIENCE OFFICER',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop&grayscale=true',
  },
  {
    name: 'Elena Rossi',
    role: 'CHIEF PRODUCT OFFICER',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop&grayscale=true',
  },
]

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="team-tag">THE STEWARDS</div>
          <h2 className="team-title">
            The team behind the <span>intelligence.</span>
          </h2>
          <a href="#" className="team-link">
            EXPLORE GLOBAL NETWORK <span>→</span>
          </a>
        </motion.div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
