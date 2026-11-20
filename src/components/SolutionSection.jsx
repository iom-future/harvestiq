import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    name: 'Connect',
    description:
      'Bring together information from producers, suppliers, market activity, inventory, logistics, and external data sources.',
  },
  {
    name: 'Understand',
    description:
      'AI analyzes patterns across supply, demand, prices, seasonality, and operational conditions.',
  },
  {
    name: 'Predict',
    description:
      'Identify emerging shortages, potential surpluses, demand changes, and supply risks.',
  },
  {
    name: 'Act',
    description:
      'Use the insights to improve purchasing, distribution, inventory planning, and operational decisions.',
  },
];

export default function SolutionSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.solution-stage', {
          y: 22,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 76%',
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0A0D12] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
            A Better Way to Plan
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-5">
            From fragmented information to forward-looking decisions.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#9AA8B5]">
            HarvestIQ brings together supply, demand, market, and operational data to help
            businesses understand what is happening across their food supply chain. The platform
            transforms scattered information into a clearer picture of what is available, what is
            needed, and what may happen next.
          </p>
        </div>

        {/* Horizontal Intelligence Flow */}
        <div className="relative">
          {/* Connecting flow line on desktop */}
          <div
            className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-[#273440]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STAGES.map((stage, index) => (
              <div key={stage.name} className="solution-stage relative flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative z-10 flex items-center gap-3 bg-[#0A0D12] pr-4">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === STAGES.length - 1 ? 'bg-[#72B89A]' : 'bg-[#D8A64A]'
                      }`}
                    />
                    <h3 className="font-display text-xl font-semibold text-[#F4F6F7]">
                      {stage.name}
                    </h3>
                  </div>
                  {index < STAGES.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block relative z-10 w-4 h-4 text-[#9AA8B5] bg-[#0A0D12]"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <p className="text-sm leading-relaxed text-[#9AA8B5] border-l border-[#273440] pl-4">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
