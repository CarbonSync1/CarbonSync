'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import type { ArchitectureLayer } from '../types'

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[]
}

export default function ArchitectureDiagram({ layers }: ArchitectureDiagramProps) {
  return (
    <div className="relative flex flex-col items-center gap-0">
      {layers.map((layer, index) => (
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="w-full"
        >
          <div
            className={`relative bg-white rounded-2xl p-4 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 ${
              index === 0
                ? 'border-emerald-200 bg-emerald-50/50'
                : index === layers.length - 1
                  ? 'border-teal-200 bg-teal-50/50'
                  : ''
            }`}
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="text-sm font-semibold text-slate-900 min-w-[180px]">
                {layer.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {index < layers.length - 1 && (
            <div className="flex justify-center py-2">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-5 h-5 text-emerald-500" />
              </motion.div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
