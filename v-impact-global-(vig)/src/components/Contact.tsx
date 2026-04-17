import { motion } from 'motion/react';
import { Mail, Facebook, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="utility-card p-10"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="tag">Liên hệ</span>
              <h2 className="text-2xl font-bold mb-6">Kết nối với chúng tôi</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <p>Email: vimpactglobal.infor@gmail.com</p>
                <p>Hotline: 0913 095 028</p>
                <p>Fanpage: fb.com/V-ImpactGlobal</p>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-vig-purple outline-none transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-vig-purple outline-none transition-all text-sm"
              />
              <textarea
                rows={3}
                placeholder="Lời nhắn"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-vig-purple outline-none transition-all text-sm resize-none"
              />
              <button className="w-full bg-vig-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
