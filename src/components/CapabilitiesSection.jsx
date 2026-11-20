import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import {
  SUPPLY_FORECAST_DATA,
  DEMAND_INTELLIGENCE_DATA,
  MARKET_PRICING_DATA,
} from '../data/supplyData';

gsap.registerPlugin(ScrollTrigger);

const DECISION_ACTIONS = [
  'Adjust purchasing quantities',
  'Explore alternative suppliers',
  'Move inventory between locations',
  'Prepare for expected shortages',
  'Sell or redistribute surplus earlier',
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#0A0D12] border border-[#273440] px-3 py-2 text-xs font-mono">
      <p className="text-[#9AA8B5] mb-1">{label}</p>
      {payload
        .filter((entry) => entry.value != null && entry.dataKey !== 'low')
        .map((entry) => (
          <p key={entry.name} className="text-[#F4F6F7]">
            {entry.name}: <span className="text-[#D8A64A]">{entry.value} t</span>
          </p>
        ))}
    </div>
  );
}

export default function CapabilitiesSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.capability-block', {
          y: 22,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
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
      id="platform"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#111821] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
            Built for the Complexity of Food
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-4">
            Understand the entire picture.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#9AA8B5]">
            HarvestIQ combines multiple intelligence layers to help food businesses make decisions
            with greater clarity and confidence.
          </p>
        </div>

        {/* Asymmetric editorial grid — real visuals, zero icon-badge spam */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Supply Forecasting */}
          <div className="capability-block lg:col-span-7 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                Supply Forecasting
              </h3>
              <p className="text-sm text-[#9AA8B5] leading-relaxed max-w-xl">
                Understand how much food is likely to be available across regions, suppliers, and
                product categories.
              </p>
            </div>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={SUPPLY_FORECAST_DATA} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                  <CartesianGrid stroke="#273440" strokeDasharray="2 4" vertical={false} />
                  <XAxis dataKey="week" stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                  <YAxis stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<ChartTooltip />} />
                  <Area type="monotone" dataKey="high" name="Upper range" stroke="none" fill="#D8A64A" fillOpacity={0.14} />
                  <Area type="monotone" dataKey="low" name="Lower range" stroke="none" fill="#0A0D12" fillOpacity={1} />
                  <Line type="monotone" dataKey="actual" name="Observed supply" stroke="#F4F6F7" strokeWidth={2} dot={{ r: 2.5, fill: '#F4F6F7' }} />
                  <Line type="monotone" dataKey="projected" name="Projected supply" stroke="#D8A64A" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 2.5, fill: '#D8A64A' }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 pt-3 border-t border-[#273440]/70 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#9AA8B5]">
              <span>Projected availability &amp; uncertainty range</span>
              <span>Illustrative data</span>
            </div>
          </div>

          {/* Demand Intelligence */}
          <div className="capability-block lg:col-span-5 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                Demand Intelligence
              </h3>
              <p className="text-sm text-[#9AA8B5] leading-relaxed">
                Predict demand changes using historical purchasing patterns, seasonality, market
                signals, and available operational data.
              </p>
            </div>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={DEMAND_INTELLIGENCE_DATA} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                  <CartesianGrid stroke="#273440" strokeDasharray="2 4" vertical={false} />
                  <XAxis dataKey="month" stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                  <YAxis stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<ChartTooltip />} />
                  <Line type="monotone" dataKey="historical" name="Historical" stroke="#9AA8B5" strokeWidth={1.75} dot={false} />
                  <Line type="monotone" dataKey="projected" name="Projected" stroke="#72B89A" strokeWidth={2} dot={{ r: 2.5, fill: '#72B89A' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 pt-3 border-t border-[#273440]/70 flex items-center justify-between font-mono text-[11px] text-[#9AA8B5]">
              <span>Historical vs. projected curve</span>
              <span className="text-[#72B89A]">+11.5% seasonal pull</span>
            </div>
          </div>

          {/* Market Intelligence */}
          <div className="capability-block lg:col-span-5 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                Market Intelligence
              </h3>
              <p className="text-sm text-[#9AA8B5] leading-relaxed">
                Monitor market conditions, price movements, seasonal trends, and emerging
                supply-demand imbalances.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#273440] font-mono text-[10px] uppercase tracking-wider text-[#9AA8B5]">
                    <th className="pb-2 font-normal">Market</th>
                    <th className="pb-2 font-normal">Benchmark</th>
                    <th className="pb-2 font-normal text-right">14D Move</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#273440]/60 text-xs">
                  {MARKET_PRICING_DATA.map((row) => (
                    <tr key={row.region}>
                      <td className="py-2.5 text-[#F4F6F7]">{row.region}</td>
                      <td className="py-2.5 font-mono text-[#9AA8B5]">{row.tomatoes}</td>
                      <td
                        className={`py-2.5 font-mono text-right ${
                          row.tone === 'signal'
                            ? 'text-[#72B89A]'
                            : row.tone === 'accent'
                              ? 'text-[#D8A64A]'
                              : 'text-[#9AA8B5]'
                        }`}
                      >
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Surplus Detection */}
          <div className="capability-block lg:col-span-7 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                Surplus Detection
              </h3>
              <p className="text-sm text-[#9AA8B5] leading-relaxed max-w-xl">
                Identify situations where expected supply may exceed demand, helping businesses make
                earlier decisions about redistribution, purchasing, or sales.
              </p>
            </div>

            <div className="bg-[#111821] border border-[#273440] p-4 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#273440]">
                <span className="text-sm font-medium text-[#F4F6F7]">
                  Tomatoes — Lagos Inbound Corridor
                </span>
                <span className="font-mono text-xs text-[#72B89A]">Early Surplus Window</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#9AA8B5]">
                    Available Inventory
                  </p>
                  <p className="mt-1 font-mono text-lg text-[#F4F6F7]">14,820 t</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#9AA8B5]">
                    Forecast Demand
                  </p>
                  <p className="mt-1 font-mono text-lg text-[#9AA8B5]">12,640 t</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#9AA8B5]">
                    Projected Excess
                  </p>
                  <p className="mt-1 font-mono text-lg text-[#D8A64A]">+2,180 t</p>
                </div>
              </div>

              {/* Clean comparative bar */}
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-[#17212B] overflow-hidden flex">
                  <div className="h-full bg-[#72B89A]" style={{ width: '85%' }} />
                  <div className="h-full bg-[#D8A64A]" style={{ width: '15%' }} />
                </div>
                <div className="flex justify-between font-mono text-[10px] text-[#9AA8B5]">
                  <span>Absorbed demand (85%)</span>
                  <span className="text-[#D8A64A]">Redistribution opportunity (15%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supply Risk Monitoring */}
          <div className="capability-block lg:col-span-6 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                Supply Risk Monitoring
              </h3>
              <p className="text-sm text-[#9AA8B5] leading-relaxed">
                Identify potential disruptions caused by weather, transportation, supplier
                conditions, or changes in market availability.
              </p>
            </div>
            <div className="bg-[#111821] border border-[#273440] p-4">
              <svg viewBox="0 0 360 140" className="w-full h-36" role="img" aria-label="Regional supply risk corridor overview">
                <line x1="20" y1="35" x2="340" y2="35" stroke="#273440" strokeWidth="1" strokeDasharray="2 4" />
                <line x1="20" y1="75" x2="340" y2="75" stroke="#273440" strokeWidth="1" strokeDasharray="2 4" />
                <line x1="20" y1="115" x2="340" y2="115" stroke="#273440" strokeWidth="1" strokeDasharray="2 4" />

                <path d="M55 38 Q135 55 180 72" fill="none" stroke="#72B89A" strokeWidth="1.5" />
                <path d="M180 72 Q240 60 305 42" fill="none" stroke="#D8A64A" strokeWidth="1.6" strokeDasharray="4 4" />
                <path d="M180 72 Q225 98 295 112" fill="none" stroke="#D8A64A" strokeWidth="1.8" />

                <circle cx="55" cy="38" r="5" fill="#0A0D12" stroke="#72B89A" strokeWidth="2" />
                <text x="66" y="42" fill="#F4F6F7" fontSize="10" fontFamily="IBM Plex Mono">North Basin · Low</text>

                <circle cx="180" cy="72" r="5" fill="#0A0D12" stroke="#D8A64A" strokeWidth="2" />
                <text x="112" y="92" fill="#9AA8B5" fontSize="10" fontFamily="IBM Plex Mono">Central Transit · Moderate</text>

                <circle cx="305" cy="42" r="5" fill="#0A0D12" stroke="#D8A64A" strokeWidth="2" />
                <text x="225" y="28" fill="#D8A64A" fontSize="10" fontFamily="IBM Plex Mono">East Feeder · Weather</text>

                <circle cx="295" cy="112" r="5" fill="#0A0D12" stroke="#D8A64A" strokeWidth="2" />
                <text x="195" y="128" fill="#D8A64A" fontSize="10" fontFamily="IBM Plex Mono">Coastal Axis · Elevated</text>
              </svg>
            </div>
          </div>

          {/* Decision Support */}
          <div className="capability-block lg:col-span-6 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                Decision Support
              </h3>
              <p className="text-sm text-[#9AA8B5] leading-relaxed">
                Translate intelligence into practical recommendations your commercial and operations
                teams can act on immediately.
              </p>
            </div>
            <ul className="divide-y divide-[#273440]/80 border-t border-b border-[#273440]">
              {DECISION_ACTIONS.map((action) => (
                <li
                  key={action}
                  className="py-2.5 flex items-center justify-between text-sm text-[#F4F6F7]"
                >
                  <span>{action}</span>
                  <span className="font-mono text-[11px] text-[#D8A64A]">Recommended</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
