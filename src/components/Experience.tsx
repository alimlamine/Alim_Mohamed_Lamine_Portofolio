import { Briefcase, Code, TrendingUp } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      icon: Code,
      title: "AI & Machine Learning Development",
      type: "Technical Experience",
      items: [
        "Built deep learning models for image recognition using TensorFlow and PyTorch",
        "Developed predictive models with advanced machine learning algorithms",
        "Implemented computer vision solutions with OpenCV for real-time applications",
        "Created data analysis pipelines for ML projects",
      ],
    },
    {
      icon: TrendingUp,
      title: "Full-Stack Web Development",
      type: "Technical Experience",
      items: [
        "Developed responsive front-end interfaces with HTML, CSS, and JavaScript",
        "Built interactive web applications integrating Laravel backend with React",
        "Optimized user experience through performance improvements",
        "Conducted comprehensive unit and functional testing",
      ],
    },
    {
      icon: Briefcase,
      title: "Sales Assistant",
      company: "Local Supermarket",
      period: "2020 - 2021",
      type: "Professional Experience",
      items: [
        "Managed customer service and point-of-sale transactions",
        "Handled inventory management and stock replenishment",
        "Used inventory management software for accurate product tracking",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on expertise in AI development and full-stack engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:bg-card/60 transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <experience.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {experience.type}
                      </span>
                      {experience.company && (
                        <span>{experience.company}</span>
                      )}
                      {experience.period && (
                        <span>{experience.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experience.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
