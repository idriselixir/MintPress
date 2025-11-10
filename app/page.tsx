'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Animated section component
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-turquoise-600 to-turquoise-800 text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 heading-uppercase"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Premium Printing<br />& Design Services
              </motion.h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl mb-8 text-turquoise-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your ideas into stunning printed materials
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                href="/services"
                className="btn-premium bg-white text-turquoise-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="btn-premium border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-turquoise-600 transition transform hover:scale-105"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Animated wave */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-gray-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </motion.div>
      </section>

      {/* Client Logos Section */}
      <AnimatedSection>
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Trusted By Leading Brands
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center text-gray-400"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeIn}>World-class printing for world-class brands</motion.p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase"
                variants={fadeInUp}
              >
                Our Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                variants={fadeInUp}
              >
                Professional printing and design solutions for your business
              </motion.p>
            </div>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: 'Book Printing',
                description: 'High-quality book printing with various binding options. Perfect for authors, publishers, and businesses.',
                icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
              },
              {
                title: 'Graphic Design',
                description: 'Creative design services for branding, marketing materials, and digital content that stands out.',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
              },
              {
                title: 'Commercial Printing',
                description: 'Business cards, flyers, brochures, posters, and more. Professional quality, fast turnaround.',
                icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.div 
                  className="w-16 h-16 bg-turquoise-100 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8 text-turquoise-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-uppercase text-sm">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-large">{service.description}</p>
                <Link 
                  href="/services" 
                  className="link-underline text-turquoise-600 font-semibold inline-flex items-center group"
                >
                  <span>Learn More</span>
                  <motion.svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase"
                variants={fadeInUp}
              >
                Why Choose MintPress?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                variants={fadeInUp}
              >
                Excellence in every print
              </motion.p>
            </div>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { stat: '5+', label: 'Years Experience', desc: 'Trusted by thousands of clients' },
              { stat: '24h', label: 'Fast Turnaround', desc: 'Quick delivery without compromise' },
              { stat: '100%', label: 'Quality Guaranteed', desc: 'Premium materials and finishes' },
              { stat: '24/7', label: 'Customer Support', desc: 'Always here to help you' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={scaleIn}
              >
                <motion.div 
                  className="w-24 h-24 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-bold text-turquoise-600">{item.stat}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 heading-uppercase text-sm">{item.label}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="section-padding bg-gradient-to-r from-turquoise-600 to-turquoise-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 heading-uppercase"
              variants={fadeInUp}
            >
              Ready to bring your<br />project to life?
            </motion.h2>
            <motion.p 
              className="text-xl text-turquoise-100 mb-8"
              variants={fadeInUp}
            >
              Get a free quote today and see how we can help your business grow
            </motion.p>
            <motion.div
              variants={scaleIn}
            >
              <Link
                href="/contact"
                className="btn-premium inline-block bg-white text-turquoise-600 px-10 py-5 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 text-lg uppercase tracking-wide"
              >
                Get Your Free Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}