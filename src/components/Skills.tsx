import { Card } from "./ui/card";
import { Code, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 80 },
      ],
      color: "bg-blue-500",
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "JavaFX", level: 80 },
        { name: "React", level: 70 },
        { name: "Git", level: 85 },
      ],
      color: "bg-green-500",
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 65 },
      ],
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 80 },
      ],
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuously learning and improving my technical and interpersonal abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-soft transition-all duration-300 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index + skillIndex) * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
