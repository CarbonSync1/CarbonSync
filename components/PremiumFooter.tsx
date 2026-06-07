'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PremiumFooter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeQR, setActiveQR] = useState<'linkedin' | 'x' | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xojyggok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        console.error("Formspree submission error");
      }
    } catch (error) {
      console.error("Formspree submission failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="w-full mt-auto bg-[#f8fafc] text-[#0f172a] font-sans">
      

      {/* Main Footer Links Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Socials - takes up more space on large screens */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="flex items-start">
                <img src="/logo.webp" alt="CarbonSync" className="h-16 w-auto object-contain" />
              </div>
              <p className="text-[#334155] text-[16px] font-bold leading-relaxed max-w-[280px]">
                Built on the belief in a greener, more sustainable future.
              </p>
            </div>

            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 mt-4">Connect & Scan</p>
            <div className="flex flex-wrap items-center gap-3">
              {/* LinkedIn Icon only */}
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5] shadow-sm transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* X Icon only */}
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-slate-600 hover:text-black hover:border-black shadow-sm transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              {/* LinkedIn QR Button */}
              <button onClick={() => setActiveQR('linkedin')} type="button" className="h-10 px-4 rounded-xl bg-white border border-gray-100 flex items-center gap-2 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5] shadow-sm transition-colors font-black text-[10px] tracking-wider cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                LINKEDIN
              </button>

              {/* X QR Button */}
              <button onClick={() => setActiveQR('x')} type="button" className="h-10 px-4 rounded-xl bg-white border border-gray-100 flex items-center gap-2 text-slate-600 hover:text-black hover:border-black shadow-sm transition-colors font-black text-[10px] tracking-wider cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                X
              </button>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[14px] font-black tracking-widest text-[#0f172a] uppercase mb-6">Solutions</h4>
              <ul className="space-y-4">
                <li><Link href="/solutions/net-zero" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Net Zero</Link></li>
                <li><Link href="/solutions/supply-chain" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Supply Chain</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-black tracking-widest text-[#0f172a] uppercase mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Analytics</Link></li>
                <li><Link href="/careers" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-black tracking-widest text-[#0f172a] uppercase mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><button type="button" onClick={() => router.push('/dashboard')} className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors cursor-pointer">Dashboard</button></li>
                <li><button type="button" onClick={() => router.push('/profile')} className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors cursor-pointer">Profile</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-black tracking-widest text-[#0f172a] uppercase mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="/platform/resources" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Guides</Link></li>
                <li><Link href="/platform/resources" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Articles</Link></li>
                <li><Link href="/platform/resources" className="text-[15px] font-medium text-slate-500 hover:text-green-600 transition-colors">Whitepapers</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>


      {/* QR Code Modal */}
      {activeQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setActiveQR(null)}>
          <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl max-w-sm w-full relative flex flex-col items-center duration-300" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveQR(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-gray-100 text-slate-800">
              {activeQR === 'linkedin' ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              )}
            </div>
            <h3 className="text-2xl font-black text-[#0f172a] mb-2 text-center tracking-tight">
              Scan to Connect
            </h3>
            <p className="text-slate-500 font-medium text-[13px] mb-8 text-center leading-relaxed">
              {activeQR === 'linkedin' ? 'Connect with us on LinkedIn for the latest professional updates and insights.' : 'Follow us on X to stay up to date with our newest announcements.'}
            </p>
            <div className="w-full aspect-square bg-white rounded-2xl flex items-center justify-center border border-gray-100 p-2 shadow-inner">
              <img 
                src={activeQR === 'linkedin' ? '/linkedin_qr.webp' : '/x_qr.webp'} 
                alt={`${activeQR} QR Code`} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
