'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button-variants';
import { cardVariants, containerVariants, fadeInUpVariants, pageVariants } from '@/lib/motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    class: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', class: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-dark to-gray-900 pt-16">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeInUpVariants}
            className="text-hero font-heading font-bold text-white mb-4"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            variants={fadeInUpVariants}
            className="text-xl text-muted-dark max-w-3xl mx-auto mb-8"
          >
            Ready to start your martial arts journey? Contact us today to schedule 
            your free trial class or get answers to your questions.
          </motion.p>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="font-heading font-bold text-white text-2xl mb-6">
              Send us a Message
            </h2>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 font-medium">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="class" className="block text-white text-sm font-medium mb-2">
                  Interested Class
                </label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="" className="bg-dark text-white">Select a class</option>
                  <option value="little-dragons" className="bg-dark text-white">Little Dragons (Ages 4-6)</option>
                  <option value="youth-karate" className="bg-dark text-white">Youth Karate (Ages 7-12)</option>
                  <option value="teen-warriors" className="bg-dark text-white">Teen Warriors (Ages 13-17)</option>
                  <option value="adult-traditional" className="bg-dark text-white">Adult Traditional Karate</option>
                  <option value="womens-defense" className="bg-dark text-white">Women's Self-Defense</option>
                  <option value="not-sure" className="bg-dark text-white">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your goals, experience level, or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-heading font-bold text-white text-xl mb-6">
                Quick Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <a href="tel:[Your Phone]" className="text-primary hover:text-accent transition-colors">
                      [Your Phone]
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/[Your WhatsApp Number]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      [Your WhatsApp Number]
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:[Your Email]" className="text-primary hover:text-accent transition-colors">
                      [Your Email]
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-muted text-sm">
                      [Full Address]<br />
                      [Your City], [State] [Zip]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-heading font-bold text-white text-xl mb-6">
                Training Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Monday - Friday</span>
                  <span className="text-muted">6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Saturday</span>
                  <span className="text-muted">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Sunday</span>
                  <span className="text-muted">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="text-primary text-sm font-medium">Free trial classes available during all operating hours</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-heading font-bold text-white text-xl mb-6">
                Find Us
              </h3>
              <div className="w-full h-48 bg-gray-800 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-muted text-sm">Interactive Google Maps</p>
                  <p className="text-white text-xs">Location: [Your City]</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full mt-4"
                animate={false}
              >
                <a
                  href="https://maps.google.com/?q=[Your Address]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div> */}
          </motion.div>
        </div>
      </Section>

      {/* Emergency Contact */}
      <Section className="bg-gradient-to-r from-primary to-accent">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-section font-heading font-bold text-white mb-4"
          >
            Need Immediate Assistance?
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            For urgent inquiries or same-day trial bookings, reach out directly via WhatsApp.
          </motion.p>
          <motion.div variants={fadeInUpVariants}>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="group"
            >
              <a
                href="https://wa.me/[Your WhatsApp Number]?text=Hi! I need immediate assistance with booking a trial class."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </motion.div>
  );
}