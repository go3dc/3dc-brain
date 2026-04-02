import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'How It Works | 3DC Brain',
  description: 'From strategy to live agents in 45 days. Three phases: discover your goals, deploy working agents, scale as you compound wins.',
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="From Strategy to Scaling: 45 Days"
        subtitle="Three phases. One mission: Deploy working agents that generate measurable revenue growth."
        cta={{ label: 'Schedule Your Discovery Call', href: '/contact' }}
      />

      {/* The Process - Timeline Section */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              The Three-Phase Process
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300 mt-6">
              Each phase builds on the last. Measurable results every step of the way.
            </p>
          </div>

          {/* Phase Cards Grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {/* Phase 1: Week 1 */}
            <div className="feature-card border-t-4 border-cyan">
              <div className="text-5xl font-bold text-cyan mb-4">Week 1</div>
              <h3 className="text-h3 text-white font-bold mb-6">Strategy & Design</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Audit your operations and workflows</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Map your pain points and data sources</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Design your custom agent team</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Define success metrics together</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-cyan border-opacity-10">
                <p className="text-body-sm font-semibold text-cyan">Deliverable: Agent Blueprint</p>
                <p className="text-body-sm text-gray-400 mt-2">Full spec + success metrics. You approve.</p>
              </div>
            </div>

            {/* Phase 2: Weeks 2-4 */}
            <div className="feature-card border-t-4 border-cyan">
              <div className="text-5xl font-bold text-cyan mb-4">Weeks 2–4</div>
              <h3 className="text-h3 text-white font-bold mb-6">Deploy & Pilot</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Launch 1–2 agents live in your environment</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Full audit trails. Human approval gates.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">See measurable output by Day 5</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Weekly reviews & continuous optimization</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-cyan border-opacity-10">
                <p className="text-body-sm font-semibold text-cyan">Outcome: Live Agents</p>
                <p className="text-body-sm text-gray-400 mt-2">Working. Producing. Improving daily.</p>
              </div>
            </div>

            {/* Phase 3: Month 2+ */}
            <div className="feature-card border-t-4 border-cyan">
              <div className="text-5xl font-bold text-cyan mb-4">Month 2+</div>
              <h3 className="text-h3 text-white font-bold mb-6">Scale & Compound</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Add more agents as wins compound</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Agents learn from your data daily</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">3–4 agents working simultaneously</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="text-body-sm text-gray-300">Measurable revenue growth (3x pipeline typical)</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-cyan border-opacity-10">
                <p className="text-body-sm font-semibold text-cyan">Outcome: Compounding Growth</p>
                <p className="text-body-sm text-gray-400 mt-2">Agents multiply your output. You keep all gains.</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm">
            <h3 className="text-h3 text-white font-bold mb-8">How We Measure Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-body-sm font-semibold text-cyan mb-3">Lead Quality Metrics</p>
                <ul className="space-y-2 text-body-sm text-gray-300">
                  <li>• Leads generated (200–500+ per week)</li>
                  <li>• Sales-qualified leads (%)</li>
                  <li>• Booked meetings per agent</li>
                  <li>• Cost per qualified lead</li>
                </ul>
              </div>
              <div>
                <p className="text-body-sm font-semibold text-cyan mb-3">Revenue Impact Metrics</p>
                <ul className="space-y-2 text-body-sm text-gray-300">
                  <li>• Pipeline value influenced</li>
                  <li>• Deal velocity (cycle time)</li>
                  <li>• Win rate improvement</li>
                  <li>• Revenue per agent</li>
                </ul>
              </div>
              <div>
                <p className="text-body-sm font-semibold text-cyan mb-3">Operational Metrics</p>
                <ul className="space-y-2 text-body-sm text-gray-300">
                  <li>• Time saved per week</li>
                  <li>• Content pieces produced</li>
                  <li>• Market intelligence signals</li>
                  <li>• Agent utilization rate</li>
                </ul>
              </div>
              <div>
                <p className="text-body-sm font-semibold text-cyan mb-3">Agent Health Metrics</p>
                <ul className="space-y-2 text-body-sm text-gray-300">
                  <li>• Uptime / reliability</li>
                  <li>• Quality score (automated)</li>
                  <li>• Improvement velocity</li>
                  <li>• Model performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card Grid - Secondary Features */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🔐"
              title="Your Data Stays Put"
              description="Agents deploy into your environment. Your data never leaves. Full audit trails. Enterprise-grade isolation."
            />
            <FeatureCard
              icon="⚡"
              title="Results in Week 1"
              description="Not promises. Real output from Day 5. You see it working before you commit to scaling."
            />
            <FeatureCard
              icon="🤝"
              title="No Long-Term Lock-In"
              description="45-day pilot. 1–2 agents. Measurable outcomes. If it's working, scale. If not, walk."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        headline="Ready to See Your Custom Roadmap?"
        subheading="Book a 20-minute discovery call. We'll scope your specific situation and show you exactly what your agent team would look like."
      />
    </>
  );
}
