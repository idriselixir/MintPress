import Link from 'next/link';

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-turquoise-600 to-turquoise-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-turquoise-100">Comprehensive printing and design solutions tailored to your needs</p>
        </div>
      </section>

      {/* Book Printing Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Book Printing Services</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Professional book printing services for authors, publishers, and organizations. 
                We handle everything from manuscripts to finished books with precision and care.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Hardcover & Softcover Binding</span>
                    <p className="text-gray-600">Choose from various binding options to suit your needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Custom Sizes & Formats</span>
                    <p className="text-gray-600">Any size from pocket books to coffee table editions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Full-Color or B&W Printing</span>
                    <p className="text-gray-600">High-quality offset and digital printing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Small & Large Print Runs</span>
                    <p className="text-gray-600">From 1 to 10,000+ copies</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-turquoise-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-turquoise-700 transition">
                Request a Quote
              </Link>
            </div>
            <div className="bg-turquoise-50 rounded-xl p-12 flex items-center justify-center">
              <svg className="w-full h-64 text-turquoise-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Design Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-turquoise-50 rounded-xl p-12 flex items-center justify-center order-2 lg:order-1">
              <svg className="w-full h-64 text-turquoise-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Graphic Design Services</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Creative design solutions that capture your brand's essence and communicate 
                your message effectively. Our talented designers bring your vision to life.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Logo & Brand Identity</span>
                    <p className="text-gray-600">Create memorable brand identities that stand out</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Marketing Materials</span>
                    <p className="text-gray-600">Brochures, flyers, posters, and banners</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Packaging Design</span>
                    <p className="text-gray-600">Eye-catching packaging that sells</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Digital Graphics</span>
                    <p className="text-gray-600">Social media graphics and digital ads</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-turquoise-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-turquoise-700 transition">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Printing Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Commercial Printing</h2>
              <p className="text-gray-600 mb-6 text-lg">
                High-quality commercial printing for all your business needs. From business 
                cards to large format posters, we deliver professional results every time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Business Cards & Stationery</span>
                    <p className="text-gray-600">Professional business essentials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Brochures & Flyers</span>
                    <p className="text-gray-600">Effective marketing materials that get noticed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Posters & Banners</span>
                    <p className="text-gray-600">Large format printing for maximum impact</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-turquoise-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Catalogs & Magazines</span>
                    <p className="text-gray-600">Professional publications that impress</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-turquoise-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-turquoise-700 transition">
                Get a Quote
              </Link>
            </div>
            <div className="bg-turquoise-50 rounded-xl p-12 flex items-center justify-center">
              <svg className="w-full h-64 text-turquoise-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">More ways we can help your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Photocopying & Scanning',
                description: 'High-speed copying and professional document scanning services.',
              },
              {
                title: 'Binding Services',
                description: 'Spiral, comb, thermal, and perfect binding for all document types.',
              },
              {
                title: 'Lamination',
                description: 'Protect and preserve your documents with quality lamination.',
              },
              {
                title: 'Large Format Printing',
                description: 'Banners, posters, and signage up to 5 meters wide.',
              },
              {
                title: 'Variable Data Printing',
                description: 'Personalized printing for direct mail and marketing campaigns.',
              },
              {
                title: 'Finishing Services',
                description: 'Die-cutting, embossing, foiling, and more.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise-600 to-turquoise-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a custom solution?
          </h2>
          <p className="text-xl text-turquoise-100 mb-8">
            Contact us to discuss your specific requirements
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-turquoise-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}