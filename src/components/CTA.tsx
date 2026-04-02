import EmailForm from './EmailForm';

interface CTAProps {
  headline: string;
  subheading?: string;
}

export default function CTA({ headline, subheading }: CTAProps) {
  return (
    <section className="section bg-gradient-blue-cyan py-20 md:py-32">
      <div className="container-lg px-6 md:px-12 text-center">
        {/* Headline */}
        <h2 className="text-h2 md:text-5xl text-white font-bold mb-4 md:mb-6">
          {headline}
        </h2>

        {/* Subheading */}
        {subheading && (
          <p className="text-body-lg md:text-xl text-white text-opacity-90 mb-12 md:mb-16 max-w-3xl mx-auto">
            {subheading}
          </p>
        )}

        {/* Form Container */}
        <div className="bg-charcoal/40 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white border-opacity-10 max-w-xl mx-auto">
          <EmailForm />
        </div>

        {/* Trust Indicator */}
        <p className="text-caption text-white text-opacity-70 mt-8 md:mt-12">
          45-day pilot • No long-term commitment • See results in Week 1
        </p>
      </div>
    </section>
  );
}
