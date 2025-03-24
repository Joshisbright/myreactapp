import { Card } from "@/components/ui/card";

export default function SuccessStories() {
  const stories = [
    {
      client: "Sharma Textiles, Delhi",
      industry: "Fabric Procurement Challenge",
      challenge: "Struggled to find affordable fabric suppliers with consistent quality.",
      solution: "Ad Maiora delivered a curated supplier report in 48 hours with multiple viable options.",
      outcome: "Saved 20% on procurement costs and signed a long-term deal with a reliable supplier."
    },
    {
      client: "TechTrend Innovations, Bengaluru",
      industry: "Component Supply Challenge",
      challenge: "Needed niche component suppliers fast to meet product development deadlines.",
      solution: "We coordinated a deal with a top-rated vendor specializing in tech components.",
      outcome: "Reduced procurement time by 30% and successfully met product launch deadlines."
    }
  ];
  
  return (
    <section id="success-stories" className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-3 text-[#1E3A8A]">Real Results, Real SMEs</h2>
        <h3 className="text-xl text-[#22C55E] font-medium text-center mb-12 font-['Montserrat']">A Strategy of Conquest Through Service</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#1E3A8A]/10 p-6">
                <h4 className="text-xl font-['Montserrat'] font-bold mb-2 text-[#1E3A8A]">{story.client}</h4>
                <p className="text-neutral-700 font-medium font-['Open_Sans']">{story.industry}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h5 className="font-['Montserrat'] font-bold text-lg mb-2 text-[#1E3A8A]">Challenge:</h5>
                  <p className="text-neutral-700 font-['Open_Sans']">{story.challenge}</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-['Montserrat'] font-bold text-lg mb-2 text-[#1E3A8A]">Solution:</h5>
                  <p className="text-neutral-700 font-['Open_Sans']">{story.solution}</p>
                </div>
                <div>
                  <h5 className="font-['Montserrat'] font-bold text-lg mb-2 text-[#1E3A8A]">Outcome:</h5>
                  <p className="text-neutral-700 font-['Open_Sans']">{story.outcome}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
