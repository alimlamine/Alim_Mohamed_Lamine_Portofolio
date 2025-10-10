import { Code, Brain, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-blue-500 to-purple-500",
      skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn"],
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-purple-500 to-pink-500",
      skills: ["Python", "JavaScript", "SQL", "PHP"],
    },
    {
      icon: Database,
      title: "Web & Frameworks",
      color: "from-cyan-500 to-blue-500",
      skills: ["React.js", "Laravel", "Node.js", "HTML/CSS"],
    },
    {
      icon: Wrench,
      title: "Data & Tools",
      color: "from-green-500 to-cyan-500",
      skills: ["Pandas", "NumPy", "MySQL", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-card/60 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-medium text-sm shadow-lg hover:scale-105 transition-transform duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-8 sm:mt-12 glass-effect p-6 sm:p-8 rounded-2xl animate-fade-in-up">
          <h3 className="text-lg sm:text-xl font-bold mb-6 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Team Collaboration",
              "Problem Solving",
              "Communication",
              "Time Management",
              "Critical Thinking",
              "Creativity",
              "Leadership",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
