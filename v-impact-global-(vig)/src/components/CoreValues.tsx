import { motion } from 'motion/react';
import { Shield, Brain, Users2, Award } from 'lucide-react';

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Thực chiến ngoại ngữ',
    items: ['100% môi trường học thuật bằng tiếng Anh', 'Không học thụ động'],
    color: 'bg-vig-purple'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Critical Thinking',
    items: ['Phát triển tư duy phản biện', 'Tranh luận đa chiều'],
    color: 'bg-vig-blue'
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: 'Kỹ năng lãnh đạo',
    items: ['Làm việc nhóm', 'Điều phối và quản lý'],
    color: 'bg-vig-yellow'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Portfolio cá nhân',
    items: ['Chứng nhận & Thành tích', 'Kinh nghiệm thực tế'],
    color: 'bg-vig-purple'
  }
];

export default function CoreValues() {
  return (
    <section id="values" className="py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="utility-card"
            >
              <h3 className="text-[13px] font-bold mb-1">{value.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {value.items.join(' • ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
