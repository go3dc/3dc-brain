import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'For Coaches | 3DC Brain',
  description: 'Automate student acquisition and engagement. Lead Agent finds prospects. Content Engine produces email sequences and success stories. Pipeline Agent tracks every lead.',
};

export default function ForCoachesPage() {
  return (
    <>
      <Hero
        title="Automate Student Acquisition & Engagement"
        subtitle="Lead Agent finds high-intent prospects in your niche. Content Engine produces email sequences and testimonials. Pipeline Agent tracks every student. 40–60 new students per quarter."
        cta={{ label: 'Scale Your Coaching Practice', href: '/contact' }}
      />

      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Your Challenge
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Lead generation is unpredictable. Client retention requires constant touch. Content creation takes forever. You're a great coach but you can't spend all day on operations.
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
              Three agents working together to fill your pipeline and scale your practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎯"
              title="Lead Agent"
              description="Finds high-intent prospects in your niche. 100–200 leads per month. Scores by engagement signals and ideal client fit. Saves you hours hunting for students."
            />
            <FeatureCard
              icon="📝"
              title="Content Engine"
              description="Produces email sequences, testimonial graphics, LinkedIn posts, and client success stories. 20–30 pieces per week. Automatic. You approve and publish."
            />
            <FeatureCard
              icon="⏱️"
              title="Pipeline Agent"
              description="Tracks every prospect. No lead stalls. Auto-triggers nurture sequences. Surfaces hot prospects. Ensures consistent pipeline flow."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h3 text-white font-bold mb-8">Real Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div>
                <p className="text-3xl font-bold text-cyan">100–200</p>
                <p className="text-body-sm text-gray-400 mt-2">Leads/month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">15–25%</p>
                <p className="text-body-sm text-gray-400 mt-2">Conversion rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">40–60</p>
                <p className="text-body-sm text-gray-400 mt-2">New students/quarter</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan">50%</p>
                <p className="text-body-sm text-gray-400 mt-2">Less admin work</p>
              </div>
            </div>

            <div className="bg-charcoal/60 rounded-lg p-8 border border-cyan border-opacity-15 backdrop-blur-sm">
              <h3 className="text-h4 font-bold text-white mb-4">Why Agents Transform Coaching</h3>
              <ul className="space-y-3 text-body-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Predictable pipeline.</strong> Stop feast-or-famine. Consistent students month after month.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Time back.</strong> 50% less admin. More time coaching actual students.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Better retention.</strong> Automated touch sequences. Students feel supported.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan">✓</span>
                  <span><strong>Social proof at scale.</strong> Success stories generated automatically. Builds trust fast.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        headline="Stop Juggling Operations. Start Coaching."
        subheading="Schedule a call and let's design your student acquisition system."
      />
    </>
  );
}
