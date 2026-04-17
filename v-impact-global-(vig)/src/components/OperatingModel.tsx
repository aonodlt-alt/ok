import { motion } from 'motion/react';
import { Mic2, Rocket, GraduationCap, MessageCircle } from 'lucide-react';

const seasons = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Tranh biện (Debate)',
    desc: 'Rèn luyện tư duy phản biện và kỹ năng lập luận sắc bén.',
    color: 'bg-vig-purple/10 text-vig-purple'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Khởi nghiệp (Startup)',
    desc: 'Khơi dậy tinh thần đổi mới sáng tạo và kỹ năng quản trị.',
    color: 'bg-vig-blue/10 text-vig-blue'
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: 'Diễn thuyết (Public Speaking)',
    desc: 'Làm chủ sân khấu và truyền cảm hứng qua lời nói.',
    color: 'bg-vig-yellow/10 text-vig-yellow'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Du học (Global Orientation)',
    desc: 'Định hướng tương lai và kết nối với tri thức toàn cầu.',
    color: 'bg-vig-purple/10 text-vig-purple'
  }
];

export default function OperatingModel() {
  return (
    <section id="model" className="py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {seasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="utility-card"
            >
              <h3 className="text-[13px] font-bold mb-1">{item.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
