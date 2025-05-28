'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  Map, 
  Users,
  Menu,
  X,
  Layers
} from 'lucide-react';

const navigationItems = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/use-cases', label: 'Use Cases', icon: Target },
  { href: '/pain-points', label: 'Pain Points', icon: AlertTriangle },
  { href: '/solutions', label: 'Solutions', icon: CheckCircle },
  { href: '/spaces', label: 'Spaces', icon: Layers },
  { href: '/roadmap', label: 'Roadmap', icon: Map },
  { href: '/org-chart', label: 'Org Chart', icon: Users },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF5000] to-[#1E40AF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Hypha Flywheel</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#FF5000] hover:bg-[#FF5000]/90 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-[#FF5000]/10 hover:text-[#FF5000]'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href));
                
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start space-x-3 ${
                        isActive 
                          ? 'bg-[#FF5000] hover:bg-[#FF5000]/90 text-white' 
                          : 'text-gray-700 hover:bg-[#FF5000]/10 hover:text-[#FF5000]'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}