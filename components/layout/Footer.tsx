import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-turquoise-500">Mint</span>
              <span className="text-3xl font-bold text-white">Press</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium printing and design services for businesses and individuals.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-turquoise-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-turquoise-500 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-turquoise-500 transition">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-turquoise-500 transition">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>+254 XXX XXX XXX</li>
              <li>info@mintpress.co.ke</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} MintPress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}