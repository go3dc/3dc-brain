interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

export default function TestimonialBlock({ quote, author, title }: TestimonialProps) {
  return (
    <div className="card border-l-4 border-cyan">
      <blockquote className="text-body-md text-charcoal italic mb-4">
        &quot;{quote}&quot;
      </blockquote>
      <footer className="text-sm">
        <p className="font-semibold text-navy">{author}</p>
        <p className="text-gray-600">{title}</p>
      </footer>
    </div>
  );
}
