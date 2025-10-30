import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Doctor Appointment Management System",
      description: "A comprehensive healthcare management platform built with Spring Boot and REST API. Features appointment scheduling, patient records, and doctor availability management.",
      tags: ["Spring Boot", "REST API", "MySQL", "Java"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Codeforces User Info Viewer",
      description: "Desktop application to view and analyze Codeforces user statistics, contest history, and problem-solving patterns using JavaFX and MySQL database.",
      tags: ["JavaFX", "MySQL", "Java", "API Integration"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Quiz Game Application",
      description: "Interactive quiz platform with multiple categories, timer functionality, and score tracking. Built with JavaFX for smooth user experience.",
      tags: ["JavaFX", "MySQL", "Java", "UI/UX"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Book Listing & Selling Site",
      description: "E-commerce platform for buying and selling books online. Features user authentication, cart management, and payment integration using Spring Boot.",
      tags: ["Spring Boot", "HTML/CSS", "JavaScript", "MySQL"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my learning journey and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-glow transition-all duration-500 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary/10 transition-all"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 transition-all"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
