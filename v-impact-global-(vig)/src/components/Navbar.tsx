import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Trang chủ', href: '#home' },
  { name: 'Giới thiệu', href: '#about' },
  { name: 'Mô hình', href: '#model' },
  { name: 'Sứ mệnh', href: '#mission' },
  { name: 'Giá trị', href: '#values' },
  { name: 'Season 1', href: '#season1' },
  { name: 'Ban tổ chức', href: '#team' },
  { name: 'Liên hệ', href: '#contact' },
];

export default function Navbar() {
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 h-[64px] flex items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="https://sf-static.upanhlaylink.com/view/image_202604156e5b7dd728cdddddfd6c268100b32fbd.jpg" 
            alt="VIG Logo" 
            className="h-8 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-vig-black/70 hover:text-vig-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-vig-black text-white px-4 py-2 rounded-full text-[12px] font-semibold hover:opacity-90 transition-all">
            Ứng tuyển ngay
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 lg:hidden soft-shadow"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-vig-black text-white px-6 py-3 rounded-xl text-center font-semibold">
              Ứng tuyển ngay
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
