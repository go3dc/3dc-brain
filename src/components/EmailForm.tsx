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
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
        />
      </div>

      <div>
        <input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
        />
      </div>

      <div>
        <select
          name="role"
          defaultValue=""
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
        >
          <option value="">Select Your Role</option>
          <option value="investor">Real Estate Investor</option>
          <option value="coach">Coach/Consultant</option>
          <option value="service-provider">Service Provider</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState.isSubmitting ? 'Submitting...' : 'Join Early Access'}
      </button>

      {formState.isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ✓ Thanks for signing up! Check your email for next steps.
          </p>
        </div>
      )}

      {formState.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">{formState.error}</p>
        </div>
      )}
    </form>
  );
}
