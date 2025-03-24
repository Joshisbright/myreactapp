import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when the window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="font-poppins text-2xl md:text-3xl font-bold tracking-wide cursor-pointer">
            Ad<span className="text-purple neon-glow ml-1">Maiora</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href}>
                <span className={`nav-link font-poppins text-sm tracking-wider font-medium cursor-pointer ${
                  location === link.href ? "nav-link-active" : ""
                }`}>
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div 
          className={`hamburger md:hidden ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Mobile Navigation - Full Screen Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
        <div className="container mx-auto px-4 py-10 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <Link href="/">
              <span className="font-poppins text-3xl font-bold tracking-wide cursor-pointer">
                Ad<span className="text-purple neon-glow ml-1">Maiora</span>
              </span>
            </Link>
            
            <div 
              className="hamburger active" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <nav className="flex-grow flex flex-col justify-center">
            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link, index) => (
                <div 
                  key={link.name} 
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }} 
                  className={`fade-in w-full text-center ${isMenuOpen ? 'animate-fadeIn' : ''}`}
                >
                  <Link href={link.href}>
                    <span className={`text-3xl font-poppins font-medium tracking-wider cursor-pointer transition-all duration-300 ${
                      location === link.href 
                        ? "text-purple neon-glow" 
                        : "text-white hover:text-purple"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </nav>
          
          <div className="pb-10 text-center text-white/50 text-sm font-inter">
            © 2025 Ad Maiora. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
