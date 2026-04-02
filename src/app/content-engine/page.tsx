import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Content Engine | 3DC Brain',
  description: '30 days of content in 4 hours. Email sequences, market briefs, social posts, and sales collateral—all data-backed, A/B-testable, automated.',
};

export default function ContentEnginePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="30 Days of Content in 4 Hours"
        subtitle="Our Content Agent produces email sequences, market briefs, social content, and sales collateral. All data-backed. A/B-testable. Zero writer's block."
        cta={{ label: 'See Content Samples', href: '/contact' }}
      />

      {/* The Problem */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              The Problem
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              Content creation is your growth lever—and your time suck. Email sequences, social posts, market briefs, sales collateral—all manually written, all slow, all behind schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Time Killer</h3>
              <p className="text-body-sm text-gray-300">
                Content creation takes weeks. Editing, revisions, approvals. Your team could close deals instead.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Quality Inconsistency</h3>
              <p className="text-body-sm text-gray-300">
                Some content hits. Some flops. No A/B testing. No data-backed decisions. Lots of guesswork.
              </p>
            </div>
            <div className="feature-card">
              <h3 className="text-h4 font-bold text-white mb-4">Bottleneck</h3>
              <p className="text-body-sm text-gray-300">
                You're the only one who can write. Doesn't scale. Founder bottleneck = growth ceiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold mb-6">
              Our Solution: Content Engine
            </h2>
            <p className="text-body-lg md:text-xl text-gray-300">
              One agent produces daily/weekly content across all channels. All data-backed (pulls from your industry, deals, market trends). Expert-panel scored before publishing. A/B-testable templates built in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {/* Step 1 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">1</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Brief Creation</h3>
              <p className="text-body-sm text-gray-300">
                You define topics, angles, and audience. Agent generates variations automatically. No blank page syndrome.
              </p>
            </div>

            {/* Step 2 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">2</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Content Generation</h3>
              <p className="text-body-sm text-gray-300">
                AI writes across email, social, articles, case studies. All pulling from your data and market research.
              </p>
            </div>

            {/* Step 3 */}
            <div className="feature-card">
              <div className="bg-cyan bg-opacity-10 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-0">
                <span className="text-cyan font-bold text-xl">3</span>
              </div>
              <h3 className="text-h4 font-bold text-white mb-4">Review & Publish</h3>
              <p className="text-body-sm text-gray-300">
                Human review (you control everything). Auto-post or queue for approval. Full audit trail.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm">
            <h3 className="text-h3 text-white font-bold mb-8">Real Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-cyan">20–30</p>
                <p className="text-body-sm text-gray-400 mt-2">Content pieces/week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">3–5x</p>
                <p className="text-body-sm text-gray-400 mt-2">Engagement vs manual</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">50%</p>
                <p className="text-body-sm text-gray-400 mt-2">Less editing needed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cyan">4 hours</p>
                <p className="text-body-sm text-gray-400 mt-2">To create 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              Content We Produce
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">📧 Email Sequences</h3>
              <ul className="space-y-2 text-body-sm text-gray-300">
                <li>• Welcome series (5-part, personalized)</li>
                <li>• Nurture sequences (prospect stage-based)</li>
                <li>• Win-back campaigns (re-engagement)</li>
                <li>• Product launch announcements</li>
                <li>• Event invitations & follow-ups</li>
              </ul>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">📱 Social Content</h3>
              <ul className="space-y-2 text-body-sm text-gray-300">
                <li>• LinkedIn articles & updates (thought leadership)</li>
                <li>• Twitter/X threads (hot takes, insights)</li>
                <li>• Instagram stories & Reels (visual content)</li>
                <li>• TikTok videos (if relevant)</li>
                <li>• Reddit posts (community engagement)</li>
              </ul>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">📊 Market Briefs</h3>
              <ul className="space-y-2 text-body-sm text-gray-300">
                <li>• Weekly market research reports</li>
                <li>• Competitor analysis briefs</li>
                <li>• Industry trend analysis</li>
                <li>• Deal flow summaries</li>
                <li>• Investment thesis documents</li>
              </ul>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">📄 Sales Collateral</h3>
              <ul className="space-y-2 text-body-sm text-gray-300">
                <li>• Case studies (data-backed)</li>
                <li>• One-pagers (solution-focused)</li>
                <li>• Pitch decks (template-based)</li>
                <li>• ROI calculators</li>
                <li>• Testimonial graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-gradient-navy-charcoal">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              Quality by Design
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-charcoal/60 rounded-lg p-8 md:p-12 border border-cyan border-opacity-15 backdrop-blur-sm">
              <h3 className="text-h3 text-white font-bold mb-8">Our Quality Gates</h3>

              <div className="space-y-6">
                {/* Gate 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan bg-opacity-10">
                      <svg className="h-6 w-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-h4 font-bold text-white">Data Backing</h4>
                    <p className="text-body-sm text-gray-300 mt-2">
                      Every claim sourced. Every statistic cited. No fluff. Content agent pulls from verified sources and your actual metrics.
                    </p>
                  </div>
                </div>

                {/* Gate 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan bg-opacity-10">
                      <svg className="h-6 w-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-h4 font-bold text-white">Expert Scoring</h4>
                    <p className="text-body-sm text-gray-300 mt-2">
                      Content scored by tone, clarity, relevance. Expert panel rates before publishing. Brand guidelines baked in.
                    </p>
                  </div>
                </div>

                {/* Gate 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan bg-opacity-10">
                      <svg className="h-6 w-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-h4 font-bold text-white">A/B Testing Built-In</h4>
                    <p className="text-body-sm text-gray-300 mt-2">
                      Subject lines, headlines, CTAs—all variants generated. You choose winners. Data drives next content.
                    </p>
                  </div>
                </div>

                {/* Gate 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan bg-opacity-10">
                      <svg className="h-6 w-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-h4 font-bold text-white">You Control Everything</h4>
                    <p className="text-body-sm text-gray-300 mt-2">
                      Every piece goes through human review before publishing. Full audit trail. Revisions tracked. You're always in control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-navy">
        <div className="container-lg px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-h2 md:text-5xl text-white font-bold">
              How Teams Are Using It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Coaches</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                30 days of LinkedIn articles, email sequences, and client success stories. Auto-produced. You focus on teaching.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: 3x student inquiries from content.</p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Real Estate Investors</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Weekly market briefs. Competitor analysis. Deal analysis. All delivered to your network automatically.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: You become the market expert. Deals come to you.</p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Service Providers</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Case studies showing your expertise. Email sequences nurturing prospects. Social content building authority.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: 2–3x bigger deals. Better qualification.</p>
            </div>

            <div className="bg-charcoal rounded-lg p-8 border border-cyan border-opacity-15">
              <h3 className="text-h4 font-bold text-cyan mb-4">Sales Teams</h3>
              <p className="text-body-sm text-gray-300 mb-6">
                Daily LinkedIn posts. Weekly thought leadership articles. Monthly case studies. All supporting your outreach.
              </p>
              <p className="text-body-sm font-semibold text-white">Result: Faster close cycles. Better proof points.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        headline="Automate Your Content Pipeline"
        subheading="Schedule a call and we'll show you what 30 days of content would look like for your business."
      />
    </>
  );
}
