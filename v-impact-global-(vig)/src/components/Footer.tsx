import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-[64px] px-10 flex items-center justify-between text-[10px] text-gray-400 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div>© 2026 V-Impact Global. Học thuật & Phát triển tư duy toàn cầu.</div>
        <div className="hidden md:block">Hệ sinh thái Gen Z chuyên nghiệp • Learning by Doing</div>
      </div>
    </footer>
  );
}
