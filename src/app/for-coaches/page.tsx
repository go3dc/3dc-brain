import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'For Coaches & Consultants | 3DC Brain',
  description: 'For coaches and business consultants: client lead generation, market positioning, and content automation to grow your coaching business.',
};

export default function ForCoachesPage() {
  return (
    <>
      <Hero
        title="For Coaches & Consultants"
        subtitle="Automate client acquisition. Own your market positioning. Build your authority. All while you focus on coaching."
        backgroundGradient={false}
      />

      <section className="section bg-white">
        <div className="container-width">
          <h2 className="text-h2 text-navy mb-12 text-center">Coach-Specific Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="📚"
              title="Client Lead Generation"
              description="Automatically identify and qualify prospects looking for coaching in your niche. Ready for outreach and sales calls."
            />
            <FeatureCard
              icon="🎯"
              title="Authority Building"
              description="Content engine produces articles, case studies, and social posts that position you as the expert in your space."
            />
            <FeatureCard
              icon="📧"
              title="Email Marketing Automation"
              description="Nurture sequences for prospects. Retention sequences for current clients. All personalized, all automatic."
            />
            <FeatureCard
              icon="💬"
              title="Community & Network Intelligence"
              description="Track conversations in your niche. Spot trending problems. Build content around them. Attract ideal clients."
            />
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-width text-center">
          <h2 className="text-h2 text-navy mb-6">What Coaches See in 45 Days</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">10+</div>
              <p className="text-body-md text-charcoal">Qualified client leads per month</p>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">4x</div>
              <p className="text-body-md text-charcoal">More time for actual coaching</p>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-cyan mb-2">80%</div>
              <p className="text-body-md text-charcoal">Of prospects pre-qualified before calls</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Grow Your Coaching Business Without Hustle"
        subheading="Let AI handle lead gen and content. You focus on coaching."
      />
    </>
  );
}
