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

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
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

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-turquoise-600 to-turquoise-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 heading-uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About MintPress
          </motion.h1>
          <motion.p 
            className="text-xl text-turquoise-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trusted partner in printing excellence
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-uppercase">Our Story</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2014, MintPress has been at the forefront of printing innovation in Kenya. 
                What started as a small print shop has grown into one of Nairobi's most trusted printing 
                and design companies.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                We combine traditional craftsmanship with cutting-edge technology to deliver exceptional 
                results for our clients. From books and brochures to complete brand identities, we bring 
                your vision to life with precision and creativity.
              </p>
              <p className="text-gray-600 text-lg">
                Our commitment to quality, reliability, and customer satisfaction has made us the 
                go-to printing partner for businesses, authors, and organizations across Kenya.
              </p>
            </motion.div>

            <motion.div 
              className="bg-turquoise-50 rounded-xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                {[
                  {
                    title: 'Quality First',
                    desc: 'We never compromise on quality. Every project receives our full attention and expertise.',
                    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                  {
                    title: 'Fast Turnaround',
                    desc: 'We understand deadlines. Our efficient processes ensure quick delivery without sacrificing quality.',
                    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
                  },
                  {
                    title: 'Expert Team',
                    desc: 'Our skilled professionals bring years of experience and passion to every project.',
                    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    variants={scaleIn}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 bg-turquoise-600 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: 'Our Mission',
                content: 'To provide exceptional printing and design services that help our clients communicate their message effectively. We strive to exceed expectations through quality, innovation, and dedicated customer service.',
                icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              },
              {
                title: 'Our Vision',
                content: 'To be East Africa\'s leading printing and design company, known for innovation, quality, and sustainability. We envision a future where every printed piece tells a compelling story.',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8"
                variants={scaleIn}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-turquoise-100 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-8 h-8 text-turquoise-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-uppercase text-sm">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: 'Excellence',
                description: 'We pursue excellence in every project, no matter the size. Quality is our standard.',
                icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              },
              {
                title: 'Integrity',
                description: 'Honesty and transparency in all our dealings. We build trust through our actions.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              },
              {
                title: 'Innovation',
                description: 'Embracing new technologies and creative solutions to deliver better results.',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              },
              {
                title: 'Customer Focus',
                description: 'Your success is our success. We listen, understand, and deliver.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              },
              {
                title: 'Sustainability',
                description: 'Committed to environmentally responsible printing practices.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Reliability',
                description: 'Consistent quality and on-time delivery. You can count on us.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              },
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6"
                variants={scaleIn}
              >
                <motion.div 
                  className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-turquoise-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d={value.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 heading-uppercase text-sm">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="section-padding bg-gradient-to-r from-turquoise-600 to-turquoise-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 heading-uppercase"
              variants={fadeInUp}
            >
              Ready to work with us?
            </motion.h2>
            <motion.p 
              className="text-xl text-turquoise-100 mb-8"
              variants={fadeInUp}
            >
              Let's bring your project to life together
            </motion.p>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/contact"
                className="btn-premium inline-block bg-white text-turquoise-600 px-10 py-5 rounded-lg font-bold hover:bg-gray-100 transition text-lg uppercase tracking-wide"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}