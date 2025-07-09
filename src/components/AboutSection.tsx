import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every system deserves robust protection against evolving threats."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Methodical approach to identifying and mitigating vulnerabilities."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with teams to build security-conscious cultures."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead of threats with creative security solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--section-gradient)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
              Driven by Curiosity, Motivated by Impact
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey into cybersecurity began with a simple question: "How can we make the digital world safer for everyone?" This curiosity has evolved into a passionate career dedicated to understanding, anticipating, and defending against cyber threats.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe cybersecurity isn't just about technology—it's about people, processes, and the delicate balance between security and usability. My approach combines technical expertise with a deep understanding of human behavior to create comprehensive security solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not analyzing security frameworks or testing network defenses, you'll find me exploring the latest threat intelligence, contributing to cybersecurity communities, or mentoring others who share the same passion for digital protection.
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-primary mb-4">What Drives Me</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Protecting organizations from evolving cyber threats</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Building security awareness and best practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Continuous learning and staying ahead of the threat landscape</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-cyber)] transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};