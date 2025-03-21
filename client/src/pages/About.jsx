import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel'] },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Led development of multiple web applications using React and Node.js.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and maintained client websites.',
    },
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-light mb-6">About Me</h1>
          <p className="text-lg text-light/80 max-w-3xl">
            I'm a passionate Full Stack Developer with over 5 years of experience in building
            modern web applications. I specialize in React, Node.js, and cloud technologies,
            focusing on creating scalable and user-friendly solutions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-light mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-dark p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-light/80 flex items-center"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-light mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-dark p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-secondary">
                  {exp.title}
                </h3>
                <p className="text-light/80 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-light/70">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 