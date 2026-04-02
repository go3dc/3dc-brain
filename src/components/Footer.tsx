import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { href: '/revenue-operations', label: 'Revenue Operations' },
    { href: '/competitive-research', label: 'Competitive Research' },
    { href: '/content-engine', label: 'Content Engine' },
    { href: '/how-it-works', label: 'How It Works' },
  ];

  const resourceLinks = [
    { href: '/for-investors', label: 'For Investors' },
    { href: '/for-coaches', label: 'For Coaches' },
    { href: '/for-service-providers', label: 'For Service Providers' },
  ];

  const companyLinks = [
    { href: '/contact', label: 'Contact' },
    { href: 'mailto:hello@3dcbrain.com', label: 'Email Us' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ];

  return (
    <footer className="bg-gradient-navy-to-charcoal-180 text-white border-t border-cyan border-opacity-10">
      <div className="container-lg px-6 md:px-12 py-16 md:py-24">
        {/* Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12 md:mb-16">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-h4 font-bold text-white mb-4">3DC Brain</h3>
            <p className="text-body-sm text-gray-300 mb-6">
              Your AI Department, Deployed in 45 Days
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors duration-200" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.89 1.529 2.341 1.544 2.914 1.181.092-.916.348-1.544.634-1.899-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors duration-200" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.25 7-5.5 7-5.5s-1.08.81-3 1.5" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-h4 font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-gray-400 hover:text-cyan transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-h4 font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-gray-400 hover:text-cyan transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div>
            <h4 className="text-h4 font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('mailto:') ? (
                    <a href={link.href} className="text-body-sm text-gray-400 hover:text-cyan transition-colors duration-200">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-body-sm text-gray-400 hover:text-cyan transition-colors duration-200">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <h4 className="text-body-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-body-sm text-gray-400 hover:text-cyan transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-caption text-gray-400">
            © {currentYear} 3DC Brain. All rights reserved.
          </p>
          <div className="flex gap-6 text-caption text-gray-400">
            <a href="#" className="hover:text-cyan transition-colors duration-200">Status</a>
            <a href="#" className="hover:text-cyan transition-colors duration-200">Security</a>
            <a href="#" className="hover:text-cyan transition-colors duration-200">Updates</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
