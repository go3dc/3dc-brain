interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
}

export default function TestimonialBlock({ quote, author, title, company }: TestimonialProps) {
  return (
    <div className="testimonial-block">
      {/* Quote Icon */}
      <svg className="w-8 h-8 text-cyan opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.45-9-7-9s-6 7.75-6 9c0 1.52.011 2.85.038 4H1c0 1-1 4-1 6s.895 6 3 6zm14 0c3 0 7-1 7-8V5c0-1.25-4.45-9-7-9s-6 7.75-6 9c0 1.52.011 2.85.038 4H15c0 1-1 4-1 6s.895 6 3 6z" />
      </svg>

      {/* Quote Text */}
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <footer>
        <p className="text-body-sm font-semibold text-white">
          {author}
        </p>
        <p className="text-body-sm text-gray-400">
          {title}
        </p>
        {company && (
          <p className="text-caption text-gray-500 mt-2">
            {company}
          </p>
        )}
      </footer>
    </div>
  );
}
