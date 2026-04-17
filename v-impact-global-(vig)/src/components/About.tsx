import { motion } from 'motion/react';
import { BookOpen, MessageSquare, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-vig-gray rounded-[24px] p-10 flex flex-col justify-center"
        >
          <span className="tag">Tổng quan VIG</span>
          <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
            Học thuật thực chiến
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Học ngoại ngữ không chỉ dừng lại ở ngữ pháp. Bản chất là công cụ để tư duy và phản biện đa chiều trong môi trường thực tiễn.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            V-Impact Global (VIG) được xây dựng như một hệ sinh thái học thuật phi lợi nhuận, nơi người trẻ được đặt vào các tình huống thực tiễn để trình bày quan điểm, phản biện đa chiều và giao tiếp bằng tiếng Anh trong môi trường học thuật.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-vig-yellow rounded-[18px] p-6 relative">
            <span className="tag text-vig-black/40">Featured Season</span>
            <h4 className="text-lg font-bold mb-1">Debatify Vietnam</h4>
            <p className="text-sm opacity-80">
              Tháng 04/2026 – 10/2026. <br />
              Rèn luyện tư duy phản biện & bản lĩnh Gen Z.
            </p>
          </div>

          <div className="bg-vig-gray rounded-[24px] p-6 flex-1">
            <span className="tag">Mô hình</span>
            <h3 className="text-lg font-bold mb-3">Hệ sinh thái theo mùa</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mỗi mùa là một tổ hợp sự kiện và cuộc thi xoay quanh một chủ đề riêng biệt như Tranh biện, Khởi nghiệp, Diễn thuyết.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
