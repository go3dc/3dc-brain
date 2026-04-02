import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Competitive Research | 3DC Brain',
  description: 'Real-time market intelligence. Monitor competitor moves, track market trends, and stay ahead of the deal landscape with AI-powered research.',
};

export default function CompetitiveResearchPage() {
  return (
    <>
      <Hero
        title="Market Intelligence That Actually Works"
        subtitle="Monitor competitors, track market moves, and spot opportunities in real-time. No more scattered intel. One brain. Full visibility."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">What It Tracks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="👁️"
              title="Competitor Monitoring"
              description="Track competitor pricing, messaging, product launches, and hiring. Spot threats before they impact your deals."
            />
            <FeatureCard
              icon="📈"
              title="Market Trend Analysis"
              description="Monitor market shifts, pricing trends, deal activity, and investor movement. Stay ahead of market moves."
            />
            <FeatureCard
              icon="🔔"
              title="Real-Time Alerts"
              description="Get notified when competitors move, markets shift, or opportunities emerge. Act fast. Close first."
            />
            <FeatureCard
              icon="📋"
              title="Intelligence Reports"
              description="Weekly intelligence briefs on your market, your competitors, and your own deal landscape. Data-backed insights."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-h2 text-navy mb-6">Key Data Points We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <p className="text-body-md text-charcoal">Competitor pricing & positioning</p>
            </div>
            <div className="card">
              <p className="text-body-md text-charcoal">New product launches & features</p>
            </div>
            <div className="card">
              <p className="text-body-md text-charcoal">Market sentiment & investor activity</p>
            </div>
            <div className="card">
              <p className="text-body-md text-charcoal">Your own deal win/loss patterns</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="See Your Market in Real-Time"
        subheading="Join early access to our competitive intelligence system."
      />
    </>
  );
}
