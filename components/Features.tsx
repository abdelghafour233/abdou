import React from 'react';
import { Zap, ShieldCheck, Droplets, Leaf, Wrench, Factory } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-orange transform hover:-translate-y-1">
    <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: <Zap size={28} />,
      title: "ضخ سريع وجهد أقل",
      description: "آلية ميكانيكية متطورة تضاعف قوة الضخ مع كل حركة يدوية، لنقل السوائل بسرعة وسهولة."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "إحكام تام",
      description: "تصميم هندسي دقيق يمنع التسرب تماماً ويحافظ على نظافة المكان والسوائل المنقولة."
    },
    {
      icon: <Droplets size={28} />,
      title: "متعددة الاستخدامات",
      description: "مناسبة لنقل الديزل، البنزين، الزيوت، والماء، مما يجعلها أداة جوهرية لكل المواقع."
    },
    {
      icon: <Leaf size={28} />,
      title: "اقتصادية وعملية",
      description: "لا تتطلب كهرباء أو بطاريات، وتمنع هدر الوقود أثناء النقل بفضل التحكم اليدوي الدقيق."
    },
    {
      icon: <Wrench size={28} />,
      title: "سهلة التركيب والفك",
      description: "تصميم بسيط يسمح بفكها وتنظيفها وتخزينها بسهولة، مع متانة تتحمل أصعب الظروف."
    },
    {
      icon: <Factory size={28} />,
      title: "للأعمال الشاقة",
      description: "مصنوعة من مواد عالية الجودة مقاومة للتآكل والصدأ، مثالية للورش والمصانع."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase">الجودة والمتانة</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mt-2 mb-6">
            مواصفات <span className="text-brand-orange">عملية</span> لأداء يومي
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نقدم لك المضخة اليدوية التي تجمع بين سهولة الاستخدام، القوة، والأمان في منتج واحد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;