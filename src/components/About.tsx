import { GraduationCap, Award, Globe } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Master's in AI & Information Processing",
        "Bachelor's in Computer Science (Distinction)",
        "Double Scientific Baccalaureate",
      ],
    },
    {
      icon: Award,
      title: "Certifications",
      items: [
        "Python Programming (Google)",
        "French C1 (TCF Certified)",
        "English B2 (CITAM Certified)",
      ],
    },
    {
      icon: Globe,
      title: "Languages",
      items: [
        "Arabic (Native)",
        "French (C1 - Professional)",
        "English (B2 - Professional)",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about leveraging AI and technology to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="glass-effect p-8 rounded-2xl space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Based in Annaba, Algeria, I'm a dedicated AI Engineer and Full-Stack Developer 
                with a strong foundation in machine learning, deep learning, and modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from building sophisticated neural networks with TensorFlow and 
                PyTorch to crafting seamless web experiences with React and Laravel. I thrive on 
                transforming complex challenges into elegant, scalable solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing opportunities to contribute to innovative projects that push 
                the boundaries of what's possible with AI and software development.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-2xl hover:bg-card/60 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">{highlight.title}</h4>
                    <ul className="space-y-2">
                      {highlight.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
