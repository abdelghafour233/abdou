import React, { useState, useEffect } from 'react';
import { Menu, X, Droplet, Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    const originalScrollY = window.scrollY;
    
    try {
      // Temporarily scroll to top to ensure full page capture
      window.scrollTo(0, 0);
      // Wait for any smooth scroll or transitions to finish
      await new Promise(resolve => setTimeout(resolve, 800));

      const element = document.body;
      
      const canvas = await html2canvas(element, {
        scale: 2, // High quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        scrollY: 0, // Force capture from top
        windowWidth: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
      });

      // Restore scroll position
      window.scrollTo(0, originalScrollY);

      const imgData = canvas.toDataURL('image/jpeg', 0.85); // Slightly compress for manageable file size
      const imgWidth = 210; // A4 width in mm
      // Calculate height based on aspect ratio
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Create a PDF with custom height to fit the whole landing page in one continuous sheet
      const pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('fuel-transfer-pump-manual.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('حدث خطأ أثناء إنشاء ملف PDF. يرجى المحاولة مرة أخرى.');
      window.scrollTo(0, originalScrollY); // Restore scroll even on error
    } finally {
      setIsDownloading(false);
    }
  };

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'المميزات', href: '#features' },
    { name: 'الطلب', href: '#order' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-brand-orange text-white' : 'bg-white text-brand-orange'}`}>
            <Droplet size={24} fill="currentColor" />
          </div>
          <span className={`text-2xl font-black ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            متجر <span className="text-brand-orange">حلال</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-bold text-lg hover:text-brand-orange transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-3 mr-4">
             <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className={`p-2 rounded-full border transition-all flex items-center gap-2 ${
                isScrolled 
                  ? 'border-brand-dark text-brand-dark hover:bg-gray-100' 
                  : 'border-white text-white hover:bg-white/10'
              }`}
              title="تحميل كملف PDF"
            >
              {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
              <span className="text-sm font-bold">PDF</span>
            </button>

            <a 
              href="#order" 
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                isScrolled 
                  ? 'bg-brand-dark text-white hover:bg-brand-orange' 
                  : 'bg-white text-brand-dark hover:bg-brand-orange hover:text-white'
              }`}
            >
              اتصل بنا
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-800 font-bold text-lg py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <button
              onClick={() => {
                handleDownloadPDF();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 text-gray-800 font-bold text-lg py-2 border-b border-gray-100 hover:text-brand-orange"
            >
              {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
              <span>تحميل الصفحة PDF</span>
          </button>
          <a 
            href="#order"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-brand-orange text-white font-bold py-3 rounded-lg"
          >
            اتصل بنا
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;