import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { OrderFormData } from '../types';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend here
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-20 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white/10 p-12 rounded-3xl backdrop-blur-lg border border-white/20">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">تم استلام طلبك بنجاح!</h2>
            <p className="text-gray-300 text-lg">سقوم فريق المبيعات بالتواصل معك في أقرب وقت لتأكيد التفاصيل وإتمام الطلب.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-6 py-2 bg-brand-orange rounded-full hover:bg-orange-600 transition-colors"
            >
              إرسال طلب جديد
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              استثمر في <span className="text-brand-orange">المستقبل</span> الآن
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              لا تضيع الفرصة للحصول على مضخة النقل الأكثر كفاءة وأماناً في السوق. 
              العروض الحالية حصرية ولفترة محدودة.
            </p>
            
            <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-xl flex items-start gap-4 mb-8">
              <AlertTriangle className="text-yellow-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-500 mb-1">تنبيه هام</h4>
                <p className="text-sm text-gray-300">الطلب للجادين فقط. الكميات محدودة والأولوية لأسبقية الحجز.</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-brand-orange" size={20} />
                <span>ضمان شامل لمدة عامين</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-brand-orange" size={20} />
                <span>خدمة دعم فني 24/7</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-brand-orange" size={20} />
                <span>شحن سريع لجميع المناطق</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-6 border-b pb-4">نموذج طلب عرض سعر</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      required 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
                  <input 
                    type="text" 
                    required 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                    placeholder=""
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-500/30 transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
                >
                  <span>إرسال الطلب الآن</span>
                  <Send size={20} />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                   بالضغط على إرسال، أنت توافق على سياسة الخصوصية وتؤكد جدية الطلب.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;