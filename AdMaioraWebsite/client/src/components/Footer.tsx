import { Link } from "wouter";
import { Mail, Linkedin, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="relative">
      {/* Gold divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gold/30"></div>
      
      {/* Main footer */}
      <div className="bg-navy-gradient text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Column 1: Company Info */}
            <div className="fade-in">
              <div className="font-greatVibes text-4xl text-gold mb-5">Ad Maiora</div>
              <p className="text-white/80 mb-6 font-lora leading-relaxed">
                Procurement consulting for Indian SMEs, helping businesses connect with reliable suppliers and streamline their procurement processes.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:info@admaiora.in" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center
                    hover:bg-gold/20 transition-colors duration-300 group"
                  aria-label="Email us"
                >
                  <Mail size={18} className="text-gold group-hover:text-gold-light transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center
                    hover:bg-gold/20 transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-gold group-hover:text-gold-light transition-colors duration-300" />
                </a>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div className="fade-in-delay-1">
              <h3 className="text-xl font-playfair font-bold mb-6 text-gold-light relative inline-block pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-white/80 hover:text-gold flex items-center cursor-pointer transition-colors duration-300">
                        <ChevronRight size={16} className="mr-2 text-gold/60" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Resources */}
            <div className="fade-in-delay-2">
              <h3 className="text-xl font-playfair font-bold mb-6 text-gold-light relative inline-block pb-2">
                Resources
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold"></span>
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-white/80 hover:text-gold flex items-center cursor-pointer transition-colors duration-300">
                        <ChevronRight size={16} className="mr-2 text-gold/60" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Contact */}
            <div className="fade-in-delay-3">
              <h3 className="text-xl font-playfair font-bold mb-6 text-gold-light relative inline-block pb-2">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gold"></span>
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <span className="text-white/80 font-lora">New Delhi, India</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <span className="text-white/80 font-lora">+91 123 456 7890</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <a 
                    href="mailto:info@admaiora.in" 
                    className="text-white/80 hover:text-gold transition-colors duration-300 font-lora"
                  >
                    info@admaiora.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer bottom */}
          <div className="border-t border-gold/10 mt-12 pt-8 text-center">
            <p className="text-gold/70 font-playfair">© {new Date().getFullYear()} Ad Maiora. A Legacy of Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
