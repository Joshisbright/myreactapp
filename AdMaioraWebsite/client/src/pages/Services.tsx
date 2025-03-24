import { Card, CardContent } from "@/components/ui/card";
import { Star, HandshakeIcon } from "lucide-react";

export default function Services() {
  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We listen to your needs and understand your business challenges to provide tailored solutions."
    },
    {
      number: 2,
      title: "Sign Up",
      description: "Quick onboarding to get started with our services without complicated paperwork."
    },
    {
      number: 3,
      title: "Supplier Research",
      description: "We find the best vendors for you based on your specific requirements and industry."
    },
    {
      number: 4,
      title: "Report Delivery",
      description: "Get a detailed, actionable report with supplier options and recommendations."
    },
    {
      number: 5,
      title: "Client Negotiation",
      description: "You choose the supplier that fits your needs best from our curated options."
    },
    {
      number: 6,
      title: "Deal Coordination",
      description: "We finalize the details and handle the paperwork to make the process seamless."
    },
    {
      number: 7,
      title: "Feedback Collection",
      description: "Your input shapes our future recommendations and helps other SMEs make informed decisions."
    }
  ];
  
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-3 text-[#1E3A8A]">How It Works</h2>
        <h3 className="text-xl text-[#22C55E] font-medium text-center mb-12 font-['Montserrat']">Efficiency is the Soul of Business</h3>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col md:flex-row items-start mb-8 pb-8 ${
              index < steps.length - 1 ? "border-b border-[#E5E7EB]" : ""
            }`}>
              <div className="bg-[#1E3A8A] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h4 className="text-xl font-['Montserrat'] font-bold mb-2 text-[#1E3A8A]">{step.title}</h4>
                <p className="text-neutral-700 font-['Open_Sans']">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Card className="mt-16 bg-[#F9FAFB] rounded-lg shadow-md max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="text-[#1E3A8A] text-4xl mb-4">
                  <Star size={36} className="text-[#1E3A8A]" />
                </div>
                <h4 className="text-xl font-['Montserrat'] font-bold mb-3 text-[#1E3A8A]">Most Liked by Clients</h4>
                <p className="text-neutral-700 font-['Open_Sans']">
                  A Beacon of Enlightenment: Our unique feature highlights top-rated suppliers based on real SME feedback, ensuring you always choose quality.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="text-[#1E3A8A] text-4xl mb-4">
                  <svg className="w-9 h-9 text-[#1E3A8A]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 22C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-xl font-['Montserrat'] font-bold mb-3 text-[#1E3A8A]">How We Earn</h4>
                <p className="text-neutral-700 font-['Open_Sans']">
                  Commerce with Honor: We earn only when you succeed—through commissions from suppliers after deals close. Your growth is our victory.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
