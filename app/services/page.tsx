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
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-turquoise-600 to-turquoise-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 heading-uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-turquoise-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive printing and design solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Book Printing */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-uppercase">Book Printing</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Professional book printing services for authors, publishers, and organizations. 
                We handle everything from manuscripts to finished books with precision and care.
              </p>
              <motion.ul 
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: 'Hardcover & Softcover Binding', desc: 'Choose from various binding options to suit your needs' },
                  { title: 'Custom Sizes & Formats', desc: 'Any size from pocket books to coffee table editions' },
                  { title: 'Full-Color or B&W Printing', desc: 'High-quality offset and digital printing' },
                  { title: 'Small & Large Print Runs', desc: 'From 1 to 10,000+ copies' }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={scaleIn}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-premium inline-block bg-turquoise-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-turquoise-700 transition">
                  Request a Quote
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-turquoise-50 rounded-xl p-12 flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <motion.svg 
                className="w-full h-64 text-turquoise-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.6 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="bg-turquoise-50 rounded-xl p-12 flex items-center justify-center order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <motion.svg 
                className="w-full h-64 text-turquoise-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.6 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </motion.svg>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-uppercase">Graphic Design</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Creative design solutions that capture your brand's essence and communicate 
                your message effectively. Our talented designers bring your vision to life.
              </p>
              <motion.ul 
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: 'Logo & Brand Identity', desc: 'Create memorable brand identities that stand out' },
                  { title: 'Marketing Materials', desc: 'Brochures, flyers, posters, and banners' },
                  { title: 'Packaging Design', desc: 'Eye-catching packaging that sells' },
                  { title: 'Digital Graphics', desc: 'Social media graphics and digital ads' }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={scaleIn}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-premium inline-block bg-turquoise-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-turquoise-700 transition">
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Printing */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-uppercase">Commercial Printing</h2>
              <p className="text-gray-600 mb-6 text-lg">
                High-quality commercial printing for all your business needs. From business 
                cards to large format posters, we deliver professional results every time.
              </p>
              <motion.ul 
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: 'Business Cards & Stationery', desc: 'Professional business essentials' },
                  { title: 'Brochures & Flyers', desc: 'Effective marketing materials that get noticed' },
                  { title: 'Posters & Banners', desc: 'Large format printing for maximum impact' },
                  { title: 'Catalogs & Magazines', desc: 'Professional publications that impress' }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={scaleIn}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-premium inline-block bg-turquoise-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-turquoise-700 transition">
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-turquoise-50 rounded-xl p-12 flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <motion.svg 
                className="w-full h-64 text-turquoise-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.6 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase">Additional Services</h2>
            <p className="text-xl text-gray-600">More ways we can help your business</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { title: 'Photocopying & Scanning', description: 'High-speed copying and professional document scanning services.' },
              { title: 'Binding Services', description: 'Spiral, comb, thermal, and perfect binding for all document types.' },
              { title: 'Lamination', description: 'Protect and preserve your documents with quality lamination.' },
              { title: 'Large Format Printing', description: 'Banners, posters, and signage up to 5 meters wide.' },
              { title: 'Variable Data Printing', description: 'Personalized printing for direct mail and marketing campaigns.' },
              { title: 'Finishing Services', description: 'Die-cutting, embossing, foiling, and more.' },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6"
                variants={scaleIn}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-turquoise-600 to-turquoise-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 heading-uppercase">
            Need a custom solution?
          </h2>
          <p className="text-xl text-turquoise-100 mb-8">
            Contact us to discuss your specific requirements
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="btn-premium inline-block bg-white text-turquoise-600 px-10 py-5 rounded-lg font-bold hover:bg-gray-100 transition text-lg uppercase tracking-wide"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}