'use client';

import {
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book a Demo', href: '/book-demo' },
  ],
  Platform: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Net Zero', href: '/solutions/net-zero' },
    { name: 'Supply Chain', href: '/solutions/supply-chain' },
    { name: 'Pricing', href: '/platform/pricing' },
  ],
  Resources: [
    { name: 'Documentation', href: '/platform/resources' },
    { name: 'Blog', href: '/platform/resources' },
    { name: 'Guides', href: '/platform/resources' },
    { name: 'Support', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Data Processing', href: '/data-processing-agreement' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
};

const PremiumFooter = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="col-span-2 md:col-span-2"
            >
              <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-bold">C</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Carbon<span className="text-green-400">Sync</span>
                </span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
                The intelligent ESG layer for modern enterprise. Empowering
                businesses to achieve net-zero through smart tracking and deep
                analytics.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-2 max-w-xs"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Join our newsletter"
                    required
                    className="w-full px-4 py-2.5 text-sm bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 bg-green-500 hover:bg-green-400 text-gray-900 p-2.5 rounded-lg transition-all active:scale-95"
                  aria-label="Subscribe"
                >
                  {subscribed ? (
                    <span className="text-sm font-semibold px-1">✓</span>
                  ) : (
                    <Mail size={16} />
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-green-400 mt-2">
                  Thanks for subscribing!
                </p>
              )}

              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: Twitter, href: 'https://x.com/carbonsync', label: 'Twitter' },
                  { icon: Linkedin, href: 'https://linkedin.com/company/carbonsync', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([title, items]) => (
              <motion.div key={title} variants={itemVariants}>
                <h3 className="text-xs font-bold text-gray-400 tracking-[0.15em] uppercase mb-5">
                  {title}
                </h3>
                <ul className="space-y-3.5">
                  {items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-sm transition-colors inline-flex items-center gap-1 group ${
                            active
                              ? 'text-green-400'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {item.name}
                          <ArrowUpRight
                            size={12}
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CarbonSync Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <span className="w-px h-3 bg-gray-700" />
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <span className="w-px h-3 bg-gray-700" />
            <Link href="/data-processing-agreement" className="hover:text-gray-300 transition-colors">
              Data Processing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
