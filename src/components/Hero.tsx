import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
  backgroundGradient?: boolean;
}

export default function Hero({
  title,
  subtitle,
  cta,
  backgroundGradient = true,
}: HeroProps) {
  return (
    <section className={`section ${backgroundGradient ? 'bg-gradient-navy text-white' : 'bg-white text-navy'}`}>
      <div className="container-width text-center">
        <h1 className={`text-h1 mb-6 ${backgroundGradient ? 'text-white' : 'text-navy'}`}>
          {title}
        </h1>
        <p className={`text-body-lg mb-8 max-w-2xl mx-auto ${backgroundGradient ? 'text-gray-300' : 'text-charcoal'}`}>
          {subtitle}
        </p>
        {cta && (
          <Link href={cta.href} className="btn-primary inline-block">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
