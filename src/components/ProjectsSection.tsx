import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Bug, Database, Eye, Server, ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      icon: Database,
      title: "Malware Investigation",
      description: "Analyzed thousands of security logs in Splunk and built comprehensive dashboards to detect threats and patterns in real-time malware activity.",
      technologies: ["Splunk", "Python", "SIEM", "Log Analysis"],
      highlights: ["Thousands of logs analyzed", "Custom dashboards", "Threat pattern detection"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: Shield,
      title: "DoS Attack Simulation",
      description: "Tested various attack scenarios and created protective rules to defend servers against denial-of-service attacks in controlled environments.",
      technologies: ["Linux", "iptables", "Network Tools", "Bash"],
      highlights: ["Attack scenario testing", "Protection rules created", "Server hardening"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: Network,
      title: "Network Packet Analysis",
      description: "Used Wireshark to analyze network traffic and detect phishing attempts and malware in email communications for enhanced security monitoring.",
      technologies: ["Wireshark", "TCP/IP", "Email Security", "Network Analysis"],
      highlights: ["Phishing detection", "Malware identification", "Traffic analysis"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      icon: Bug,
      title: "Frontend Development Work",
      description: "Built two application frontends focused on user experience improvements, successfully enhancing the interface for thousands of users.",
      technologies: ["React", "JavaScript", "CSS", "UI/UX"],
      highlights: ["Two app frontends", "Improved UX", "Thousands of users"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring innovative cybersecurity solutions through hands-on projects and research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-cyber)] transition-all duration-300 border-border/50 hover:border-accent/30 h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors duration-300">
                    <project.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-accent/50 transition-colors duration-300"
                    asChild
                  >
                    <a href={project.demoLink}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-1 group-hover:text-accent transition-colors duration-300"
                    asChild
                  >
                    <a href={project.githubLink}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cyber" size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};