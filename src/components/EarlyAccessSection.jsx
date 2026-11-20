import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  'Fresh Food Wholesaler',
  'Food Distributor / Logistics',
  'Producer / Commercial Farm',
  'Food Retailer / Supermarket',
  'Food Supply Organization',
  'Processor / Aggregator',
  'Other',
];

const CORE_QUESTIONS = [
  'What supply is likely to become available?',
  'What demand should we expect?',
  'Where are shortages or surpluses likely to emerge?',
  'What should we do about them?',
];

export default function EarlyAccessSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    organization: '',
    industry: '',
    country: '',
    challenges: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="early-access"
      className="py-20 lg:py-28 bg-[#0A0D12] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Context & Initial Pilot Focus */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
                Building the Future of Food Supply
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-5">
                Help us build a smarter food supply system.
              </h2>
              <p className="text-base leading-relaxed text-[#9AA8B5] mb-4">
                HarvestIQ is developing a new approach to understanding food supply, demand, and
                market conditions.
              </p>
              <p className="text-base leading-relaxed text-[#9AA8B5]">
                We are looking for producers, distributors, wholesalers, retailers, and food
                organizations interested in exploring how predictive intelligence can improve their
                operations.
              </p>
            </div>

            <div className="pt-6 border-t border-[#273440]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-3">
                Initial Pilot Focus — Fresh Food Wholesalers &amp; Distributors
              </p>
              <ul className="space-y-2.5 text-sm text-[#F4F6F7]">
                {CORE_QUESTIONS.map((q) => (
                  <li key={q} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 bg-[#D8A64A] shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7 bg-[#111821] border border-[#273440] rounded-[2px] p-6 sm:p-8">
            {submitted ? (
              <div
                className="py-12 px-4 text-center space-y-4"
                role="status"
                aria-live="polite"
              >
                <div className="w-10 h-10 mx-auto flex items-center justify-center border border-[#72B89A] bg-[#0A0D12] text-[#72B89A] rounded-[2px]">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#F4F6F7]">
                  Thank you for your interest in HarvestIQ.
                </h3>
                <p className="text-sm sm:text-base text-[#9AA8B5] max-w-md mx-auto leading-relaxed">
                  We will reach out as we begin working with early partners.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        fullName: '',
                        email: '',
                        organization: '',
                        industry: '',
                        country: '',
                        challenges: '',
                      });
                    }}
                    className="font-mono text-xs text-[#D8A64A] hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-4 border-b border-[#273440]">
                  <h3 className="font-display text-xl font-semibold text-[#F4F6F7]">
                    Join the Early Access Program
                  </h3>
                  <p className="text-xs text-[#9AA8B5] mt-1">
                    Share your operational context to explore a pilot partnership.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1.5"
                    >
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={handleChange}
                      placeholder="Adaeze Okafor"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0D12] border border-[#273440] text-[#F4F6F7] placeholder:text-[#9AA8B5]/45 rounded-[2px] focus:outline-none focus:border-[#D8A64A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1.5"
                    >
                      Work email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0D12] border border-[#273440] text-[#F4F6F7] placeholder:text-[#9AA8B5]/45 rounded-[2px] focus:outline-none focus:border-[#D8A64A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="organization"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1.5"
                    >
                      Organization *
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={formState.organization}
                      onChange={handleChange}
                      placeholder="Company or cooperative name"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0D12] border border-[#273440] text-[#F4F6F7] placeholder:text-[#9AA8B5]/45 rounded-[2px] focus:outline-none focus:border-[#D8A64A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1.5"
                    >
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formState.industry}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0A0D12] border border-[#273440] text-[#F4F6F7] rounded-[2px] focus:outline-none focus:border-[#D8A64A]"
                    >
                      <option value="" disabled>
                        Select industry
                      </option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1.5"
                  >
                    Country *
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formState.country}
                    onChange={handleChange}
                    placeholder="e.g., Nigeria, Kenya, United Kingdom"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0A0D12] border border-[#273440] text-[#F4F6F7] placeholder:text-[#9AA8B5]/45 rounded-[2px] focus:outline-none focus:border-[#D8A64A]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="challenges"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1.5"
                  >
                    What challenges are you currently facing?
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={3}
                    value={formState.challenges}
                    onChange={handleChange}
                    placeholder="Tell us about your key commodities, sourcing regions, or forecasting bottlenecks..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0A0D12] border border-[#273440] text-[#F4F6F7] placeholder:text-[#9AA8B5]/45 rounded-[2px] focus:outline-none focus:border-[#D8A64A] resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-[#D8A64A] text-[#0A0D12] hover:bg-[#e2b45d] transition-colors rounded-[2px] cursor-pointer"
                  >
                    Request Access
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
