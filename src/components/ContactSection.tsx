import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_1h4870j',
        'template_qobn0ss',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_subject: formData.subject,
          user_message: formData.message,
        },
        'Gummuwk994jNxDPBR'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bagtyyaryusupov1997@gmail.com",
      href: "mailto:bagtyyaryusupov1997@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bagtyyar-yusubov",
      href: "https://linkedin.com/in/bagtyyar-yusubov"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/byusup03",
      href: "https://github.com/byusup03"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss cybersecurity challenges, collaboration opportunities, or just want to chat about the latest security trends? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for cybersecurity expertise, want to collaborate on a project, 
                or simply want to discuss the evolving threat landscape, I'm always open to meaningful conversations.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Connect */}
            <Card className="border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-4">Quick Connect</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  For immediate discussions or urgent security matters
                </p>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/30 hover:bg-accent/10"
                    asChild
                  >
                    <a href="mailto:bagtyyaryusupov1997@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent/30 hover:bg-accent/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/bagtyyar-yusubov" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 hover:border-accent/30 transition-colors duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-accent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-accent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-border/50 focus:border-accent"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-border/50 focus:border-accent resize-none"
                    placeholder="Tell me about your project, question, or how I can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="cyber"
                  size="lg"
                  disabled={isLoading}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours. For urgent security matters, please use direct email or LinkedIn.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};