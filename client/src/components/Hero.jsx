import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CommandLineIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block p-2 backdrop-blur-lg bg-secondary/10 rounded-2xl mb-6 border border-secondary/20">
            <CommandLineIcon className="w-6 h-6 text-secondary" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-4"
          >
            Hi, I'm Shivam Tiwari
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-light/60 mb-12 max-w-2xl mx-auto"
          >
            I'm a passionate Full Stack Web & App Developer, constantly learning and exploring modern technologies to create innovative solutions. I love building scalable applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="relative group overflow-hidden px-8 py-4 bg-secondary text-primary font-medium rounded-lg"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-light transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <p className="text-light/40 text-sm mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1 + index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="px-4 py-2 backdrop-blur-lg bg-primary/10 border border-light/10 rounded-lg text-light/60 hover:text-secondary hover:border-secondary/50 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 