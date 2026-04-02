import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    label: string;
    href: string;
  };
  backgroundGradient?: string;
}

export default function Hero({
  title,
  subtitle,
  cta,
  backgroundGradient = 'gradient-navy-charcoal',
}: HeroProps) {
  return (
    <section className={`relative min-h-screen md:min-h-96 flex items-center justify-center bg-${backgroundGradient} py-20 md:py-32 overflow-hidden`}>
      {/* Subtle background pattern overlay (optional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-lg px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <h1 className="text-h1 md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 md:mb-8 leading-tight">
          {title}
        </h1>
        
        <p className="text-body-lg md:text-xl text-gray-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        
        {cta && (
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule Demo
            </Link>
          </div>
        )}

        {/* Optional trust indicator */}
        <p className="text-caption text-gray-400 mt-12 md:mt-16">
          Trusted by 200+ AI teams | 45-day deployment | No long-term commitment
        </p>
      </div>
    </section>
  );
}
