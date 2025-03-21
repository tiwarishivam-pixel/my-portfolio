import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' }
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      {/* Dynamic Background */}
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-light mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75" />
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-light/10 backdrop-blur-sm bg-primary/10">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-lg bg-primary/10 p-6 rounded-lg border border-light/10">
              <h3 className="text-2xl font-bold text-light mb-4">
                Passionate Full Stack Developer
              </h3>
              <p className="text-light/60 leading-relaxed">
                I am a dedicated full stack developer with a passion for creating elegant,
                efficient, and user-friendly web applications. With expertise in both frontend
                and backend technologies, I bring ideas to life through clean code and
                intuitive design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative backdrop-blur-lg bg-primary/10 p-4 rounded-lg border border-light/10 text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-light/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="relative group overflow-hidden px-8 py-4 bg-secondary text-primary font-medium rounded-lg inline-block"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-light transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
            </motion.div>
          </motion.div>
        </div>
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

export default About; 