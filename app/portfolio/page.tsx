'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function Portfolio() {
  const portfolioItems = [
    {
      category: 'Book Printing',
      title: 'Educational Textbooks',
      description: 'Printed 50,000 copies of primary school textbooks with full-color illustrations.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Book Printing',
      title: 'Novel Series',
      description: 'Complete printing and binding for a 3-book fiction series with custom cover design.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Graphic Design',
      title: 'Tech Startup Branding',
      description: 'Complete brand identity including logo, business cards, and marketing materials.',
      color: 'from-turquoise-500 to-turquoise-600'
    },
    {
      category: 'Graphic Design',
      title: 'Restaurant Menu Design',
      description: 'Modern, elegant menu design with custom illustrations and premium finishes.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      category: 'Commercial Printing',
      title: 'Corporate Event Materials',
      description: 'Programs, badges, banners, and signage for 500-person conference.',
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Commercial Printing',
      title: 'Real Estate Brochures',
      description: 'High-end property brochures with premium paper and finishing.',
      color: 'from-red-500 to-red-600'
    },
    {
      category: 'Large Format',
      title: 'Retail Store Signage',
      description: 'Indoor and outdoor signage for retail chain across 10 locations.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      category: 'Packaging',
      title: 'Product Packaging',
      description: 'Custom packaging design and printing for cosmetics brand launch.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      category: 'Marketing',
      title: 'Political Campaign Materials',
      description: 'Posters, flyers, and banners for successful county election campaign.',
      color: 'from-yellow-500 to-yellow-600'
    },
  ];

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
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl text-turquoise-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See what we've created for our clients
          </motion.p>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '1M+', label: 'Items Printed' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={scaleIn}>
                <motion.div 
                  className="text-4xl font-bold text-turquoise-600 mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase">Featured Projects</h2>
            <p className="text-xl text-gray-600">A selection of our recent work</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden"
                variants={scaleIn}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center p-8`}>
                  <div className="text-center text-white">
                    <div className="text-sm font-semibold mb-2 opacity-90 uppercase tracking-wide">{item.category}</div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{item.description}</p>
                  <motion.div 
                    className="mt-4 flex items-center text-turquoise-600 font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>View Details</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Sarah Mwangi',
                role: 'Author',
                content: 'MintPress printed my first novel and the quality exceeded my expectations. The team was professional and delivered on time.',
                rating: 5,
              },
              {
                name: 'James Ochieng',
                role: 'Marketing Director',
                content: 'We have been using MintPress for all our marketing materials for 3 years. Consistent quality and great customer service.',
                rating: 5,
              },
              {
                name: 'Grace Kimani',
                role: 'Small Business Owner',
                content: 'From design to printing, MintPress handled everything. My business cards and brochures look amazing!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 shadow-md"
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heading-uppercase">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Trusted by diverse sectors</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
              { name: 'Healthcare', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { name: 'Retail', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
              { name: 'Real Estate', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { name: 'Non-Profit', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
              { name: 'Corporate', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { name: 'Publishing', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { name: 'Hospitality', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' },
            ].map((industry, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-6 text-center"
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg 
                  className="w-12 h-12 text-turquoise-600 mx-auto mb-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={industry.icon} />
                </motion.svg>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
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
            Ready to start your project?
          </h2>
          <p className="text-xl text-turquoise-100 mb-8">
            Let's create something amazing together
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="btn-premium inline-block bg-white text-turquoise-600 px-10 py-5 rounded-lg font-bold hover:bg-gray-100 transition text-lg uppercase tracking-wide"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}