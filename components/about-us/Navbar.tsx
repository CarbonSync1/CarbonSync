'use client';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-logo">
        NEXT<span>LEVEL</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Careers</li>
        <li className="navbar-cta">Contact Us</li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
