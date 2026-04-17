import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const team = [
  {
    role: 'Founder',
    name: 'Đặng Lê Minh Hạnh',
    image: 'https://picsum.photos/seed/hanh/400/400',
    desc: 'Tầm nhìn chiến lược và định hướng phát triển hệ sinh thái VIG.',
    highlight: true
  },
  {
    role: 'Co-Founder',
    name: 'Dương Linh Thương',
    image: 'https://picsum.photos/seed/thuong/400/400',
    desc: 'Điều hành và quản lý chất lượng học thuật.',
    highlight: false
  },
  {
    role: 'Co-Founder',
    name: 'Bồ Thiên Hương',
    image: 'https://picsum.photos/seed/huong/400/400',
    desc: 'Phát triển cộng đồng và đối ngoại.',
    highlight: false
  }
];

export default function Team() {
  return (
    <section id="team" className="py-12 px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="utility-card"
        >
          <span className="tag">Ban tổ chức</span>
          <div className="space-y-4">
            {team.map((member, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={cn('w-8 h-8 rounded-full flex-shrink-0', member.highlight ? 'bg-vig-purple' : 'bg-vig-blue')} />
                <div className="member-info">
                  <h6 className="text-[12px] font-bold">{member.name}</h6>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-vig-black text-white rounded-[16px] p-8 flex flex-col justify-center"
        >
          <h5 className="text-[13px] font-bold mb-2 text-vig-blue">Trở thành đối tác</h5>
          <p className="text-[11px] opacity-70 mb-1">vimpactglobal.infor@gmail.com</p>
          <p className="text-[11px] opacity-70 mb-4">Hotline: 0913 095 028</p>
          <p className="text-[11px] font-bold text-white">FB: /V-ImpactGlobal</p>
        </motion.div>
      </div>
    </section>
  );
}
