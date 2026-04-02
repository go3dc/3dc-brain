import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Home | 3DC Brain',
  description: 'Your AI Revenue Agent, Deployed in 30 Days. Real estate investors, coaches, and service providers using AI agents to automate lead generation, competitive intelligence, and content at scale.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Your AI Revenue Agent, Deployed in 30 Days"
        subtitle="Real estate investors, coaches, and service providers are using AI agents to automate lead generation, competitive intelligence, and content at scale. We build and manage yours."
        cta={{ label: 'See How It Works', href: '/how-it-works' }}
        backgroundGradient
      />

      {/* Pain Points Section */}
      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-4 text-center">The Real Problem</h2>
          <p className="text-body-lg text-charcoal text-center max-w-2xl mx-auto mb-12">
            Your team spends 50–70% of their time on work AI agents can do better, faster, and 24/7.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📊"
              title="Inconsistent Pipeline"
              description="Your lead pipeline is scattered across tools, spreadsheets, and email. When deals close, you scramble to fill the void."
            />
            <FeatureCard
              icon="🔍"
              title="Intelligence Gaps"
              description="Competitive intelligence scattered across tools, newsletters, and calls. No unified strategy to stay ahead."
            />
            <FeatureCard
              icon="✍️"
              title="Content Bottleneck"
              description="Content creation (emails, social, briefs) eaten by manual work. Delays kill momentum and market opportunities."
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-gray-50">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-4 text-center">What 3DC Brain Does</h2>
          <p className="text-body-lg text-charcoal text-center max-w-2xl mx-auto mb-12">
            We deploy AI agents that sit inside your revenue operations flow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="🤖"
              title="Lead Agent"
              description="Identifies, scores, and qualifies prospects from 50+ data sources. Prepares them for outreach. 200–500 leads/week depending on your market."
            />
            <FeatureCard
              icon="📈"
              title="Research Agent"
              description="Monitors competitor moves, market shifts, and your deal landscape. Flags opportunities and threats real-time."
            />
            <FeatureCard
              icon="📝"
              title="Content Agent"
              description="Produces email sequences, market briefs, social content, and sales collateral. All data-backed, A/B-testable, automated."
            />
            <FeatureCard
              icon="📉"
              title="Pipeline Agent"
              description="Tracks every active deal. Triggers engagement before deals stall. Surfaces revival opportunities automatically."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        headline="Ready to Deploy Your AI Revenue Brain?"
        subheading="Join early access and see your first agents live in 30 days. No AI background required."
      />
    </>
  );
}
