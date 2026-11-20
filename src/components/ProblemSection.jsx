import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    title: 'Unpredictable Demand',
    description:
      'Businesses struggle to determine how much food customers will need, leading to unnecessary inventory or empty shelves.',
    visual: (
      <svg viewBox="0 0 180 48" className="w-full h-12" aria-hidden="true">
        <line x1="0" y1="36" x2="180" y2="36" stroke="#273440" strokeWidth="1" />
        <line x1="0" y1="18" x2="180" y2="18" stroke="#273440" strokeWidth="1" strokeDasharray="3 4" />
        <polyline
          fill="none"
          stroke="#9AA8B5"
          strokeWidth="1.5"
          points="0,30 25,26 50,34 75,14 100,32 125,10 150,28 180,19"
        />
        <circle cx="75" cy="14" r="2.5" fill="#D8A64A" />
        <circle cx="125" cy="10" r="2.5" fill="#D8A64A" />
      </svg>
    ),
  },
  {
    title: 'Supply Uncertainty',
    description:
      'Production, availability, and delivery timelines can change rapidly, making sourcing and planning difficult.',
    visual: (
      <svg viewBox="0 0 180 48" className="w-full h-12" aria-hidden="true">
        <line x1="0" y1="24" x2="180" y2="24" stroke="#273440" strokeWidth="1" />
        <path
          d="M0 26 L55 24 L95 16 L180 8 L180 40 L95 32 L55 24 Z"
          fill="#D8A64A"
          fillOpacity="0.12"
        />
        <polyline
          fill="none"
          stroke="#F4F6F7"
          strokeWidth="1.5"
          points="0,26 55,24 95,22"
        />
        <polyline
          fill="none"
          stroke="#D8A64A"
          strokeWidth="1.4"
          strokeDasharray="3 3"
          points="95,22 140,14 180,12"
        />
        <polyline
          fill="none"
          stroke="#D8A64A"
          strokeWidth="1.4"
          strokeOpacity="0.55"
          strokeDasharray="3 3"
          points="95,22 140,32 180,36"
        />
      </svg>
    ),
  },
  {
    title: 'Price Volatility',
    description:
      'Market prices change based on supply, demand, seasonality, weather, and transportation conditions.',
    visual: (
      <svg viewBox="0 0 180 48" className="w-full h-12" aria-hidden="true">
        {[14, 34, 54, 74, 94, 114, 134, 154].map((x, idx) => {
          const bars = [
            { y1: 18, y2: 34, h: 10, top: 21, accent: false },
            { y1: 12, y2: 30, h: 12, top: 15, accent: true },
            { y1: 20, y2: 40, h: 11, top: 24, accent: false },
            { y1: 8, y2: 28, h: 13, top: 11, accent: true },
            { y1: 16, y2: 38, h: 14, top: 20, accent: false },
            { y1: 10, y2: 34, h: 16, top: 14, accent: true },
            { y1: 22, y2: 42, h: 10, top: 27, accent: false },
            { y1: 12, y2: 30, h: 11, top: 16, accent: true },
          ][idx];
          return (
            <g key={x}>
              <line x1={x} y1={bars.y1} x2={x} y2={bars.y2} stroke="#273440" strokeWidth="1.2" />
              <rect
                x={x - 3.5}
                y={bars.top}
                width="7"
                height={bars.h}
                fill={bars.accent ? '#D8A64A' : '#17212B'}
                stroke={bars.accent ? '#D8A64A' : '#9AA8B5'}
                strokeWidth="1"
              />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    title: 'Food Loss',
    description:
      'When supply exceeds demand or transportation is delayed, perishable food can lose value or become unusable.',
    visual: (
      <svg viewBox="0 0 180 48" className="w-full h-12" aria-hidden="true">
        <rect x="0" y="14" width="180" height="8" fill="#17212B" stroke="#273440" strokeWidth="1" />
        <rect x="0" y="14" width="122" height="8" fill="#72B89A" fillOpacity="0.6" />
        <rect x="122" y="14" width="58" height="8" fill="#D8A64A" fillOpacity="0.45" />
        <line x1="122" y1="8" x2="122" y2="40" stroke="#D8A64A" strokeWidth="1" strokeDasharray="2 2" />
        <text x="0" y="38" fill="#9AA8B5" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          DEMAND ABSORBED
        </text>
        <text x="128" y="38" fill="#D8A64A" fontSize="9" fontFamily="IBM Plex Mono, monospace">
          EXCESS
        </text>
      </svg>
    ),
  },
];

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.problem-card', {
          y: 20,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#111821] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
              The Food Supply Challenge
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7]">
              Food supply chains are still making decisions with incomplete information.
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-4 text-base leading-relaxed text-[#9AA8B5] lg:pt-8">
            <p>
              Food businesses operate in a constantly changing environment. Production varies.
              Weather changes. Transportation delays occur. Demand shifts. Prices fluctuate.
            </p>
            <p>
              Yet many decisions are still made using historical reports, fragmented communication,
              and outdated information. By the time a shortage or surplus becomes obvious, the
              opportunity to prevent it may already be gone.
            </p>
          </div>
        </div>

        {/* Four compact editorial cards — hairline grid, no number badges or pill clutter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#273440]">
          {PROBLEMS.map((item) => (
            <article
              key={item.title}
              className="problem-card p-6 bg-[#0A0D12]/60 border-r border-b border-[#273440] flex flex-col justify-between gap-6 hover:bg-[#17212B]/45 transition-colors duration-200"
            >
              <div className="opacity-90">{item.visual}</div>
              <div>
                <h3 className="font-display text-lg font-medium text-[#F4F6F7] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9AA8B5]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
