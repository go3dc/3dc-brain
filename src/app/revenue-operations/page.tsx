import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Revenue Operations | 3DC Brain',
  description: 'Deploy AI Lead Agent to generate 200–500 qualified leads per week. 40–60% sales-qualified rate. Full audit trails. Your data stays put.',
};

export default function RevenueOperationsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="From Chaos to 200+ Leads/Week"
        subtitle="Your Lead Agent identifies prospects across 50+ data sources, scores them by deal fit, and prepares them for your team. No more manual sourcing."
        cta={{ label: 'Get Your Lead Agent Blueprint', href: '/contact' }}
      />

      {/* The Problem Section */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              The Problem
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Most lead sources are manual, scattered, and stale by the time your team sees them. You're missing opportunities, paying too much per lead, and burning time on qualification work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Scattered Sources</h3>
              <p className="text-body-sm text-gray-300">
                Leads are scattered across MLS, networking, cold outreach, referrals, and old email lists. No unified system.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Manual Qualification</h3>
              <p className="text-body-sm text-gray-300">
                Your team spends hours qualifying bad leads, following up on stale prospects, and hunting for fit.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Pipeline Gaps</h3>
              <p className="text-body-sm text-gray-300">
                When deals close, you scramble to fill the void. Lead flow is unpredictable and sporadic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Our Solution: Lead Agent
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              One agent handles lead sourcing, scoring, and qualification automatically. You get 200–500 hot prospects per week, ready for outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {/* Step 1 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">1</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Data Aggregation</h3>
              <p className="text-body-sm text-gray-300">
                We pull from your CRM, industry databases, referral networks, MLS feeds, funding announcements, and more. 50+ sources unified.
              </p>
            </div>

            {/* Step 2 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">2</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Scoring & Qualification</h3>
              <p className="text-body-sm text-gray-300">
                AI ranks prospects by intent, deal size, geography, and your custom criteria. 40–60% sales-qualified rate.
              </p>
            </div>

            {/* Step 3 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">3</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Handoff & Tracking</h3>
              <p className="text-body-sm text-gray-300">
                Formatted briefs ready for your team to call/email. Full tracking. Weekly pipeline reports.
              </p>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm">
            <h3 className="text-h3 text-white font-bold mb-8">Real Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-cyan">200–500</p>
                <p className="text-body-sm text-gray-400 mt-2">Leads per week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">40–60%</p>
                <p className="text-body-sm text-gray-400 mt-2">Sales-qualified rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">20–30</p>
                <p className="text-body-sm text-gray-400 mt-2">Booked meetings/month</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">70%</p>
                <p className="text-body-sm text-gray-400 mt-2">Reduction in qual time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 text-white font-bold mb-8">Security by Default</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Full Audit Trail</p>
                  <p className="text-body-sm text-gray-400 mt-1">Every action logged. Tamper-evident records.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Your Data, Your Environment</p>
                  <p className="text-body-sm text-gray-400 mt-1">Agents deploy into your infrastructure. Nothing leaves.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Human Approval Gates</p>
                  <p className="text-body-sm text-gray-400 mt-1">You approve high-risk actions. Full control always.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-success-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Enterprise-Grade Isolation</p>
                  <p className="text-body-sm text-gray-400 mt-1">Kernel-level separation. No data bleed. No cross-client access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              What You Can Do With Lead Agent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">For Real Estate Investors</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Identify off-market deals in your geography and strategy. 300–500 leads/month. Score by equity, cap rate, and your criteria. Never miss an opportunity again.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: 3x deal flow without hiring.</p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">For Coaches</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Find high-intent prospects in your niche. 100–200 leads/month. Score by engagement signals and ideal client profile fit. Consistent student pipeline.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: Predictable student acquisition.</p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">For Service Providers</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Target high-ticket prospects in your niche. 50–100 leads/month. Score by budget, authority, and timeline. Land bigger deals faster.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: 2–3 new clients/month at 3x deal size.</p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">For Teams</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Add Lead Agent to your existing CRM and outreach stack. No friction. Seamless integration. Your team spends time closing, not hunting.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: 50% more deals with same headcount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        headline="Ready to Automate Your Lead Machine?"
        subheading="Schedule a 20-minute discovery call. We'll design your custom Lead Agent and show you the roadmap."
      />
    </>
  );
}
