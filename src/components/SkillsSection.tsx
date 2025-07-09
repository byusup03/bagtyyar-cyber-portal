import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Network, 
  Bug, 
  Code, 
  Database, 
  Cloud, 
  Terminal, 
  Lock,
  Search,
  AlertTriangle,
  FileText,
  Zap
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security Fundamentals",
      color: "text-red-500",
      skills: [
        "Network Security",
        "Threat Detection",
        "Risk Assessment",
        "Security Auditing",
        "Compliance (ISO 27001, NIST)",
        "Security Awareness Training"
      ]
    },
    {
      icon: Bug,
      title: "Ethical Hacking & Penetration Testing",
      color: "text-orange-500",
      skills: [
        "Web Application Testing",
        "Network Penetration Testing",
        "Social Engineering",
        "Wireless Security Testing",
        "Mobile App Security",
        "Red Team Operations"
      ]
    },
    {
      icon: Search,
      title: "Threat Intelligence & Analysis",
      color: "text-blue-500",
      skills: [
        "Malware Analysis",
        "Digital Forensics",
        "Incident Response",
        "Threat Hunting",
        "OSINT Gathering",
        "IOC Development"
      ]
    },
    {
      icon: Code,
      title: "Programming & Scripting",
      color: "text-green-500",
      skills: [
        "Python",
        "PowerShell",
        "Bash/Shell Scripting",
        "Go",
        "JavaScript",
        "SQL"
      ]
    },
    {
      icon: Terminal,
      title: "Security Tools & Platforms",
      color: "text-purple-500",
      skills: [
        "Splunk",
        "Wireshark",
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "OWASP ZAP"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Security",
      color: "text-cyan-500",
      skills: [
        "AWS Security",
        "Azure Security",
        "Container Security",
        "Kubernetes Security",
        "Infrastructure as Code",
        "Zero Trust Architecture"
      ]
    }
  ];

  const certifications = [
    { name: "CISSP", status: "In Progress" },
    { name: "CEH", status: "Certified" },
    { name: "Security+", status: "Certified" },
    { name: "GCIH", status: "Planned" },
    { name: "OSCP", status: "In Progress" },
    { name: "AWS Security", status: "Certified" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Certified": return "bg-green-100 text-green-800 border-green-200";
      case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Planned": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="skills" className="py-20 bg-[var(--section-gradient)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern cybersecurity challenges
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-cyber)] transition-all duration-300 border-border/50 hover:border-accent/30 h-full"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors duration-300">
                    <category.icon className={`h-5 w-5 ${category.color} group-hover:text-accent transition-colors duration-300`} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-card border border-border/50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Certifications & Training
            </h3>
            <p className="text-muted-foreground">
              Continuous learning and professional development in cybersecurity
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-primary">{cert.name}</span>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getStatusColor(cert.status)} border`}
                >
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Indicators */}
        <div className="mt-16 bg-card border border-border/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Core Competencies
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Network Security", level: 90 },
              { skill: "Threat Detection", level: 85 },
              { skill: "Ethical Hacking", level: 88 },
              { skill: "Python Scripting", level: 82 },
              { skill: "Incident Response", level: 87 },
              { skill: "Risk Assessment", level: 90 },
              { skill: "Splunk Analytics", level: 85 },
              { skill: "Cloud Security", level: 80 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">{item.level}%</span>
                  </div>
                </div>
                <h4 className="text-sm font-medium text-primary">{item.skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};