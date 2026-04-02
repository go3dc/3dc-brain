import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'For Real Estate Investors | 3DC Brain',
  description: 'Designed for real estate investors: portfolio tracking, deal pipeline management, and competitive market intelligence—all automated.',
};

export default function ForInvestorsPage() {
  return (
    <>
      <Hero
        title="Built for Real Estate Investors"
        subtitle="Track your portfolio. Manage your pipeline. Spot opportunities. All automatically."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">Investor-Specific Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="🏠"
              title="Deal Pipeline Management"
              description="Track every deal from lead to close. Know which deals are stalling. Trigger action before opportunities die."
            />
            <FeatureCard
              icon="💼"
              title="Portfolio Tracking"
              description="Monitor all your properties in one dashboard. Rental income, expenses, occupancy, ROI. All real-time."
            />
            <FeatureCard
              icon="📍"
              title="Market Opportunity Spotting"
              description="Get alerted to new investment opportunities in your target markets. Before anyone else finds them."
            />
            <FeatureCard
              icon="🤝"
              title="Wholesaler & Broker Intelligence"
              description="Know what deals wholesalers and brokers are bringing. Track their patterns. Close first."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-h2 text-navy mb-6">What Investors See in 30 Days</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">5x</div>
              <p className="text-body-md text-charcoal">More deal flow from automated lead gen</p>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">60%</div>
              <p className="text-body-md text-charcoal">Reduction in time managing pipeline</p>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">3</div>
              <p className="text-body-md text-charcoal">More closed deals per quarter</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Scale Your Real Estate Business with AI"
        subheading="Join early access. See how we help investors close more deals faster."
      />
    </>
  );
}
