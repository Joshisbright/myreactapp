import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "SME Insights",
      title: "How to Scale Your Business Without Breaking the Bank",
      excerpt: "Practical strategies for Indian SMEs to grow sustainably while managing costs effectively.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Vendor Spotlights",
      title: "Meet the Suppliers Powering India's SMEs",
      excerpt: "Interviews with top-rated suppliers who are helping small businesses across India succeed.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Procurement Tips",
      title: "Top 3 Mistakes SMEs Make in Procurement (And How to Avoid Them)",
      excerpt: "Learn how to sidestep common procurement pitfalls that cost Indian SMEs time and money.",
      link: "#"
    }
  ];
  
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-3 text-[#1E3A8A]">Insights for Indian SMEs</h2>
        <h3 className="text-xl text-[#22C55E] font-medium text-center mb-12 font-['Montserrat']">Think Different</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <span className="inline-block bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs px-3 py-1 rounded-full mb-3 font-['Open_Sans']">
                  {post.category}
                </span>
                <h4 className="font-['Montserrat'] font-bold text-lg mb-3 text-[#1E3A8A]">{post.title}</h4>
                <p className="text-neutral-700 mb-4 line-clamp-3 font-['Open_Sans']">{post.excerpt}</p>
                <a href={post.link} className="text-[#1E3A8A] font-medium hover:underline font-['Open_Sans']">Read More →</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
