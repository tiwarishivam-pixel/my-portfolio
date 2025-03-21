import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      value: "New York, NY",
      link: "https://maps.google.com",
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
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
          <h2 className="text-3xl font-bold text-light mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-light/60 max-w-2xl mx-auto backdrop-blur-sm bg-primary/10 p-4 rounded-lg border border-light/10">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl`} />
                <div className="relative flex items-center p-4 backdrop-blur-lg bg-primary/10 rounded-lg border border-light/10 hover:border-secondary/50 transition-colors">
                  <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-light font-medium">{info.title}</h3>
                    <p className="text-light/60">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-light/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-lg bg-primary/10 border border-light/10 rounded-lg text-light focus:outline-none focus:border-secondary group-hover:border-secondary/50 transition-colors"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-light/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-lg bg-primary/10 border border-light/10 rounded-lg text-light focus:outline-none focus:border-secondary group-hover:border-secondary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="subject" className="block text-light/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-lg bg-primary/10 border border-light/10 rounded-lg text-light focus:outline-none focus:border-secondary group-hover:border-secondary/50 transition-colors"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-light/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 backdrop-blur-lg bg-primary/10 border border-light/10 rounded-lg text-light focus:outline-none focus:border-secondary group-hover:border-secondary/50 transition-colors resize-none"
                ></textarea>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="relative w-full group overflow-hidden px-8 py-4 bg-secondary text-primary font-medium rounded-lg"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-light transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 