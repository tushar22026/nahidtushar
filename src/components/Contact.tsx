import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Globe, Code, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "tusharnahid562@gmail.com",
      href: "mailto:tusharnahid562@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nahidur-rahman-tushar",
      href: "https://linkedin.com/in/nahidur-rahman-tushar-4a857b237",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Globe,
      label: "Website",
      value: "nahidtushar.com",
      href: "https://nahidtushar.com",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Code,
      label: "Codeforces",
      value: "nahidurrahmantushar",
      href: "https://codeforces.com/profile/nahidurrahmantushar",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a chat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in-left">
            <Card className="p-8 border-border/50">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background min-h-[150px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50 group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}

            <Card className="p-8 bg-gradient-hero text-primary-foreground border-0 mt-8">
              <p className="text-lg font-medium text-center italic">
                "Keep learning, keep growing, and never stop exploring."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
