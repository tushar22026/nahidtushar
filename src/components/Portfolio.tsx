import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import profileImg from "@/assets/tushar-photo.jpg";

const Portfolio = () => {
  const handleDownloadResume = () => {
    // Create resume content
    const resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
      resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Nahidur Rahman Tushar - Resume</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 40px auto;
              padding: 20px;
              line-height: 1.6;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #2563eb;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            h1 { color: #2563eb; margin-bottom: 5px; }
            h2 { color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-top: 20px; }
            .contact-info { color: #666; }
            .section { margin-bottom: 25px; }
            .job-title { font-weight: bold; color: #333; }
            .duration { color: #666; font-style: italic; }
            ul { margin: 10px 0; }
            li { margin: 5px 0; }
            .skills-list { display: flex; flex-wrap: wrap; gap: 10px; }
            .skill-tag { background: #e0f2fe; color: #0369a1; padding: 5px 15px; border-radius: 15px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>NAHIDUR RAHMAN TUSHAR</h1>
            <p class="contact-info">
              Kishoreganj, Dhaka, Bangladesh<br>
              Email: tusharnahid562@gmail.com | Website: nahidtushar.com<br>
              LinkedIn: linkedin.com/in/nahidur-rahman-tushar-4a857b237<br>
              Codeforces: codeforces.com/profile/nahidurrahmantushar
            </p>
          </div>

          <div class="section">
            <h2>PROFESSIONAL SUMMARY</h2>
            <p>
              Passionate ICT student specializing in web development and competitive programming. 
              Experienced in building full-stack applications using Spring Boot, JavaFX, and modern web technologies. 
              Strong problem-solving skills demonstrated through active participation in competitive programming platforms. 
              Committed to continuous learning and staying updated with the latest technology trends.
            </p>
          </div>

          <div class="section">
            <h2>EDUCATION</h2>
            <div>
              <p class="job-title">Bachelor of Science in Information and Communication Technology</p>
              <p>Mawlana Bhashani Science and Technology University</p>
              <p class="duration">3rd Year, 2nd Semester | Expected Graduation: 2026</p>
            </div>
          </div>

          <div class="section">
            <h2>TECHNICAL SKILLS</h2>
            <p><strong>Programming Languages:</strong> Java, C++, JavaScript, SQL</p>
            <p><strong>Frameworks & Libraries:</strong> Spring Boot, JavaFX, React (Basic)</p>
            <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</p>
            <p><strong>Tools & Technologies:</strong> Git, VS Code, IntelliJ IDEA, REST API</p>
            <p><strong>Soft Skills:</strong> Leadership, Teamwork, Problem Solving, Communication</p>
          </div>

          <div class="section">
            <h2>PROJECTS</h2>
            
            <div style="margin-bottom: 15px;">
              <p class="job-title">Doctor Appointment Management System</p>
              <p class="duration">Spring Boot, REST API, MySQL</p>
              <ul>
                <li>Developed a comprehensive healthcare management platform with appointment scheduling functionality</li>
                <li>Implemented patient record management and doctor availability tracking system</li>
                <li>Created RESTful APIs for seamless data communication between frontend and backend</li>
              </ul>
            </div>

            <div style="margin-bottom: 15px;">
              <p class="job-title">Codeforces User Info Viewer</p>
              <p class="duration">JavaFX, MySQL, API Integration</p>
              <ul>
                <li>Built desktop application to analyze Codeforces user statistics and performance</li>
                <li>Integrated Codeforces API for real-time data fetching</li>
                <li>Designed intuitive UI for contest history and problem-solving pattern visualization</li>
              </ul>
            </div>

            <div style="margin-bottom: 15px;">
              <p class="job-title">Quiz Game Application</p>
              <p class="duration">JavaFX, MySQL</p>
              <ul>
                <li>Created interactive quiz platform with multiple categories and timer functionality</li>
                <li>Implemented score tracking and performance analytics</li>
                <li>Designed engaging user interface with smooth transitions</li>
              </ul>
            </div>

            <div style="margin-bottom: 15px;">
              <p class="job-title">Book Listing & Selling Site</p>
              <p class="duration">Spring Boot, HTML/CSS, JavaScript, MySQL</p>
              <ul>
                <li>Developed e-commerce platform for buying and selling books online</li>
                <li>Implemented user authentication and cart management system</li>
                <li>Created payment integration for secure transactions</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>ACHIEVEMENTS & ACTIVITIES</h2>
            <ul>
              <li>Active competitive programmer on Codeforces platform</li>
              <li>Regular participant in online programming contests</li>
              <li>Strong algorithmic and data structure knowledge</li>
              <li>Passionate about outdoor sports including cricket, football, and badminton</li>
            </ul>
          </div>

          <div class="section">
            <h2>INTERESTS</h2>
            <p>
              Web Development, Competitive Programming, Open Source Contribution, 
              Technology Innovation, Sports & Fitness
            </p>
          </div>
        </body>
        </html>
      `);
      resumeWindow.document.close();
      resumeWindow.print();
    }
  };

  const resumeSections = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "B.Sc. in ICT (3rd Year, 2nd Semester) - MBSTU",
    },
    {
      icon: Briefcase,
      title: "Experience",
      content: "4+ Academic Projects | Active Competitive Programmer",
    },
    {
      icon: Award,
      title: "Expertise",
      content: "Full-Stack Development | Problem Solving | Team Leadership",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Portfolio & Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my complete resume and explore my professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-soft">
            <div className="bg-gradient-hero p-8 text-center">
              <div className="inline-block mb-4">
                <img
                  src={profileImg}
                  alt="Nahidur Rahman Tushar"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Nahidur Rahman Tushar</h3>
              <p className="text-white/90 text-lg">Web Developer | Competitive Programmer | ICT Student</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {resumeSections.map((section, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-card rounded-lg border border-border/50"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{section.title}</h4>
                    <p className="text-sm text-muted-foreground">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Resume Highlights
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Strong foundation in Java, C++, JavaScript, and SQL</li>
                  <li>✓ Experience with Spring Boot, JavaFX, and React frameworks</li>
                  <li>✓ 4+ completed projects including healthcare and e-commerce systems</li>
                  <li>✓ Active competitive programmer with problem-solving expertise</li>
                  <li>✓ Leadership and teamwork skills demonstrated through projects</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download / Print Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
