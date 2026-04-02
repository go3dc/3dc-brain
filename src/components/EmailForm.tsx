'use client';

import { useState } from 'react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID';

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export default function EmailForm() {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, isSuccess: true, error: null });
        (e.target as HTMLFormElement).reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormState({ isSubmitting: false, isSuccess: false, error: null });
        }, 5000);
      } else {
        setFormState({
          isSubmitting: false,
          isSuccess: false,
          error: 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to submit. Please check your connection.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="form-label">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          required
          className="form-input"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@company.com"
          required
          className="form-input"
        />
      </div>

      {/* Company Input */}
      <div>
        <label htmlFor="company" className="form-label">Company <span className="text-gray-400">(Optional)</span></label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your Company"
          className="form-input"
        />
      </div>

      {/* Role Select */}
      <div>
        <label htmlFor="role" className="form-label">Your Role</label>
        <select
          id="role"
          name="role"
          defaultValue=""
          required
          className="form-select"
        >
          <option value="" disabled>Select your role</option>
          <option value="investor">Real Estate Investor</option>
          <option value="coach">Coach / Consultant</option>
          <option value="service-provider">Service Provider</option>
          <option value="executive">Executive / Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="w-full btn-primary py-3 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState.isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : (
          'Get Started Today'
        )}
      </button>

      {/* Helper Text */}
      <p className="text-caption text-gray-400 text-center mt-4">
        We'll never share your info. Unsubscribe anytime.
      </p>

      {/* Success State */}
      {formState.isSuccess && (
        <div className="p-4 bg-success-green bg-opacity-10 border border-success-green rounded-md animate-in fade-in duration-300">
          <p className="text-success-green font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            Thanks! Check your email for next steps.
          </p>
        </div>
      )}

      {/* Error State */}
      {formState.error && (
        <div className="p-4 bg-error-red bg-opacity-10 border border-error-red rounded-md animate-in fade-in duration-300">
          <p className="text-error-red font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            {formState.error}
          </p>
        </div>
      )}
    </form>
  );
}
