import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  { label: 'Data Sources', sub: 'Producers, markets, logistics' },
  { label: 'Signal Processing', sub: 'Normalization & anomaly checks' },
  { label: 'Forecasting Models', sub: 'Supply, demand & risk horizons' },
  { label: 'Supply Intelligence', sub: 'Regional balance & pricing' },
  { label: 'Business Decisions', sub: 'Sourcing, routing & inventory' },
];

const LAYERS = [
  {
    title: 'Historical Intelligence',
    description:
      'Understand previous production, purchasing, consumption, and market patterns.',
  },
  {
    title: 'Real-Time Signals',
    description:
      'Incorporate available changes in weather, logistics, market conditions, and operational activity.',
  },
  {
    title: 'Predictive Models',
    description:
      'Estimate future supply, demand, availability, and potential risk.',
  },
  {
    title: 'Decision Intelligence',
    description:
      'Translate predictions into practical recommendations for purchasing, distribution, and planning.',
  },
];

export default function IntelligenceEngineSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.engine-layer', {
          y: 18,
          opacity: 0,
          duration: 0.65,
          stagger: 0.09,
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
      id="intelligence"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0A0D12] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
              Predictive Intelligence
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7]">
              A supply chain that learns to see what comes next.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8 space-y-4 text-base leading-relaxed text-[#9AA8B5]">
            <p>
              HarvestIQ continuously analyzes available data to identify patterns that traditional
              reporting systems often miss.
            </p>
            <p>
              By combining historical trends with changing market and operational signals, the
              platform helps businesses move from reactive planning toward proactive
              decision-making.
            </p>
          </div>
        </div>

        {/* Architectural Pipeline Diagram */}
        <div className="mb-12 bg-[#111821] border border-[#273440] rounded-[2px] p-6 sm:p-8 overflow-x-auto">
          <div className="min-w-[740px]">
            <svg
              viewBox="0 0 920 118"
              className="w-full h-auto"
              role="img"
              aria-label="Intelligence pipeline from Data Sources through Signal Processing, Forecasting Models, Supply Intelligence, to Business Decisions"
            >
              {/* Connecting baseline + animated signal flow */}
              <line x1="90" y1="36" x2="830" y2="36" stroke="#273440" strokeWidth="1.5" />
              <line
                x1="90"
                y1="36"
                x2="830"
                y2="36"
                stroke="#D8A64A"
                strokeWidth="1.6"
                className="animate-flow-line"
              />

              {PIPELINE_STEPS.map((step, i) => {
                const cx = 92 + i * 184;
                const isLast = i === PIPELINE_STEPS.length - 1;
                return (
                  <g key={step.label}>
                    <rect
                      x={cx - 78}
                      y="16"
                      width="156"
                      height="40"
                      rx="2"
                      fill="#0A0D12"
                      stroke={isLast ? '#72B89A' : i === 2 ? '#D8A64A' : '#273440'}
                      strokeWidth="1.25"
                    />
                    <circle
                      cx={cx - 64}
                      cy="36"
                      r="3"
                      fill={isLast ? '#72B89A' : '#D8A64A'}
                    />
                    <text
                      x={cx - 53}
                      y="40"
                      fill="#F4F6F7"
                      fontSize="12"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="500"
                    >
                      {step.label}
                    </text>
                    <text
                      x={cx}
                      y="82"
                      textAnchor="middle"
                      fill="#9AA8B5"
                      fontSize="11"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {step.sub}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Four Intelligence Layers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#273440]">
          {LAYERS.map((layer) => (
            <div
              key={layer.title}
              className="engine-layer p-6 bg-[#111821]/50 border-r border-b border-[#273440]"
            >
              <h3 className="font-display text-lg font-medium text-[#F4F6F7] mb-2.5">
                {layer.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#9AA8B5]">{layer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
