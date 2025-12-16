import React from 'react';

const ImageGallery: React.FC = () => {
  // Using placeholder images with industrial/mechanical themes
  const images = [
    { src: 'https://picsum.photos/seed/pump_detail1/800/600', alt: 'صورة جانبية للمضخة' },
    { src: 'https://picsum.photos/seed/pump_detail2/800/600', alt: 'مقبض الضخ اليدوي' },
    { src: 'https://picsum.photos/seed/pump_detail3/800/600', alt: 'أنابيب التوصيل' },
    { src: 'https://picsum.photos/seed/pump_usage/800/600', alt: 'الاستخدام في الموقع' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            صور المنتج <span className="text-brand-orange">على أرض الواقع</span>
          </h2>
          <p className="text-gray-600 text-lg">شاهد جودة التصنيع والتفاصيل الدقيقة التي تميز منتجنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer">
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <p className="text-white text-sm font-bold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;