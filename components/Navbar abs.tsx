'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const links = [
        {
            name: 'Solutions',
            href: '#',
            hasDropdown: true,
            items: [
                { name: 'Net Zero', description: 'Track and manage carbon footprint', href: '/solutions/net-zero' },
                { name: 'Supply Chain', description: 'Monitor value chain impact', href: '/solutions/supply-chain' },
            ]
        },
        {
            name: 'Company',
            href: '#',
            hasDropdown: true,
            items: [
                { name: 'About Us', description: 'Our mission and vision for a greener future', href: '/about' },
                { name: 'Analytics', description: 'Data-driven insights for your business', href: '/analytics' },
                { name: 'Careers', description: 'Join our mission and grow with us', href: '/careers' },
                { name: 'Contact Us', description: 'Get in touch with our team', href: '/contact' },
            ]
        },
        { name: 'Dashboard', href: '/dashboard' },
        {
            name: 'Platform',
            href: '#',
            hasDropdown: true,
            items: [
                { name: 'Plans', description: 'Flexible pricing for every business size', href: '/plans' },
                { name: 'Resources', description: 'Documentation, guides, and insights', href: '/resources' },
            ]
        },
        { name: 'Profile', href: '/profile' },
    ];

    return (
        <nav className="w-full bg-white border-b border-gray-100 fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/carbonsync-logo.png"
                        alt="CarbonSync"
                        width={44}
                        height={44}
                        priority
                        unoptimized
                        className="transition-transform group-hover:rotate-12 duration-300"
                    />
                    <span className="text-2xl font-bold tracking-tight text-[#1a2e35]">
                        Carbon<span className="text-[#10b981]">Sync</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map(link => (
                        <div key={link.name} className="relative group/item">
                            <Link
                                href={link.href}
                                className="text-gray-600 hover:text-gray-900 text-[15px] font-medium py-2 flex items-center gap-1 transition-colors"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="text-gray-400 group-hover/item:rotate-180 transition-transform duration-200" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.hasDropdown && (
                                <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200">
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-2 min-w-[240px]">
                                        {link.items?.map(item => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group/subitem"
                                            >
                                                <div className="text-sm font-semibold text-gray-900 flex items-center justify-between">
                                                    {item.name}
                                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/subitem:opacity-100 group-hover/subitem:translate-x-0 transition-all" />
                                                </div>
                                                {item.description && (
                                                    <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center">
                    <Link
                        href="/book-demo"
                        className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all active:scale-[0.98]"
                    >
                        Book a demo
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 py-6 bg-white border-t border-gray-100 flex flex-col gap-6 h-[calc(100vh-72px)] overflow-y-auto">
                    {links.map(link => (
                        <div key={link.name} className="flex flex-col gap-4">
                            <button
                                className="text-gray-900 text-lg font-bold flex justify-between items-center w-full"
                                onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-400 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                    />
                                )}
                            </button>

                            {link.hasDropdown && activeDropdown === link.name && (
                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100 animate-in slide-in-from-left duration-200">
                                    {link.items?.map(item => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-gray-600 font-medium py-1"
                                            onClick={() => setOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-auto">
                        <Link
                            href="/book-demo"
                            className="bg-black text-white px-5 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 w-full"
                            onClick={() => setOpen(false)}
                        >
                            Book a demo
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
