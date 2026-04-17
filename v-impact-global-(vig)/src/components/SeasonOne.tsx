import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function SeasonOne() {
  return (
    <section id="season1" className="py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-vig-yellow rounded-[24px] p-10 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="tag text-vig-black/40">Featured Season</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
              Debatify Vietnam
            </h2>
            <p className="text-base md:text-lg text-vig-black/70 mb-8 leading-relaxed">
              Đây là chương trình khởi đầu của hệ sinh thái VIG, tập trung vào tranh biện học thuật. Rèn luyện tư duy phản biện & bản lĩnh Gen Z.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl">
                <p className="text-[10px] font-bold uppercase opacity-60">Thời gian</p>
                <p className="text-sm font-bold">04/2026 – 10/2026</p>
              </div>
              <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl">
                <p className="text-[10px] font-bold uppercase opacity-60">Hình thức</p>
                <p className="text-sm font-bold">Online & Offline</p>
              </div>
            </div>

            <button className="bg-vig-black text-white px-8 py-4 rounded-[12px] font-bold text-sm hover:opacity-90 transition-all">
              👉 Đăng ký tham gia ngay
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
