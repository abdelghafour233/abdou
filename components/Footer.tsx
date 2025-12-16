import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Droplet } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange text-white rounded flex items-center justify-center">
                <Droplet size={18} fill="currentColor" />
              </div>
              <span className="text-2xl font-black text-white">
                متجر <span className="text-brand-orange">حلال</span>
              </span>
            </div>
            <p className="max-w-sm text-gray-400">
              شريكك الاستراتيجي في حلول نقل الطاقة والسوائل. منتجات عملية لغدٍ أكثر كفاءة واستدامة.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-orange transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-brand-orange transition-colors">المميزات</a></li>
              <li><a href="#order" className="hover:text-brand-orange transition-colors">اطلب الآن</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Twitter size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-all"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر حلال.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;