interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

export default function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <article className="feature-card h-full flex flex-col">
      {/* Icon */}
      {icon && (
        <div className="feature-icon mb-6">
          {typeof icon === 'string' ? (
            <span className="text-2xl">{icon}</span>
          ) : (
            icon
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="text-h4 font-bold text-white mb-3 flex-shrink-0">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-sm text-gray-300 mb-6 flex-grow line-clamp-3">
        {description}
      </p>

      {/* Optional Link */}
      {link && (
        <a 
          href={link.href}
          className="text-cyan font-semibold text-body-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
        >
          {link.label}
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      )}
    </article>
  );
}
