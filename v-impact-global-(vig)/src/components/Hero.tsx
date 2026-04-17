import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-12 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hero-gradient rounded-[24px] p-10 md:p-20 flex flex-col justify-center min-h-[500px] soft-shadow relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold leading-[1.1] mb-6 tracking-[-1.5px] uppercase"
            >
              CONNECT THROUGH SHARING, GROW IN VALUE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-vig-black/90 mb-8 leading-relaxed max-w-lg"
            >
              V-Impact Global là hệ sinh thái học thuật phi lợi nhuận, giúp người trẻ sử dụng tiếng Anh như một công cụ để tư duy, tranh luận và kết nối trong môi trường thực tiễn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <button className="bg-vig-black text-white px-6 py-3 rounded-[12px] font-semibold text-sm hover:opacity-90 transition-all">
                Ứng tuyển ngay
              </button>
              <button className="bg-white/40 backdrop-blur-md text-vig-black px-6 py-3 rounded-[12px] font-semibold text-sm hover:bg-white/60 transition-all">
                Tham gia cuộc thi
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
