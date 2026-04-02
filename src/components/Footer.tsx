import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-charcoal">
      <div className="container-width px-6 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-h4 font-bold text-cyan mb-4">3DC Brain</h3>
            <p className="text-gray-400 text-sm">
              AI-powered revenue operations for real estate professionals.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/revenue-operations" className="text-gray-400 hover:text-cyan text-sm">Revenue Operations</Link></li>
              <li><Link href="/competitive-research" className="text-gray-400 hover:text-cyan text-sm">Competitive Research</Link></li>
              <li><Link href="/content-engine" className="text-gray-400 hover:text-cyan text-sm">Content Engine</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-cyan text-sm">How It Works</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/for-investors" className="text-gray-400 hover:text-cyan text-sm">For Investors</Link></li>
              <li><Link href="/for-coaches" className="text-gray-400 hover:text-cyan text-sm">For Coaches</Link></li>
              <li><Link href="/for-service-providers" className="text-gray-400 hover:text-cyan text-sm">For Service Providers</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-cyan text-sm">Contact</Link></li>
              <li><a href="mailto:leadership@go3dc.com" className="text-gray-400 hover:text-cyan text-sm">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} 3 Degrees Consulting. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-cyan">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
