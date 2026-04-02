import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Revenue Operations | 3DC Brain',
  description: 'Deploy AI agents that own your entire revenue operations flow. Lead generation, qualification, deal tracking, and pipeline management—automated and measurable.',
};

export default function RevenueOperationsPage() {
  return (
    <>
      <Hero
        title="Your Revenue Operations Brain"
        subtitle="One system that handles lead generation, qualification, tracking, and deal management. All coordinated. All measurable."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">What It Does</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="🎯"
              title="Lead Sourcing & Scoring"
              description="Automatically identify prospects across 50+ data sources. Score them by fit, intent, and readiness. Prepare qualified leads for your sales team."
            />
            <FeatureCard
              icon="📞"
              title="Outreach Orchestration"
              description="Trigger personalized email sequences, calls, and SMS based on prospect behavior. Track engagement. Escalate hot leads."
            />
            <FeatureCard
              icon="📊"
              title="Deal Tracking & Alerts"
              description="Monitor every active deal. Flag stalling pipelines before they die. Surface revival opportunities. Keep deals moving."
            />
            <FeatureCard
              icon="🔄"
              title="Feedback Loops & Optimization"
              description="Weekly reviews of what's working. Double down on winners. Kill what doesn't. Continuous improvement, every week."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-h2 text-navy mb-6">Expected Results (45 Days)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-cyan mb-2">3x</div>
              <p className="text-body-md text-charcoal">Increase in pipeline visibility</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan mb-2">45+</div>
              <p className="text-body-md text-charcoal">Booked meetings/month (per user)</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan mb-2">50%</div>
              <p className="text-body-md text-charcoal">Reduction in manual data entry</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Deploy Your Revenue Operations Brain"
        subheading="Let's map your workflow and build your agent team."
      />
    </>
  );
}
