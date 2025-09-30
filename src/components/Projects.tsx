import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Concrete Anomaly Detection",
      year: "2025",
      description: "Advanced hybrid model combining GANs and diffusion models to automatically detect defects in concrete structures using computer vision and deep learning.",
      tags: ["PyTorch", "OpenCV", "GANs", "Computer Vision"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "CineMatch",
      year: "2024",
      description: "Intelligent movie recommendation system leveraging machine learning algorithms (supervised and unsupervised) to provide personalized film suggestions.",
      tags: ["Python", "Django", "TensorFlow", "ML"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Banking Fraud Detection",
      year: "2024",
      description: "Machine learning solution for detecting fraudulent banking transactions using advanced pattern recognition and anomaly detection techniques.",
      tags: ["Python", "Scikit-learn", "Pandas", "ML"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "NutriSport",
      year: "2023",
      description: "Comprehensive web application for personalized diet planning and workout programming using operational research algorithms.",
      tags: ["Laravel", "Python", "Optimization", "Full-Stack"],
      gradient: "from-green-500 to-cyan-500",
    },
    {
      title: "Real-Time Facial Recognition",
      year: "2023",
      description: "Real-time facial recognition system built with OpenCV and TensorFlow, featuring live detection and identification capabilities.",
      tags: ["OpenCV", "TensorFlow", "Python", "Deep Learning"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions at the intersection of AI and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:bg-card/60 transition-all duration-300 group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} opacity-80`}>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-muted/50 text-sm text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com/alimlamine" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
