import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Simulating page loading with a more dramatic animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Modern QClay-style Preloader */}
      {loading && (
        <div className="preloader">
          <div className="flex flex-col items-center justify-center">
            <div className="preloader-spinner mb-8"></div>
            <div className="text-3xl font-poppins font-bold tracking-wider text-white mb-2">
              Ad <span className="text-purple neon-glow">Maiora</span>
            </div>
            <p className="text-white/60 text-sm font-inter tracking-widest uppercase">
              Procurement Excellence
            </p>
          </div>
        </div>
      )}
      
      <div className={`flex flex-col min-h-screen bg-[#1A1A1A] transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* QClay-style fixed transparent header that becomes solid on scroll */}
        <div className={`header-transparent ${scrolled ? 'header-solid' : ''}`}>
          <Header />
        </div>
        
        {/* Push content down to account for fixed header */}
        <div className="pt-24"></div>
        
        {/* Main content */}
        <main className="flex-grow">{children}</main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
