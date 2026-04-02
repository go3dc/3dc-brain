import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Competitive Research | 3DC Brain',
  description: 'Monitor competitor moves, market shifts, and deal flow in real-time. Know what competitors are doing before they announce it. 150–300 signals per week.',
};

export default function CompetitiveResearchPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Know What Your Competitors Are Doing Before They Announce It"
        subtitle="Our Research Agent monitors 150+ data sources, flags opportunities and threats real-time, and delivers weekly strategic briefs. First-mover advantage on every move."
        cta={{ label: 'See a Sample Brief', href: '/contact' }}
      />

      {/* The Problem */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              The Problem
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Competitive intelligence is reactive. You hear about competitor moves on podcasts, industry calls, or worse—from prospects who already know. You're always 2–4 weeks behind the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">You're Always Behind</h3>
              <p className="text-body-sm text-gray-300">
                News, funding, hiring, product launches—you find out after everyone else. First-mover advantage gone.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Scattered Intel</h3>
              <p className="text-body-sm text-gray-300">
                Market intelligence spread across newsletters, Slack, Twitter, podcasts. No unified picture.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Missed Opportunities</h3>
              <p className="text-body-sm text-gray-300">
                Competitors hiring = they're growing. But you don't know. Expansion plans you could exploit. But you miss them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Our Solution: Research Agent
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              One agent monitors 150+ data sources in real-time. Flags competitor moves, market shifts, regulatory changes, and deal flow. Scores prospects by high-intent signals. Delivers weekly strategic briefs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {/* Step 1 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">1</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Real-Time Monitoring</h3>
              <p className="text-body-sm text-gray-300">
                Track news, funding announcements, hiring signals, regulatory changes, product launches, and deal flow. All day, every day.
              </p>
            </div>

            {/* Step 2 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">2</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Scoring & Analysis</h3>
              <p className="text-body-sm text-gray-300">
                AI identifies what matters to your business. Scores prospects by engagement intent. 70% accuracy on signal relevance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">3</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Strategic Briefs</h3>
              <p className="text-body-sm text-gray-300">
                Every Monday, 10-minute read. Top signals. What they mean. How to leverage them. Delivered to your leadership.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm">
            <h3 className="text-h3 text-white font-bold mb-8">Real Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-cyan">150–300</p>
                <p className="text-body-sm text-gray-400 mt-2">Signals per week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">70%</p>
                <p className="text-body-sm text-gray-400 mt-2">Accuracy on intent</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">2–3</p>
                <p className="text-body-sm text-gray-400 mt-2">Major opportunities/month</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">1–2 weeks</p>
                <p className="text-body-sm text-gray-400 mt-2">Ahead of market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Monitors */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              What We Monitor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Competitor Activity</h3>
              <ul className="space-y-3 text-body-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Funding rounds (seed, Series A, B, C)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Executive hiring & departures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Product launches & updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Market expansion & acquisitions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Partnerships & integrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Market Signals</h3>
              <ul className="space-y-3 text-body-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Regulatory changes & compliance shifts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Industry consolidation & M&A trends</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Prospect high-intent signals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Tech & software announcements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  <span>Thought leadership & brand movements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              How Teams Are Using It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Market Entry Decisions</h3>
              <p className="text-body-sm text-gray-300">
                Know if a new market is heating up. See competitor moves. Regulatory changes. Funding activity. Data-backed expansion decisions.
              </p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Deal Expansion Opportunities</h3>
              <p className="text-body-sm text-gray-300">
                Prospect is hiring (expanding). Prospect got funded (capital to spend). Competitor acquired them (integration chaos = opportunity).
              </p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Strategic Positioning</h3>
              <p className="text-body-sm text-gray-300">
                What's your competitor messaging on? What features are they launching? Stay ahead. Differentiate faster.
              </p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Hiring & Talent Signals</h3>
              <p className="text-body-sm text-gray-300">
                Competitor is hiring your specialty = they're moving into your space. See it first. Be first to respond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        headline="Get Your First Strategic Brief Free"
        subheading="We'll scan your market, competitors, and prospects for 1 week and deliver your first intelligence brief—no commitment."
      />
    </>
  );
}
