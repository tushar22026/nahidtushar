import { Card } from "./ui/card";
import { GraduationCap, Code2, Trophy, Heart } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "3rd Year ICT Student at Mawlana Bhashani Science and Technology University",
    },
    {
      icon: Code2,
      title: "Development",
      description: "Building web applications with Spring Boot, JavaFX, and modern frameworks",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Active problem solver on Codeforces and other platforms",
    },
    {
      icon: Heart,
      title: "Lifestyle",
      description: "Passionate about cricket, football, badminton - staying fit mentally & physically",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about coding, problem-solving, and continuous growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-20"></div>
              <img
                src={profileImg}
                alt="Nahidur Rahman Tushar"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-glow border-4 border-primary/20"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-foreground leading-relaxed">
              I'm <span className="font-semibold text-primary">Nahidur Rahman Tushar</span>, a passionate ICT student at 
              Mawlana Bhashani Science and Technology University. Currently in my 3rd year, I love exploring new 
              technologies, developing web applications, and solving algorithmic problems on competitive programming platforms.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Beyond coding, I believe in maintaining a healthy balance between mind and body. I enjoy outdoor games 
              like cricket, football, and badminton — they keep me energized and focused.
            </p>

            <div className="pt-4">
              <a
                href="https://codeforces.com/profile/nahidurrahmantushar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium"
              >
                View my Codeforces profile
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
