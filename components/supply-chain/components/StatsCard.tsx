'use client'

import { motion } from 'framer-motion'
import type { Stat } from '../types'

interface StatsCardProps {
  stat: Stat
  index: number
}

export default function StatsCard({ stat, index }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      className="flex flex-col items-center p-4"
    >
      <span className="text-3xl md:text-4xl font-bold text-emerald-600">
        {stat.value}
      </span>
      <span className="text-sm text-slate-500 mt-1 text-center">
        {stat.label}
      </span>
    </motion.div>
  )
}
