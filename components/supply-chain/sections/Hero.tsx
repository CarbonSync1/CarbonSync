'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import TrustBadges from '../components/TrustBadges'
import ClientLogos from '../components/ClientLogos'
import LiveCounter from '../components/LiveCounter'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/20 text-emerald-200 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AI‑Powered Carbon Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200 mb-6">
            Intelligent Carbon Management for a Net‑Zero Future
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-8">
            Real‑time, automated carbon accounting across your supply chain, turning data into actionable sustainability insights.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
              className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-xl hover:bg-emerald-500 transition cursor-pointer"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => window.dispatchEvent(new CustomEvent('openVideoModal'))}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:border-emerald-300 hover:bg-white/20 transition cursor-pointer"
            >
              <PlayCircle className="w-5 h-5" /> See Platform in Action
            </motion.button>
          </div>
          <LiveCounter />
          <TrustBadges className="mt-6" />
          <ClientLogos className="mt-8" />
        </motion.div>
        {/* Right mockup */}
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Placeholder for live dashboard mockup */}
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-900 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex items-start justify-between">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white/90 text-sm font-medium border border-white/10">
                  Carbon Dashboard
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 backdrop-blur-md rounded-xl text-emerald-100 text-xs font-semibold border border-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-4 px-4 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20">
                    S1
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-100/70 mb-1">Scope 1 Emissions</div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div className="h-full bg-emerald-400 rounded-full" initial={{ width: "0%" }} animate={{ width: "65%" }} transition={{ duration: 1.5, delay: 0.2 }} />
                    </div>
                  </div>
                  <span className="text-white font-mono text-sm">1.2k</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="flex items-center gap-4 px-4 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/20">
                    S2
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-100/70 mb-1">Scope 2 Emissions</div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div className="h-full bg-teal-400 rounded-full" initial={{ width: "0%" }} animate={{ width: "45%" }} transition={{ duration: 1.5, delay: 0.4 }} />
                    </div>
                  </div>
                  <span className="text-white font-mono text-sm">890</span>
                </motion.div>
                
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="flex items-center gap-4 px-4 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
                    S3
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-100/70 mb-1">Scope 3 Emissions</div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div className="h-full bg-cyan-400 rounded-full" initial={{ width: "0%" }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.6 }} />
                    </div>
                  </div>
                  <span className="text-white font-mono text-sm">3.4k</span>
                </motion.div>
              </div>

              <div className="flex items-center justify-between px-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-teal-900 bg-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-emerald-100/60 font-medium">Updated just now</div>
              </div>
            </div>
            {/* Simple animated data particles */}
            <motion.div
              className="absolute top-4 left-8 w-2 h-2 bg-emerald-300 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-6 right-12 w-3 h-3 bg-teal-300 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
