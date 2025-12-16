import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/industrial_pump/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(120%)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-brand-orange/20 border border-brand-orange rounded-full text-brand-orange font-bold text-sm mb-6 animate-fade-in-up">
            🛠️ الحل العملي والأكثر متانة للأعمال الشاقة
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            المضخة اليدوية لنقل <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-orange to-yellow-400">
              الوقود والزيوت
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed border-r-4 border-brand-orange pr-6">
            ضخ سريع بجهد يدوي أقل. مصممة لتدوم طويلاً في أصعب الظروف دون الحاجة لمصدر طاقة.
            الخيار الأمثل للورش، المزارع، والمواقع الإنشائية.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
            <a 
              href="#order"
              className="px-8 py-4 bg-brand-orange text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-600/40 flex items-center justify-center gap-2 group min-w-[200px]"
            >
              اطلبها الآن
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </a>
            
            <div className="flex flex-col items-start bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <span className="text-gray-400 text-sm font-bold mb-1">سعر العرض الخاص</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">149</span>
                <span className="text-xl font-bold text-brand-orange">درهم</span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-700 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">يدوية</h4>
              <p className="text-sm text-gray-400">لا تحتاج كهرباء</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
              <p className="text-sm text-gray-400">مانعة للتسرب</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">متينة</h4>
              <p className="text-sm text-gray-400">مواد عالية الجودة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;