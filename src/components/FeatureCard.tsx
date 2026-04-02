interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card">
      {icon && <div className="text-4xl text-cyan mb-4">{icon}</div>}
      <h3 className="text-h4 font-semibold text-navy mb-3">{title}</h3>
      <p className="text-body-md text-charcoal leading-relaxed">{description}</p>
    </div>
  );
}
