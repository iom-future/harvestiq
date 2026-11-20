import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_SUPPLY_OUTLOOK, HERO_REGIONAL_DEMAND } from '../data/supplyData';

const HERO_NODES = [
  { id: 'prod-1', label: 'Kano Basin', role: 'Production', x: 390, y: 74, status: 'Surplus inflow', color: '#72B89A' },
  { id: 'prod-2', label: 'Jos Plateau', role: 'Production', x: 465, y: 158, status: 'Peak harvest', color: '#72B89A' },
  { id: 'hub-1', label: 'Kaduna Hub', role: 'Distribution', x: 325, y: 156, status: 'Active transit', color: '#D8A64A' },
  { id: 'hub-2', label: 'Abuja Central', role: 'Distribution', x: 356, y: 244, status: 'Balanced', color: '#9AA8B5' },
  { id: 'hub-3', label: 'Ibadan Relay', role: 'Distribution', x: 185, y: 295, status: 'High throughput', color: '#D8A64A' },
  { id: 'ret-1', label: 'Lagos Market', role: 'Retail', x: 112, y: 368, status: 'Demand rising', color: '#D8A64A' },
  { id: 'ret-2', label: 'Port Harcourt', role: 'Retail', x: 412, y: 376, status: 'Demand rising', color: '#D8A64A' },
];

const HERO_LINKS = [
  { d: 'M390 74 Q360 112 325 156', color: '#72B89A', speed: 'animate-flow-line' },
  { d: 'M390 74 Q435 110 465 158', color: '#72B89A', speed: 'animate-flow-line-slow' },
  { d: 'M465 158 Q418 206 356 244', color: '#72B89A', speed: 'animate-flow-line' },
  { d: 'M325 156 Q342 200 356 244', color: '#D8A64A', speed: 'animate-flow-line-slow' },
  { d: 'M325 156 Q235 215 185 295', color: '#D8A64A', speed: 'animate-flow-line' },
  { d: 'M356 244 Q265 268 185 295', color: '#9AA8B5', speed: 'animate-flow-line-slow' },
  { d: 'M185 295 Q148 332 112 368', color: '#D8A64A', speed: 'animate-flow-line' },
  { d: 'M356 244 Q395 308 412 376', color: '#D8A64A', speed: 'animate-flow-line' },
  { d: 'M465 158 Q468 272 412 376', color: '#9AA8B5', speed: 'animate-flow-line-slow' },
];

function toneDotClass(tone) {
  if (tone === 'signal') return 'bg-[#72B89A]';
  if (tone === 'accent') return 'bg-[#D8A64A]';
  if (tone === 'warning') return 'bg-[#D8A64A]/80';
  return 'bg-[#9AA8B5]';
}

