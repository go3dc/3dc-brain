import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'For Investors | 3DC Brain',
  description: 'Scale your deal flow without scaling your team. Lead Agent + Pipeline Agent. 300–500 leads/month. First-mover advantage on off-market deals.',
};

export default function ForInvestorsPage() {
  return (
    <>
      <Hero
        title="Scale Your Deal Flow Without Scaling Your Team"
        subtitle="Our Lead Agent finds off-market deals in your geography and strategy. 300–500 leads per month. Pipeline Agent tracks every deal. Never miss an opportunity."
        cta={{ label: 'Book Your Investment Strategy Call', href: '/contact' }}
      />

      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Your Challenge
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Deal sourcing is inconsistent. You're competing with larger operators who have full sourcing teams. Your manual outreach caps your deal volume. You need scale without hiring.
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
              Lead Agent + Pipeline Agent. Work together to find deals, score them, and track them to close.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="🎯"
              title="Lead Agent"
              description="Identifies off-market deals in your geography, strategy, and deal size. MLS feeds, pocket listings, wholesalers, probate, distressed sales. 300–500 leads per month. Scored by equity, cap rate, and your custom criteria."
              link={{ label: 'Learn more', href: '/revenue-operations' }}
            />
            <FeatureCard
              icon="⏱️"
              title="Pipeline Agent"
              description="Tracks every active deal. No opportunity stalls. Auto-triggers follow-ups. Surfaces revival opportunities. Weekly deal health report. Ensures no lead falls through cracks."
              link={{ label: 'Learn more', href: '/how-it-works' }}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h3 text-white font-bold mb-8">Real Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div>
                <p className="text-3xl font-bold text-cyan">300–500</p>
                <p className="text-body-sm text-gray-400 mt-2">Leads/month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">50–80</p>
                <p className="text-body-sm text-gray-400 mt-2">Qualified prospects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">10–20</p>
                <p className="text-body-sm text-gray-400 mt-2">Booked calls/month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">3x</p>
                <p className="text-body-sm text-gray-400 mt-2">Deal velocity vs manual</p>
              </div>
            </div>

            <div className="bg-charcoal/60 rounded-lg p-8 border border-cyan border-opacity-15 backdrop-blur-sm">
              <h3 className="text-h4 font-bold text-white mb-4">Why Agents Work for Investors</h3>
              <ul className="space-y-3 text-body-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Always working.</strong> Nights, weekends, holidays. Consistent deal flow.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Off-market advantage.</strong> Finds deals your competitors miss.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Scales without hiring.</strong> Same team, 3x deal volume.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>No emotional bias.</strong> Data-driven scoring. Best deals surface first.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to Triple Your Deal Flow?"
        subheading="Schedule a 20-minute call. We'll design your custom lead sourcing strategy and show you the roadmap."
      />
    </>
  );
}
