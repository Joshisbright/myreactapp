import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, PlusCircle, MinusCircle, Search, CheckCircle, Shield, CircleDollarSign, Clock } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  category?: string;
}

function FaqItem({ question, answer, index, isOpen, onToggle, category }: FaqItemProps) {
  return (
    <div className={`mb-6 border border-gold/20 transition-all duration-500 ${isOpen ? 'bg-white shadow-lg' : 'bg-white/50'}`}>
      <button 
        className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {category && (
            <span className="text-sm font-playfair text-gold/80 mr-3 hidden md:inline">{category}</span>
          )}
          <span className="font-playfair font-bold text-lg md:text-xl text-navy group-hover:text-gold transition-colors duration-300">{question}</span>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <MinusCircle className="text-gold transition-all duration-300 h-6 w-6" />
          ) : (
            <PlusCircle className="text-navy group-hover:text-gold transition-all duration-300 h-6 w-6" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-8 pt-2 border-t border-gold/10">
          <p className="text-navy/70 font-lora leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

// Custom hook for animations
function useScrollAnimation() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);
  
  return animate;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const animate = useScrollAnimation();
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); // Close if already open
  };
  
  const faqCategories = [
    {
      title: "General",
      icon: <Search className="h-6 w-6 text-gold" />,
      items: [
        {
          question: "How does Ad Maiora find suppliers?",
          answer: "Our process is methodical and rigorous. We leverage our exclusive network of pre-vetted suppliers across India, combined with proprietary market intelligence and industry connections. Each potential supplier undergoes a comprehensive evaluation based on your specific requirements, financial stability, quality standards, and delivery reliability. This curated approach ensures we connect you only with the most exceptional vendors perfectly aligned with your business objectives."
        },
        {
          question: "What types of suppliers do you work with?",
          answer: "Our portfolio encompasses a premium selection across all major industries. From artisanal textile manufacturers to cutting-edge technology providers, industrial equipment specialists to professional service firms. We specifically focus on suppliers who demonstrate consistent excellence, ethical business practices, and a proven track record with other discerning SMEs. Our network is continuously refined to ensure the highest quality partnerships for our clients."
        }
      ]
    },
    {
      title: "Quality Assurance",
      icon: <CheckCircle className="h-6 w-6 text-gold" />,
      items: [
        {
          question: "How do you ensure supplier quality?",
          answer: "Quality assurance is paramount in our methodology. We implement a multi-tier verification process that includes detailed performance histories, financial audits, and exclusive client testimonials. Our analysts conduct site visits when appropriate, and all suppliers undergo regular re-evaluation. We maintain a sophisticated rating system that tracks metrics including reliability, communication quality, and problem resolution. This ensures our elite network maintains the exceptional standards your business deserves."
        },
        {
          question: "What quality metrics do you evaluate?",
          answer: "Our proprietary evaluation framework examines over 20 distinct quality indicators including production consistency, material standards, certification compliance, management expertise, technological capabilities, and sustainability practices. We also assess softer metrics such as communication efficiency, cultural alignment, and innovation potential. This comprehensive approach ensures a holistic understanding of each supplier's strengths and suitability for your specific requirements."
        }
      ]
    },
    {
      title: "Client Satisfaction",
      icon: <Shield className="h-6 w-6 text-gold" />,
      items: [
        {
          question: "What if I'm not satisfied with the suppliers?",
          answer: "Your satisfaction is our absolute priority. If the initial supplier recommendations don't align perfectly with your vision, we immediately initiate our premium reassessment protocol. This involves a comprehensive review of your requirements with our senior procurement specialists, followed by a refined supplier search drawing from our extended network. We continue this iterative process, with no additional fees, until you are genuinely delighted with the match. Our commitment to excellence is unwavering."
        },
        {
          question: "Do you offer ongoing support after the match is made?",
          answer: "Absolutely. Our relationship continues well beyond the initial introduction. Our dedicated relationship managers provide white-glove support throughout the entire procurement lifecycle. This includes assistance with contract negotiations, quality control monitoring, communication facilitation, and regular performance reviews. We remain your trusted advisor, ensuring the relationship flourishes and delivers exceptional value to your business over time."
        }
      ]
    },
    {
      title: "Pricing & Process",
      icon: <CircleDollarSign className="h-6 w-6 text-gold" />,
      items: [
        {
          question: "How does your pricing structure work?",
          answer: "We offer bespoke pricing solutions tailored to your specific procurement needs. Our transparent fee structure is based on project complexity, procurement volume, and the level of ongoing support required. We provide detailed proposals after an initial consultation, with options ranging from one-time supplier matching to comprehensive procurement management. Many clients find our value-based pricing model particularly attractive, where our compensation is partially tied to the measurable savings and efficiencies we generate."
        },
        {
          question: "What is your typical timeline for finding suitable suppliers?",
          answer: "Our efficient yet thorough process typically delivers an initial shortlist of premium suppliers within 7-10 business days of our comprehensive requirements assessment. For particularly specialized or niche procurement needs, this timeline may extend slightly to ensure we identify truly exceptional matches. Urgent requirements can be accommodated through our expedited service, which can reduce timeframes to as little as 3-5 business days while maintaining our rigorous quality standards."
        }
      ]
    }
  ];
  
  // Flatten the categories for mapping
  const allFaqs = faqCategories.flatMap((category, catIndex) => 
    category.items.map((item, itemIndex) => ({
      ...item,
      category: category.title,
      globalIndex: catIndex * 10 + itemIndex // Ensure unique indices
    }))
  );
  
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy text-white py-20 relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/80 z-10"></div>
        
        {/* Background image with parallax */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-no-repeat parallax z-0">
          {/* Placeholder for background */}
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className={`transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Questions, <span className="text-gold">Answered</span>
            </h1>
            <p className="text-xl text-white/80 font-lora max-w-2xl mx-auto mb-8">
              Explore our comprehensive FAQ section for insights into our premium procurement process and services.
            </p>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {faqCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`luxury-card border-gold/20 p-6 text-center cursor-pointer transition-all duration-500 transform ${
                    animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  onClick={() => handleToggle(index * 10)} // Open first question in category
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-playfair font-bold text-navy">{category.title}</h3>
                </div>
              ))}
            </div>
            
            {/* FAQ Items */}
            <div className={`transition-all duration-1000 delay-300 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-navy">{category.title}</h2>
                  </div>
                  
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = catIndex * 10 + itemIndex;
                    return (
                      <FaqItem 
                        key={globalIndex}
                        question={item.question} 
                        answer={item.answer}
                        index={globalIndex}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => handleToggle(globalIndex)}
                        category={category.title}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            
            {/* Contact CTA */}
            <div className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="luxury-card border-gold/20 p-8 md:p-10 bg-navy/5">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-navy">Still Have Questions?</h3>
                <p className="text-navy/70 font-lora mb-8 max-w-2xl mx-auto">
                  Our procurement specialists are ready to provide personalized answers to your unique business requirements.
                </p>
                <a 
                  href="/contact" 
                  className="btn-gold inline-flex items-center px-8 py-3"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  <span className="font-playfair">Contact Us Within 24 Hours</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
