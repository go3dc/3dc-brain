import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';
import TestimonialBlock from '@/components/TestimonialBlock';

export const metadata: Metadata = {
  title: '3DC Brain | AI Revenue Operations for Real Estate Professionals',
  description: 'Deploy AI agents for lead generation, competitive research, and content automation in 30 days. No long-term commitment. Real estate investors, coaches, and service providers see 3x pipeline growth.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Your AI Revenue Agent, Deployed in 45 Days"
        subtitle="Real estate investors, coaches, and service providers are using AI agents to automate lead generation, competitive intelligence, and content at scale. We build and manage yours."
        cta={{ label: 'Get Started', href: '/contact' }}
      />

      {/* The Real Problem Section */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              The Real Problem
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Your team spends 50–70% of their time on work AI agents can do better, faster, and 24/7. You need a revenue operations partner that actually works — not another chatbot plugin.
            </p>
          </div>

          {/* Pain Points Grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            <FeatureCard
              icon="📊"
              title="Inconsistent Pipeline"
              description="Your lead pipeline is scattered. When deals close, you scramble to fill the void."
            />
            <FeatureCard
              icon="🔍"
              title="Intelligence Gaps"
              description="Competitive intelligence is reactive. You're always 2–4 weeks behind the market."
            />
            <FeatureCard
              icon="✍️"
              title="Content Bottleneck"
              description="Content creation is your growth lever—and your time suck. Everything is slow."
            />
          </div>

          {/* Solution Teaser */}
          <div className="bg-charcoal rounded-lg p-8 md:p-12 border border-cyan border-opacity-15">
            <h3 className="text-h3 md:text-4xl text-white font-bold mb-6">
              What 3DC Brain Does
            </h3>
            <p className="text-body-lg md:text-xl text-gray-300 mb-8">
              We deploy AI agents that sit inside your revenue operations flow. Within 45 days, you'll have working agents generating measurable output. Within 90 days, you'll see 3x pipeline growth.
            </p>
            <Link href="/how-it-works" className="btn-secondary inline-block">
              See the Full Blueprint
            </Link>
          </div>
        </div>
      </section>

      {/* What We Deploy Section */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Your Agent Team
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Four specialized AI agents, deployed into your environment, all working for you 24/7.
            </p>
          </div>

          {/* Agents Grid (2x2 on desktop, 1 column on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon="🎯"
              title="Revenue Operations Agent"
              description="Identifies and scores leads across real estate markets, investor networks, and referral sources. 200–500 leads per week. Reports weekly on pipeline health and forecast."
              link={{ label: 'Learn more', href: '/revenue-operations' }}
            />
            <FeatureCard
              icon="📡"
              title="Competitive Research Agent"
              description="Scans competitor moves, market shifts, regulatory changes, and deal flow. Scores 150–300 prospects per week. Flags high-intent signals. Weekly strategic briefs."
              link={{ label: 'Learn more', href: '/competitive-research' }}
            />
            <FeatureCard
              icon="📸"
              title="Content Engine"
              description="Produces daily email sequences, market briefs, social content, and sales collateral. All data-backed. A/B tests automatically. Expert-panel scores before publishing."
              link={{ label: 'Learn more', href: '/content-engine' }}
            />
            <FeatureCard
              icon="⏱️"
              title="Pipeline Management Agent"
              description="Monitors every active deal. No prospect goes 48 hours without a touchpoint. Surfaces stalled deals. Automatic re-engagement workflows. Weekly deal health report."
              link={{ label: 'Learn more', href: '/how-it-works' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              From Strategy to Scaling: 45 Days
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Three phases. One outcome: measurable revenue growth.
            </p>
          </div>

          {/* Three-Phase Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">1</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Strategy (Week 1)</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                We audit your operations, map pain points, and design your agent team. You tell us your numbers—deal size, sales cycle, lead costs, revenue goals.
              </p>
              <p className="text-body-sm font-semibold text-cyan">Deliverable: Agent blueprint + success metrics</p>
            </div>

            {/* Phase 2 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">2</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Deploy (Weeks 2–4)</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                We launch 1–2 agents live into your production environment. Full audit trails. Human approval gates. Measurable results within the first week.
              </p>
              <p className="text-body-sm font-semibold text-cyan">Outcome: Live agents. Real output.</p>
            </div>

            {/* Phase 3 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">3</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Scale (Month 2+)</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Add more agents. Expand workflows. Let the experiment engine promote winners automatically.
              </p>
              <p className="text-body-sm font-semibold text-cyan">3–4 agents working. Pipeline grows.</p>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mt-20 pt-20 border-t border-cyan border-opacity-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
                Why You Should Care
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Real Numbers */}
              <div className="bg-charcoal rounded-lg p-8 md:p-12 border border-cyan border-opacity-15">
                <h3 className="text-h3 text-cyan font-bold mb-6">Real Numbers. Not Promises.</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-cyan font-bold text-2xl">→</span>
                    <div>
                      <p className="text-white font-bold">3x</p>
                      <p className="text-body-sm text-gray-300">Median pipeline growth in 90 days</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan font-bold text-2xl">→</span>
                    <div>
                      <p className="text-white font-bold">200–500</p>
                      <p className="text-body-sm text-gray-300">Qualified leads per week per agent</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan font-bold text-2xl">→</span>
                    <div>
                      <p className="text-white font-bold">45 Days</p>
                      <p className="text-body-sm text-gray-300">From kickoff to live agents</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan font-bold text-2xl">→</span>
                    <div>
                      <p className="text-white font-bold">24/7</p>
                      <p className="text-body-sm text-gray-300">Always working (no PTO, no gaps)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust & Security */}
              <div className="bg-charcoal rounded-lg p-8 md:p-12 border border-cyan border-opacity-15">
                <h3 className="text-h3 text-cyan font-bold mb-6">Security & Compliance by Default</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-body-sm text-gray-300"><strong className="text-white">Enterprise-grade</strong> agent isolation (kernel-level)</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-body-sm text-gray-300"><strong className="text-white">Full audit trails</strong> (tamper-evident logs)</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-body-sm text-gray-300"><strong className="text-white">Your data</strong> stays in your environment</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-body-sm text-gray-300"><strong className="text-white">SOC 2</strong> ready architecture</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-body-sm text-gray-300"><strong className="text-white">GDPR/CCPA</strong> compliant</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Real Results, Real Companies
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              See what our clients are achieving with 3DC Brain.
            </p>
          </div>

          {/* Testimonials Grid (2 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialBlock
              quote="We deployed a lead agent and scored 200+ qualified prospects in the first month. Our sales team went from sourcing to closing, not hunting."
              author="Sarah Chen"
              title="CEO, Real Estate Investment Firm"
              company="$2M+ ARR"
            />
            <TestimonialBlock
              quote="We knew what competitors were doing 2 weeks after they moved. Gave us first-mover advantage on 3 major deals."
              author="Marcus Johnson"
              title="Founder, Coaching Platform"
              company="$1M+ ARR"
            />
            <TestimonialBlock
              quote="30 days of social content, newsletters, and email sequences—created in 4 hours total. Our team finally had time to actually coach."
              author="The Collective"
              title="Service Provider Network"
              company="$500K+ ARR"
            />
            <TestimonialBlock
              quote="3DC Brain didn't just automate our pipeline. It fundamentally changed how we think about lead generation. Now we have data-backed decisions, not guesses."
              author="James Rivera"
              title="Operations Director, Investor Group"
              company="$5M+ ARR"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTA
        headline="Let's Talk About Your Numbers"
        subheading="45-day pilot. No long-term commitment. We'll design your agent team, show you the roadmap, and deploy live agents within a month."
      />
    </>
  );
}
