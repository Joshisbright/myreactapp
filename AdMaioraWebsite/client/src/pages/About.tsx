import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Glasses } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-['Montserrat'] font-bold mb-4 text-[#1E3A8A]">Our Mission: Toward Greater Things</h2>
            <h3 className="text-xl text-[#22C55E] font-medium mb-6 font-['Montserrat']">In Simplicity Lies Greatness</h3>
            <p className="mb-6 text-neutral-700 font-['Open_Sans']">
              Ad Maiora, meaning 'toward greater things,' is here to lift Indian SMEs to new heights. We simplify procurement with a human-first approach, ensuring you work directly with our founder for a personal, trustworthy experience. Your success is our mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="bg-white rounded-lg shadow-sm">
                <CardContent className="p-5">
                  <div className="text-[#1E3A8A] text-2xl mb-3">
                    <Zap size={28} />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold mb-1 text-[#1E3A8A]">Efficiency</h4>
                  <p className="text-sm text-neutral-700">Fast, reliable solutions.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-lg shadow-sm">
                <CardContent className="p-5">
                  <div className="text-[#1E3A8A] text-2xl mb-3">
                    <Shield size={28} />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold mb-1 text-[#1E3A8A]">Trust</h4>
                  <p className="text-sm text-neutral-700">Vendors you can count on.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-lg shadow-sm">
                <CardContent className="p-5">
                  <div className="text-[#1E3A8A] text-2xl mb-3">
                    <Glasses size={28} />
                  </div>
                  <h4 className="font-['Montserrat'] font-bold mb-1 text-[#1E3A8A]">Transparency</h4>
                  <p className="text-sm text-neutral-700">Clear processes, no surprises.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <Card className="max-w-md bg-white shadow-md">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Founder" 
                  className="rounded-lg mb-4 w-full"
                />
                <p className="text-center text-neutral-700 font-['Open_Sans']">
                  Meet our Founder, dedicated to making procurement painless and empowering SMEs across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
