import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'How It Works | 3DC Brain',
  description: 'From Chaos to Clarity in 30 Days. Three phases: Strategy, Deploy, Scale. See how we turn your revenue operations into a compounding advantage.',
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        title="From Chaos to Clarity in 30 Days"
        subtitle="Three phases. One mission: Make your deals move faster."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">The Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-cyan">
              <div className="text-4xl font-bold text-cyan mb-4">Week 1</div>
              <h3 className="text-h4 font-semibold text-navy mb-3">Strategy & Integration</h3>
              <ul className="text-body-md text-charcoal space-y-2">
                <li>✓ Map your current workflow</li>
                <li>✓ Audit your data sources</li>
                <li>✓ Design your agent team</li>
                <li>✓ You approve the blueprint</li>
              </ul>
            </div>

            <div className="card border-t-4 border-cyan">
              <div className="text-4xl font-bold text-cyan mb-4">Weeks 2-4</div>
              <h3 className="text-h4 font-semibold text-navy mb-3">Deploy & Pilot</h3>
              <ul className="text-body-md text-charcoal space-y-2">
                <li>✓ 1-2 agents go live</li>
                <li>✓ Full audit trails & approval gates</li>
                <li>✓ Measurable output in 7 days</li>
                <li>✓ Weekly reviews & optimization</li>
              </ul>
            </div>

            <div className="card border-t-4 border-cyan">
              <div className="text-4xl font-bold text-cyan mb-4">Month 2+</div>
              <h3 className="text-h4 font-semibold text-navy mb-3">Scale & Compound</h3>
              <ul className="text-body-md text-charcoal space-y-2">
                <li>✓ Add agents as wins compound</li>
                <li>✓ Agents get smarter weekly</li>
                <li>✓ Team velocity increases</li>
                <li>✓ Cycle time drops. Margins expand.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to See Your Roadmap?"
        subheading="Book a 20-minute scope call with our team. No sales pitch—just strategy."
      />
    </>
  );
}
