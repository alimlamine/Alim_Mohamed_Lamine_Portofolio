import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alimmedlamine@gmail.com",
      href: "mailto:alimmedlamine@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213 (0)6 76 67 28 33",
      href: "tel:+213676672833",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Annaba, Algeria",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-lamine-alim-19949325b",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alimlamine",
      color: "from-gray-700 to-gray-500",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="glass-effect p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="font-medium hover:text-primary transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Connect Online</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/60 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color}`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-effect p-8 rounded-2xl h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ready to Work Together?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently seeking opportunities in AI engineering, machine learning, 
                  and full-stack development. Whether you have a project in mind or just 
                  want to connect, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <p className="text-sm text-muted-foreground">
                      Available for full-time, contract, and freelance opportunities
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <p className="text-sm text-muted-foreground">
                      Open to remote work and relocation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <p className="text-sm text-muted-foreground">
                      Passionate about AI, ML, and cutting-edge technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/mohamed-lamine-alim-19949325b" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    Hire Me
                  </a>
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="mailto:alimmedlamine@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-border/50 animate-fade-in">
          <p className="text-muted-foreground">
            © 2025 Alim Momahed Lamine. Built with passion and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
