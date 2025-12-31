import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your interest. We'll get back to you within 24 hours.",
        });
        
        setFormData({
          fullName: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600">Ready to transform your business? Let's start the conversation.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Office Address</h4>
                      <p className="text-slate-600">
                        Ruko City Square C16,<br />
                        Jl. Abdul Rahman Saleh No. 9, Bandung
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                      <p className="text-slate-600">(+62) 81-1238-8055</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                      <p className="text-slate-600">contact@airbox.co.id</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Book a free consultation with our experts and discover how AirBox can transform your operations.
                </p>
                <Button
                  onClick={() => scrollToSection("consultation")}
                  className="bg-white text-blue-600 hover:bg-slate-100 font-semibold"
                >
                  Book Free Consultation
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">Send us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}