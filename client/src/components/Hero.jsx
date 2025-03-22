import { CommandLineIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-2 bg-secondary/10 rounded-2xl mb-6">
          <CommandLineIcon className="w-6 h-6 text-secondary" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-4">
          Hi, I'm Shivam Tiwari
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
          Full Stack Developer
        </h2>

        <p className="text-xl text-light/60 mb-12 max-w-2xl mx-auto">
          I'm a passionate Full Stack Web & App Developer, constantly learning and exploring modern technologies to create innovative solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-secondary text-primary font-medium rounded-lg hover:bg-secondary/90 transition-colors"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary/10 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-20">
          <p className="text-light/40 text-sm mb-4">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-primary/10 border border-light/10 rounded-lg text-light/60 hover:text-secondary hover:border-secondary/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 