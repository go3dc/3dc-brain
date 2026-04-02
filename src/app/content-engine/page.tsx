import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Content Engine | 3DC Brain',
  description: 'AI-powered content generation for email, social media, and sales collateral. Deploy a playbook in 7 days. Scale content production without hiring.',
};

export default function ContentEnginePage() {
  return (
    <>
      <Hero
        title="Your Content Engine"
        subtitle="Email sequences, market briefs, social content, and sales collateral—all AI-generated, data-backed, and ready to deploy."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">What It Produces</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="✉️"
              title="Email Sequences"
              description="Personalized email campaigns. Triggered by prospect behavior. A/B tested and optimized weekly. Backed by real market data."
            />
            <FeatureCard
              icon="📰"
              title="Market Briefs"
              description="Weekly market intelligence. What's happening in your space. What your competitors are doing. What opportunities exist."
            />
            <FeatureCard
              icon="📱"
              title="Social Content"
              description="LinkedIn posts, Twitter threads, Instagram captions. All data-backed. All on-brand. All scheduled and posted automatically."
            />
            <FeatureCard
              icon="📄"
              title="Sales Collateral"
              description="Case studies, one-pagers, pitch decks, objection handling. All generated from your data. All ready to deploy."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-6 text-center">Typical Content Playbook</h2>
          <div className="card max-w-2xl mx-auto">
            <ul className="space-y-4 text-body-md text-charcoal">
              <li><strong>Week 1:</strong> Audit your existing content. Design your playbook (email templates, social themes, brief format).</li>
              <li><strong>Week 2:</strong> Deploy first email sequence. 200+ emails/week going out. Real responses coming in.</li>
              <li><strong>Week 3:</strong> Social content starts publishing. 5-10 posts/week. Engagement growing.</li>
              <li><strong>Week 4:</strong> Market brief production live. Sales team using collateral. Deal conversations happening.</li>
              <li><strong>Month 2+:</strong> Weekly optimization. A/B testing. Playbook improving. Content compounding.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA
        headline="Deploy Your Content Engine in 7 Days"
        subheading="Stop writing. Start winning. We'll handle the content."
      />
    </>
  );
}
