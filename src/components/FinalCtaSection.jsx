import { ArrowRight } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0D12] border-b border-[#273440] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-[#F4F6F7]">
          A better food system starts with better information.
        </h2>
        <p className="text-base sm:text-lg text-[#9AA8B5] max-w-2xl mx-auto leading-relaxed">
          See how predictive intelligence can help your business understand supply, anticipate
          demand, and make smarter decisions.
        </p>
        <div className="pt-3">
          <a
            href="#early-access"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-[#D8A64A] text-[#0A0D12] hover:bg-[#e2b45d] transition-colors rounded-[2px]"
          >
            Join HarvestIQ Early Access
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
