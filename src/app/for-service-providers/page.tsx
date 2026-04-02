import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'For Service Providers | 3DC Brain',
  description: 'Land more high-ticket clients. Lead Agent targets ideal prospects. Content Engine produces case studies. Pipeline Agent tracks every opportunity. 3–5 new clients/month.',
};

export default function ForServiceProvidersPage() {
  return (
    <>
      <Hero
        title="Land More High-Ticket Clients (Without Selling 24/7)"
        subtitle="Lead Agent targets ideal prospects in your niche. Content Agent produces case studies and proposals. Pipeline Agent ensures no deal stalls. 3–5 new clients per month at 3x deal size."
        cta={{ label: 'Let\'s Talk High-Ticket Sales', href: '/contact' }}
      />

      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Your Challenge
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Client acquisition is feast-or-famine. Closing high-ticket deals requires proof. Your proposal writing and follow-up are manual and slow. You're competing on price instead of value.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              What We Deploy
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Three agents engineered for high-ticket sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Lead Agent"
              description="Targets ideal prospects in your niche. 50–100 leads per month. Scores by budget, authority, and timeline. High-intent prospecting."
            />
            <FeatureCard
              icon="📄"
              title="Content Engine"
              description="Produces case studies proving your expertise. Proposal templates. One-pagers. Testimonial videos. Everything you need to close."
            />
            <FeatureCard
              icon="⏱️"
              title="Pipeline Agent"
              description="Tracks every opportunity. No deal stalls. Auto-triggers follow-ups. Surfaces revival opportunities. Ensures consistent revenue flow."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h3 text-white font-bold mb-8">Real Example</h2>
            <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm mb-12">
              <p className="text-body-lg text-gray-300 mb-6">
                <strong className="text-white">Service provider targeting $50K+ contracts.</strong>
              </p>
              <div className="space-y-4 text-body-sm text-gray-300">
                <div className="flex gap-4">
                  <span className="text-cyan font-bold">→</span>
                  <span><strong>Lead Agent</strong> identifies 75 prospects/month matching your profile</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan font-bold">→</span>
                  <span><strong>Content Agent</strong> produces 4 case studies/month (proof of your expertise)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan font-bold">→</span>
                  <span><strong>Pipeline Agent</strong> tracks all active opportunities (no drop-offs)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan font-bold">→</span>
                  <span><strong>Result:</strong> 4–5 new clients/month (+$200K+ revenue/month)</span>
                </div>
              </div>
            </div>

            <h2 className="text-h3 text-white font-bold mb-8">Real Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div>
                <p className="text-3xl font-bold text-cyan">50–100</p>
                <p className="text-body-sm text-gray-400 mt-2">Leads/month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">3–5</p>
                <p className="text-body-sm text-gray-400 mt-2">New clients/month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">2–3x</p>
                <p className="text-body-sm text-gray-400 mt-2">Larger deal sizes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">60%</p>
                <p className="text-body-sm text-gray-400 mt-2">Less proposal work</p>
              </div>
            </div>

            <div className="bg-charcoal/60 rounded-lg p-8 border border-cyan border-opacity-15 backdrop-blur-sm">
              <h3 className="text-h4 font-bold text-white mb-4">Why Agents Work for Service Providers</h3>
              <ul className="space-y-3 text-body-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Consistent pipeline.</strong> No more boom-bust cycles. Predictable revenue.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Better proof.</strong> Case studies built automatically. Bigger deals faster.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Faster close.</strong> Fewer follow-ups needed. Better positioning from day one.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Less manual work.</strong> 60% less proposal writing. More time selling.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to Close Bigger Deals?"
        subheading="Schedule a 20-minute call. We'll design your high-ticket sales machine."
      />
    </>
  );
}