function toneTextClass(tone) {
  if (tone === 'signal') return 'text-[#72B89A]';
  if (tone === 'accent' || tone === 'warning') return 'text-[#D8A64A]';
  return 'text-[#9AA8B5]';
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(HERO_NODES[0]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-stagger', {
          y: 22,
          opacity: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: 'power3.out',
        });

        gsap.from('.hero-panel', {
          y: 16,
          opacity: 0,
          duration: 0.8,
          delay: 0.35,
          stagger: 0.14,
          ease: 'power2.out',
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-[#0A0D12] border-b border-[#273440]"
    >
      {/* Subtle architectural coordinate backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 72% 40%, rgba(216,166,74,0.06) 0%, rgba(10,13,18,0) 52%), radial-gradient(circle at 18% 85%, rgba(114,184,154,0.04) 0%, rgba(10,13,18,0) 45%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-6 space-y-7">
            <p className="hero-stagger font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A]">
              Food Supply Intelligence
            </p>

            <h1 className="hero-stagger font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.06] text-[#F4F6F7]">
              The future of food supply shouldn&apos;t be a surprise.
            </h1>

            <p className="hero-stagger text-base sm:text-lg leading-relaxed text-[#9AA8B5] max-w-xl">
              HarvestIQ turns fragmented supply-chain data into actionable intelligence — helping
              businesses anticipate demand, identify shortages, manage surplus, and make smarter
              decisions before problems occur.
            </p>

            <div className="hero-stagger flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#platform"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#D8A64A] text-[#0A0D12] hover:bg-[#e2b45d] transition-colors rounded-[2px]"
              >
                Explore HarvestIQ
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F4F6F7] border border-[#273440] bg-[#111821] hover:border-[#9AA8B5]/60 transition-colors rounded-[2px]"
              >
                Join the Pilot Program
                <ArrowUpRight className="w-4 h-4 text-[#9AA8B5]" />
              </a>
            </div>

            <div className="hero-stagger pt-6 border-t border-[#273440]/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5]">
                  Focus
                </p>
                <p className="mt-1 text-sm text-[#F4F6F7]">Supply &amp; Demand</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5]">
                  Horizon
                </p>
                <p className="mt-1 text-sm text-[#F4F6F7]">Forward Signals</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5]">
                  Built For
                </p>
                <p className="mt-1 text-sm text-[#F4F6F7]">Fresh Food Networks</p>
              </div>
            </div>
          </div>

          {/* Living Supply Network Visualization + Analytical Panels */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#111821] border border-[#273440] rounded-[2px] overflow-hidden">
              {/* Top telemetry bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#273440] bg-[#0A0D12]/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72B89A]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5]">
                    Supply Network Corridor View
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#9AA8B5]">
                  Illustrative interface
                </span>
              </div>

              {/* Interactive SVG Network Canvas */}
              <div className="relative bg-grid-dense px-2 pt-2 pb-4 sm:pb-2">
                <svg
                  viewBox="0 0 560 440"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Interactive food supply network showing production regions, distribution hubs, and retail destinations"
                >
                  {/* Abstract regional topographic contour lines */}
                  <path
                    d="M65 375 C110 300 180 210 260 135 C340 60 445 45 505 95 C540 140 530 280 465 385 C395 425 225 418 65 375 Z"
                    fill="#17212B"
                    fillOpacity="0.28"
                    stroke="#273440"
                    strokeWidth="1"
                  />
                  <path
                    d="M125 340 C175 275 230 205 295 148 C360 95 435 90 475 135 C500 175 485 275 430 345"
                    fill="none"
                    stroke="#273440"
                    strokeWidth="0.75"
                    strokeDasharray="3 5"
                  />

                  {/* Corridor base paths */}
                  {HERO_LINKS.map((link, idx) => (
                    <g key={idx}>
                      <path
                        d={link.d}
                        fill="none"
                        stroke="#273440"
                        strokeWidth="1.4"
                      />
                      <path
                        d={link.d}
                        fill="none"
                        stroke={link.color}
                        strokeWidth="1.5"
                        strokeOpacity="0.82"
                        className={link.speed}
                      />
                    </g>
                  ))}

                  {/* Interactive Network Nodes */}
                  {HERO_NODES.map((node) => {
                    const isActive = hoveredNode.id === node.id;
                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredNode(node)}
                        onClick={() => setHoveredNode(node)}
                      >
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isActive ? 11 : 7}
                          fill={node.color}
                          fillOpacity="0.16"
                          className="animate-pulse-ring"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isActive ? 5.5 : 4}
                          fill="#0A0D12"
                          stroke={node.color}
                          strokeWidth="2"
                        />
                        <text
                          x={node.x + 10}
                          y={node.y + 4}
                          fill={isActive ? '#F4F6F7' : '#9AA8B5'}
                          fontSize="11"
                          fontFamily="IBM Plex Mono, monospace"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Active node readout bar */}
                <div className="mx-2 mt-1 px-3.5 py-2 bg-[#0A0D12]/90 border border-[#273440] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: hoveredNode.color }}
                    />
                    <span className="font-medium text-[#F4F6F7]">{hoveredNode.label}</span>
                    <span className="font-mono text-[11px] text-[#9AA8B5]">
                      {hoveredNode.role}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#D8A64A]">
                    {hoveredNode.status}
                  </span>
                </div>
              </div>

              {/* Analytical Panels Grid (Cleanly Docked — No Messy Overlap on Small Screens) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 border-t border-[#273440] bg-[#0A0D12]/80">
                {/* Supply Outlook */}
                <div className="hero-panel sm:col-span-7 p-4 sm:border-r border-b sm:border-b-0 border-[#273440]">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-mono text-[11px] uppercase tracking-wider text-[#F4F6F7]">
                      Supply Outlook
                    </h2>
                    <span className="font-mono text-[10px] text-[#9AA8B5]">14D SIGNAL</span>
                  </div>
                  <div className="divide-y divide-[#273440]/60">
                    {HERO_SUPPLY_OUTLOOK.map((row) => (
                      <div
                        key={row.category}
                        className="py-1.5 flex items-center justify-between text-xs"
                      >
                        <span className="text-[#F4F6F7]">{row.category}</span>
                        <span className="inline-flex items-center gap-2 font-mono text-[11px]">
                          <span className={`w-1.5 h-1.5 rounded-full ${toneDotClass(row.tone)}`} />
                          <span className={toneTextClass(row.tone)}>{row.status}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regional Demand Forecast */}
                <div className="hero-panel sm:col-span-5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-mono text-[11px] uppercase tracking-wider text-[#F4F6F7]">
                        Regional Demand Forecast
                      </h2>
                    </div>
                    <div className="space-y-2.5">
                      {HERO_REGIONAL_DEMAND.map((item) => (
                        <div
                          key={item.region}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-[#9AA8B5]">{item.region}</span>
                          <span
                            className={`font-mono text-[11px] ${
                              item.tone === 'accent' ? 'text-[#D8A64A]' : 'text-[#F4F6F7]'
                            }`}
                          >
                            {item.trend}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 pt-2.5 border-t border-[#273440]/60 font-mono text-[10px] text-[#9AA8B5]">
                    Illustrative values · Not live forecasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
