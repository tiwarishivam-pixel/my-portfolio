import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      color: "from-blue-500/20 to-cyan-500/20",
      items: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      category: "Backend",
      color: "from-purple-500/20 to-pink-500/20",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Tools & Others",
      color: "from-emerald-500/20 to-teal-500/20",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Testing", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-light mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-light/60 max-w-2xl mx-auto backdrop-blur-sm bg-primary/10 p-4 rounded-lg border border-light/10">
            Here are my technical skills and proficiency levels in various technologies
            that I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="group relative"
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl`} />
              
              <div className="relative backdrop-blur-lg bg-primary/10 p-6 rounded-lg border border-light/10 hover:border-secondary/50 transition-colors duration-500">
                <h3 className="text-xl font-bold text-light mb-6">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + groupIndex * 0.2 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-light/80">{skill.name}</span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-secondary/80 to-secondary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 