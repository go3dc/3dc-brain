import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'For Service Providers | 3DC Brain',
  description: 'For real estate service providers: client lead generation, market positioning, and service automation to scale your business.',
};

export default function ForServiceProvidersPage() {
  return (
    <>
      <Hero
        title="For Service Providers"
        subtitle="Get more client leads. Build authority in your vertical. Scale without scaling your team."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">Service Provider Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="🔍"
              title="Hyper-Targeted Lead Gen"
              description="Find real estate professionals who need your specific service. No wasted time on unqualified leads."
            />
            <FeatureCard
              icon="📞"
              title="Automated Outreach"
              description="Email sequences, follow-ups, and call scheduling. All personalized to the prospect's situation."
            />
            <FeatureCard
              icon="🎓"
              title="Education & Positioning"
              description="Build authority through webinars, guides, and educational content. Position yourself as the trusted expert."
            />
            <FeatureCard
              icon="🤖"
              title="Client Management"
              description="Automated workflows for onboarding, check-ins, and renewals. Every client stays engaged."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-h2 text-navy mb-6">What Service Providers See</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">25+</div>
              <p className="text-body-md text-charcoal">Qualified leads per month</p>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">40%</div>
              <p className="text-body-md text-charcoal">Conversion rate (pre-qualified)</p>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">2x</div>
              <p className="text-body-md text-charcoal">Revenue growth in 6 months</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Scale Your Service Business with AI"
        subheading="Get more clients without more hustle. Let's build your engine."
      />
    </>
  );
}
