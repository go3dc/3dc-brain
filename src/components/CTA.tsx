import EmailForm from './EmailForm';

interface CTAProps {
  headline: string;
  subheading?: string;
}

export default function CTA({ headline, subheading }: CTAProps) {
  return (
    <section className="section bg-gray-50">
      <div className="container-width text-center">
        <h2 className="text-h2 text-navy mb-4">{headline}</h2>
        {subheading && <p className="text-body-lg text-charcoal mb-8 max-w-2xl mx-auto">{subheading}</p>}
        <EmailForm />
      </div>
    </section>
  );
}
