import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle } from "lucide-react";

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Please enter your company name" }),
  message: z.string().min(10, { message: "Please enter a detailed message (minimum 10 characters)" })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  
  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });
  
  // Trigger animations when component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setFormSuccess(true);
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };
  
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy text-white py-24 relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/80 z-10"></div>
        
        {/* Background image with parallax */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-no-repeat parallax z-0">
          {/* Placeholder for background */}
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className={`transition-all duration-1000 transform ${fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="inline-block px-4 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full text-sm font-playfair tracking-wider mb-6">
              CONNECT WITH US
            </p>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Begin Your Journey to <span className="text-gold">Excellence</span>
            </h1>
            
            <p className="text-xl text-white/80 font-lora max-w-2xl mx-auto mb-8">
              The pursuit of greater achievements starts with a conversation. Reach out to unlock procurement solutions tailored precisely to your needs.
            </p>
            
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-10">
            {/* Form Column */}
            <div className="lg:w-7/12">
              <div className={`transition-all duration-1000 delay-300 transform ${fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Card className="luxury-card border-gold/20 p-1 overflow-visible">
                  <CardContent className="p-8 md:p-12 bg-white">
                    <div className="mb-10">
                      <h2 className="text-3xl font-playfair font-bold mb-4 text-navy">Get in Touch</h2>
                      <p className="text-navy/70 font-lora">
                        Complete the form below and we'll respond within 24 hours with solutions crafted for your business needs.
                      </p>
                    </div>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-navy/80 font-medium font-playfair">
                                  Full Name
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John Smith" 
                                    className="input-gold py-6 font-lora"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-navy/80 font-medium font-playfair">
                                  Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="john@company.com" 
                                    className="input-gold py-6 font-lora"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-navy/80 font-medium font-playfair">
                                Company Name
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Company Ltd." 
                                  className="input-gold py-6 font-lora"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-navy/80 font-medium font-playfair">
                                Your Message
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your procurement needs or challenges..." 
                                  rows={6}
                                  className="input-gold resize-none font-lora"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="btn-gold w-full py-6 text-lg font-playfair tracking-wide"
                          >
                            <Send size={18} className="mr-2" /> Submit Inquiry
                          </Button>
                        </div>
                      </form>
                    </Form>
                    
                    {formSuccess && (
                      <div className="mt-8 animate-fadeIn">
                        <Alert className="bg-gold/10 border border-gold/30 text-navy rounded-none p-5">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-gold mr-3" />
                            <AlertDescription className="font-playfair font-medium text-base text-navy">
                              Your Inquiry Has Been Received—Expect Excellence
                            </AlertDescription>
                          </div>
                        </Alert>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Info Column */}
            <div className="lg:w-5/12">
              <div className={`h-full transition-all duration-1000 delay-500 transform ${fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-navy text-white p-10 md:p-12 h-full border border-gold/30">
                  <h3 className="text-3xl font-playfair font-bold mb-10 text-gold">Contact Information</h3>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin size={20} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="text-gold font-playfair font-medium mb-1">Location</h4>
                        <p className="text-white/80 font-lora">New Delhi, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone size={20} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="text-gold font-playfair font-medium mb-1">Phone</h4>
                        <p className="text-white/80 font-lora">+91 123 456 7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail size={20} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="text-gold font-playfair font-medium mb-1">Email</h4>
                        <a 
                          href="mailto:info@admaiora.in" 
                          className="text-white/80 hover:text-gold transition-colors duration-300 font-lora"
                        >
                          info@admaiora.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Linkedin size={20} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="text-gold font-playfair font-medium mb-1">LinkedIn</h4>
                        <a 
                          href="#" 
                          className="text-white/80 hover:text-gold transition-colors duration-300 font-lora"
                        >
                          Ad Maiora Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gold/20 pt-8">
                    <h4 className="text-xl font-playfair font-bold mb-4 text-gold">Office Hours</h4>
                    <div className="space-y-2 font-lora text-white/80">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Promise */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-1000 delay-700 transform ${fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-navy">Our Service Promise</h3>
              <p className="text-navy/70 font-lora leading-relaxed">
                Ad Maiora is dedicated to providing unparalleled procurement consulting services for Indian SMEs. We respond to all inquiries within 24 hours and deliver tailored solutions with the highest level of professionalism and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
