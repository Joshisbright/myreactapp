import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Handshake, Star, Quote, ChevronRight, ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const serviceSection = document.getElementById('services-section');
      
      if (serviceSection && scrollPosition > serviceSection.offsetTop + 100) {
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax effect for hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
        element.style.transform = `translate(${x * 50 * speed}px, ${y * 50 * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center bg-[#1A1A1A]" ref={heroRef}>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid z-0"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] rounded-full bg-purple/10 filter blur-[100px] animate-pulse parallax-element" data-speed="0.05"></div>
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full bg-purple/5 filter blur-[120px] animate-pulse parallax-element" data-speed="0.08" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col max-w-5xl mx-auto">
            <div className="fade-in">
              <span className="inline-block px-4 py-1 bg-purple/5 text-purple border border-purple/30 rounded-md text-sm font-poppins tracking-wider mb-6 animate-glow">
                PREMIUM PROCUREMENT CONSULTING
              </span>
              
              <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white tracking-wider">
                Is Your Procurement <span className="relative inline-block text-purple neon-glow">
                  Chaos
                  <span className="absolute bottom-1 left-0 w-full h-[2px] bg-purple/30"></span>
                </span> <br className="hidden md:block" />Stalling Your Dreams?
              </h1>
              
              <p className="text-xl mb-10 text-white/90 font-inter max-w-2xl leading-relaxed">
                Every delay, every hidden cost, every unreliable supplier—eating away at your growth. Isn't it time your business broke free from the procurement chaos?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <Link href="/contact">
                  <button className="btn-neon text-lg font-medium shadow-neon">
                    Contact Us for Pricing
                  </button>
                </Link>
                <Link href="/services">
                  <button className="btn-outline-neon text-lg font-medium flex items-center">
                    Learn How It Works
                    <ArrowUpRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
              
              <div className="flex flex-col md:flex-row items-start justify-start space-y-6 md:space-y-0 md:space-x-10 mt-4 opacity-90">
                <div className="flex items-center">
                  <div className="feature-icon-sm">
                    <CheckCircle size={24} className="text-[#9D4EDD]" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-poppins font-bold">Premium Quality</p>
                    <p className="text-white/70 text-sm">Thoroughly vetted suppliers</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="feature-icon-sm">
                    <CheckCircle size={24} className="text-[#9D4EDD]" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-poppins font-bold">Trusted by 200+ SMEs</p>
                    <p className="text-white/70 text-sm">Across multiple industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#9D4EDD]/10 z-10"></div>
      </section>

      {/* Services Overview */}
      <section id="services-section" className="py-section bg-[#121212] relative">
        <div className="absolute inset-0 bg-grid z-0"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#9D4EDD]/5 filter blur-[150px] animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Green accent line */}
          <div className="divider-neon-center"></div>
          
          <div className="text-center mb-20">
            <p className="text-[#9D4EDD] font-medium font-poppins tracking-wider mb-4">OUR PREMIUM SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white">What We Offer</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-inter">
              Ad Maiora provides exclusive procurement consulting services designed to elevate Indian SMEs with unmatched supplier connections and strategic insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="group">
                <Card className="modern-card h-full border-[#333333] hover:border-[#9D4EDD]/30 overflow-visible">
                  <div className="relative h-56 bg-[#2A2A2A] flex items-center justify-center overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-20 bg-center bg-cover transition-transform duration-700 group-hover:scale-110 rounded-t-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/50 to-[#2A2A2A] rounded-t-lg"></div>
                    <div className="relative z-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="w-24 h-24 feature-icon">
                        <Search size={42} className="text-[#9D4EDD]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl md:text-2xl font-poppins font-bold mb-4 text-white group-hover:text-[#9D4EDD] transition-colors duration-300">Find Elite Suppliers</h3>
                    <p className="text-white/70 font-inter leading-relaxed mb-6">
                      Connect with our exclusive network of trusted vendors perfectly tailored to your unique business needs and quality standards.
                    </p>
                    <Link href="/services">
                      <span className="neon-underline text-white font-medium font-poppins group-hover:text-[#9D4EDD] inline-flex items-center transition-colors duration-300 cursor-pointer">
                        Discover More 
                        <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="group">
                <Card className="modern-card h-full border-[#333333] hover:border-[#9D4EDD]/30 overflow-visible">
                  <div className="relative h-56 bg-[#2A2A2A] flex items-center justify-center overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-20 bg-center bg-cover transition-transform duration-700 group-hover:scale-110 rounded-t-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/50 to-[#2A2A2A] rounded-t-lg"></div>
                    <div className="relative z-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="w-24 h-24 feature-icon">
                        <FileText size={42} className="text-[#9D4EDD]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl md:text-2xl font-poppins font-bold mb-4 text-white group-hover:text-[#9D4EDD] transition-colors duration-300">Premium Insights</h3>
                    <p className="text-white/70 font-inter leading-relaxed mb-6">
                      Receive meticulously crafted supplier reports with exclusive industry insights and strategic recommendations for optimal decision-making.
                    </p>
                    <Link href="/services">
                      <span className="neon-underline text-white font-medium font-poppins group-hover:text-[#9D4EDD] inline-flex items-center transition-colors duration-300 cursor-pointer">
                        Explore Reports 
                        <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              <div className="group">
                <Card className="modern-card h-full border-[#333333] hover:border-[#9D4EDD]/30 overflow-visible">
                  <div className="relative h-56 bg-[#2A2A2A] flex items-center justify-center overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-20 bg-center bg-cover transition-transform duration-700 group-hover:scale-110 rounded-t-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A]/50 to-[#2A2A2A] rounded-t-lg"></div>
                    <div className="relative z-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="w-24 h-24 feature-icon">
                        <Handshake size={42} className="text-[#9D4EDD]" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl md:text-2xl font-poppins font-bold mb-4 text-white group-hover:text-[#9D4EDD] transition-colors duration-300">White-Glove Service</h3>
                    <p className="text-white/70 font-inter leading-relaxed mb-6">
                      Experience seamless deal coordination with our bespoke service handling every aspect of negotiations, contracts, and supplier onboarding.
                    </p>
                    <Link href="/services">
                      <span className="neon-underline text-white font-medium font-poppins group-hover:text-[#9D4EDD] inline-flex items-center transition-colors duration-300 cursor-pointer">
                        Discover Process 
                        <ArrowUpRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Liked Feature */}
      <section className="py-section bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Accent lines & effects */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9D4EDD]/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#9D4EDD]/10"></div>
        <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-[#9D4EDD]/5 filter blur-[150px] animate-pulse"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="feature-icon mx-auto mb-8">
              <Star className="w-10 h-10 text-[#9D4EDD]" />
            </div>
            <h2 className="text-4xl font-poppins font-bold mb-6 text-white">A Guiding Star for Excellence</h2>
            <p className="text-xl leading-relaxed font-inter text-white/80 mb-10">
              Our exclusive feedback-driven rating system highlights elite suppliers, ensuring you choose with absolute confidence. Authentic ratings from fellow premium SMEs illuminate your path to procurement excellence.
            </p>
            <Link href="/services">
              <button className="btn-neon px-8 py-3 text-base font-medium shadow-neon">
                Discover Our Selection Process
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#9D4EDD] font-medium font-poppins tracking-wider mb-3">TESTIMONIALS</p>
            <h2 className="text-4xl font-poppins font-bold mb-6 text-white">What Our Elite Clients Say</h2>
            <div className="divider-neon-center"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="dark-card group hover:shadow-neon transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="text-[#9D4EDD] opacity-40">
                  <Quote size={40} />
                </div>
              </div>
              <p className="text-white/80 mb-8 font-inter text-lg leading-relaxed">
                "Ad Maiora delivered exceptional results, driving 10X sales growth for Amazon India. Their brand onboarding expertise and seamless coordination make them an invaluable strategic partner."
              </p>
              <div className="flex items-center">
                <div className="rounded-full border border-[#9D4EDD]/20 w-14 h-14 flex items-center justify-center mr-5 overflow-hidden group-hover:border-[#9D4EDD]/50 transition-colors duration-300">
                  <div className="bg-[#9D4EDD]/5 w-full h-full flex items-center justify-center">
                    <span className="text-white font-poppins font-bold text-lg">PS</span>
                  </div>
                </div>
                <div>
                  <p className="font-bold font-poppins text-white text-lg">Priya Sharma</p>
                  <p className="text-sm text-white/60 font-inter">Key Account Manager, Amazon India</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="dark-card group hover:shadow-neon transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="text-[#9D4EDD] opacity-40">
                  <Quote size={40} />
                </div>
              </div>
              <p className="text-white/80 mb-8 font-inter text-lg leading-relaxed">
                "Ad Maiora transformed our tech course enrollment process at Acadeemia. Their tailored procurement strategies inspired students and faculty alike. They're truly the gold standard in the industry."
              </p>
              <div className="flex items-center">
                <div className="rounded-full border border-[#9D4EDD]/20 w-14 h-14 flex items-center justify-center mr-5 overflow-hidden group-hover:border-[#9D4EDD]/50 transition-colors duration-300">
                  <div className="bg-[#9D4EDD]/5 w-full h-full flex items-center justify-center">
                    <span className="text-white font-poppins font-bold text-lg">AR</span>
                  </div>
                </div>
                <div>
                  <p className="font-bold font-poppins text-white text-lg">Dr. Anjali Rao</p>
                  <p className="text-sm text-white/60 font-inter">Program Director, Acadeemia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-20 text-center">
            <Link href="/success-stories">
              <div className="inline-flex items-center text-white hover:text-[#9D4EDD] transition-colors duration-300 font-poppins font-medium text-lg group">
                View All Success Stories 
                <ArrowUpRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
