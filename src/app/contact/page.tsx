import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import EmailForm from '@/components/EmailForm';

export const metadata: Metadata = {
  title: 'Contact | 3DC Brain',
  description: 'Get in touch with our team. Schedule a 20-minute discovery call and let\'s scope your AI agent roadmap.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Let's Build Your Revenue Brain"
        subtitle="Have questions? Ready to get started? Reach out. We'll scope your project and design your agent roadmap in 20 minutes."
        cta={{ label: 'Schedule a Call', href: '#contact-form' }}
      />

      {/* Contact Info Grid */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {/* Email */}
            <div className="feature-card text-center flex flex-col items-center">
              <div className="text-5xl mb-6">📧</div>
              <h3 className="text-h4 font-bold text-white mb-3">Email Us</h3>
              <a 
                href="mailto:hello@3dcbrain.com" 
                className="text-cyan hover:text-white transition-colors font-semibold mb-3"
              >
                hello@3dcbrain.com
              </a>
              <p className="text-body-sm text-gray-400">Response within 24 hours</p>
            </div>

            {/* Schedule Call */}
            <div className="feature-card text-center flex flex-col items-center">
              <div className="text-5xl mb-6">📅</div>
              <h3 className="text-h4 font-bold text-white mb-3">Schedule a Call</h3>
              <p className="text-body-sm text-gray-300 mb-4">
                20-minute discovery call with our team
              </p>
              <Link href="#contact-form" className="btn-outline text-sm py-2 px-4">
                Book Now
              </Link>
            </div>

            {/* Locations */}
            <div className="feature-card text-center flex flex-col items-center">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-h4 font-bold text-white mb-3">Global Team</h3>
              <p className="text-body-sm text-gray-300">
                Based in New York, serving clients worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-gradient-navy-charcoal scroll-mt-20">
        <div className="container-lg px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
                Let's Get Started
              </h2>
              <p className="text-body-lg md:text-xl text-gray-300">
                Fill out the form below and we'll schedule a time to discuss your AI agent roadmap. No pressure, no sales pitch—just a real conversation about your challenges and goals.
              </p>
            </div>

            {/* Form */}
            <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm">
              <EmailForm />
            </div>

            {/* Trust Info */}
            <div className="mt-12 text-center">
              <p className="text-caption text-gray-400 mb-4">
                What happens next?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-2xl font-bold text-cyan mb-2">1</div>
                  <p className="text-body-sm text-gray-400">We review your intake and schedule a call</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan mb-2">2</div>
                  <p className="text-body-sm text-gray-400">20-min discovery call to understand your situation</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan mb-2">3</div>
                  <p className="text-body-sm text-gray-400">Custom roadmap & agent blueprint</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Collapsed) */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              Common Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">How long does deployment take?</h3>
              <p className="text-body-sm text-gray-300">
                45 days from kickoff to live agents. Week 1 is strategy and design. Weeks 2–4, your first 1–2 agents go live and start producing results.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Do I need AI experience?</h3>
              <p className="text-body-sm text-gray-300">
                No. You tell us your goals and metrics. We handle the rest—design, deployment, optimization, monitoring.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">What's the commitment?</h3>
              <p className="text-body-sm text-gray-300">
                Start with a 45-day pilot. 1–2 agents. Measurable outcomes. If it's working, we scale. If not, you walk.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Where does my data live?</h3>
              <p className="text-body-sm text-gray-300">
                Your data stays in your environment. We deploy agents into your infrastructure. Full audit trails, enterprise-grade isolation.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">How much will this cost?</h3>
              <p className="text-body-sm text-gray-300">
                Pricing depends on your agents, data volume, and outputs. We'll discuss specific numbers during your discovery call.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">What if I'm not ready yet?</h3>
              <p className="text-body-sm text-gray-300">
                No problem. Check out our case studies or <Link href="/how-it-works" className="text-cyan hover:text-white">learn how it works</Link>. We're here when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
