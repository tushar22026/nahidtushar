import { Button } from "./ui/button";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
          👋 Welcome to my portfolio
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Hi, I'm Nahidur Rahman Tushar
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Web Developer | Competitive Programmer | Lifelong Learner
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic">
          "I'm not just building software — I'm building myself every day."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            <Code className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary/10 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/nahidurrahmantushar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 hover:shadow-soft transition-all duration-300 group"
          >
            <Github className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/nahidur-rahman-tushar-4a857b237"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 hover:shadow-soft transition-all duration-300 group"
          >
            <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://codeforces.com/profile/nahidurrahmantushar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 hover:shadow-soft transition-all duration-300 group"
          >
            <Code className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:tusharnahid562@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-primary/10 hover:shadow-soft transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
