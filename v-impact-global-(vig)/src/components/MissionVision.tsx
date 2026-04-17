import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" className="py-12 px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-vig-gray rounded-[24px] p-10"
        >
          <span className="tag">Sứ mệnh</span>
          <h2 className="text-2xl font-bold mb-4">Cộng đồng học thuật Gen Z</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Xây dựng một cộng đồng học ngoại ngữ dành cho người trẻ, nơi mỗi cá nhân phát triển Giao tiếp, Tư duy phản biện và Bản lĩnh cá nhân.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Giao tiếp', 'Tư duy phản biện', 'Bản lĩnh'].map((item, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase border border-gray-100">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-vig-gray rounded-[24px] p-10"
        >
          <span className="tag">Tầm nhìn</span>
          <h2 className="text-2xl font-bold mb-4">Tư duy toàn cầu</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Trở thành một hệ sinh thái giáo dục ngoại ngữ năng động, kết nối người trẻ và thúc đẩy tư duy toàn cầu thông qua mô hình "Learning by Doing".
          </p>
        </motion.div>
      </div>
    </section>
  );
}
