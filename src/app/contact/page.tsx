import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Contact | 3DC Brain',
  description: 'Get in touch with our team. Let\'s discuss how AI agents can transform your revenue operations.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Build Your Revenue Brain"
        subtitle="Have questions? Ready to get started? Reach out. We'll scope your project and build your roadmap."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-h4 font-semibold text-navy mb-2">Email</h3>
              <a href="mailto:leadership@go3dc.com" className="text-cyan hover:text-cyan-dark">
                leadership@go3dc.com
              </a>
            </div>

            <div className="card text-center">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-h4 font-semibold text-navy mb-2">Schedule a Call</h3>
              <p className="text-body-md text-charcoal">
                Book a 20-min scope call with our team
              </p>
            </div>

            <div className="card text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-h4 font-semibold text-navy mb-2">Early Access</h3>
              <p className="text-body-md text-charcoal">
                Join our early access program
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to Get Started?"
        subheading="Fill out the form below and we'll be in touch within 24 hours."
      />
    </>
  );
}
