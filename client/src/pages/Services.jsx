import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      price: 'From $2,000',
      features: [
        'Custom Design & Development',
        'Responsive & Mobile-First',
        'SEO Optimization',
        'Performance Optimization',
        'Content Management System',
      ],
      popular: false,
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end solutions for complex applications',
      price: 'From $4,000',
      features: [
        'Frontend & Backend Development',
        'Database Design & Integration',
        'API Development',
        'Authentication & Security',
        'Cloud Deployment',
        'Maintenance & Support',
      ],
      popular: true,
    },
    {
      title: 'Consulting',
      description: 'Technical consulting and architecture planning',
      price: '$150/hour',
      features: [
        'Technical Architecture',
        'Code Review',
        'Performance Optimization',
        'Security Audit',
        'Best Practices Implementation',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-light mb-4">My Services</h1>
          <p className="text-lg text-light/80 max-w-2xl mx-auto">
            Professional web development services tailored to your needs.
            From simple websites to complex applications, I've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-dark rounded-lg p-8 ${
                service.popular ? 'border-2 border-secondary' : ''
              }`}
            >
              {service.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-light/80 mb-4">{service.description}</p>
                <p className="text-3xl font-bold text-light">{service.price}</p>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-secondary flex-shrink-0 mr-2" />
                    <span className="text-light/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-primary mt-8">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-light mb-8">
            Need Something Custom?
          </h2>
          <p className="text-lg text-light/80 max-w-2xl mx-auto mb-8">
            I offer custom solutions tailored to your specific needs.
            Let's discuss your project and create something amazing together.
          </p>
          <button className="btn-secondary">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 