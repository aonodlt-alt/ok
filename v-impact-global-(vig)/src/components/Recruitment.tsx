import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react';

export default function Recruitment() {
  return (
    <section className="py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-vig-black text-white rounded-[24px] p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-tight">
            Trở thành một phần của VIG
          </h2>
          <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto">
            Phát triển tư duy phản biện, rèn luyện kỹ năng lãnh đạo và xây dựng hồ sơ năng lực cá nhân trong môi trường học thuật chuyên nghiệp.
          </p>
          <button className="bg-white text-vig-black px-8 py-4 rounded-[12px] font-bold text-sm hover:bg-vig-purple transition-colors">
            Ứng tuyển ngay
          </button>
        </motion.div>
      </div>
    </section>
  );
}
