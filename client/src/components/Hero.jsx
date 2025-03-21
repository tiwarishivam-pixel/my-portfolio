import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CommandLineIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-primary">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
      </div>

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
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-6"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-light/60 mb-12 max-w-2xl mx-auto"
          >
            I build modern web applications with cutting-edge technologies
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

      <style jsx="true">{`
        .stars, .twinkling, .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px #fff, 0 0 20px #fff;
        }

        ${[...Array(20)].map((_, i) => `
          .particle-${i} {
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            background: hsl(${Math.random() * 360}, 70%, 60%);
            animation: float-${i} ${15 + Math.random() * 10}s infinite linear;
          }

          @keyframes float-${i} {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            33% {
              transform: translate(${100 + Math.random() * 100}px, ${-100 + Math.random() * 50}px) rotate(120deg);
            }
            66% {
              transform: translate(${-100 + Math.random() * 50}px, ${100 + Math.random() * 100}px) rotate(240deg);
            }
            100% {
              transform: translate(0, 0) rotate(360deg);
            }
          }
        `).join('')}
      `}</style>
    </section>
  );
};

export default Hero; 