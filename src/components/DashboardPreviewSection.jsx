import { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { DASHBOARD_COMMODITIES } from '../data/supplyData';

const COMMODITY_KEYS = Object.keys(DASHBOARD_COMMODITIES);

function WorkspaceTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#0A0D12] border border-[#273440] px-3 py-2 text-xs font-mono">
      <p className="text-[#9AA8B5] mb-1">{label}</p>
      {payload
        .filter((item) => item.value != null && item.dataKey !== 'rangeLow')
        .map((item) => (
          <p key={item.name} className="text-[#F4F6F7]">
            {item.name}: <span className="text-[#D8A64A]">{item.value.toLocaleString()} t</span>
          </p>
        ))}
    </div>
  );
}

export default function DashboardPreviewSection() {
  const [selectedCommodity, setSelectedCommodity] = useState('Tomatoes');
  const current = DASHBOARD_COMMODITIES[selectedCommodity];

  return (
    <section className="py-20 lg:py-28 bg-[#111821] border-b border-[#273440]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
              The Intelligence Workspace
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-4">
              Everything you need to see. Nothing you need to guess.
            </h2>
            <p className="text-base leading-relaxed text-[#9AA8B5]">
              A unified workspace that turns food supply information into an understandable
              operational picture.
            </p>
          </div>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Select commodity workspace">
            {COMMODITY_KEYS.map((commodity) => {
              const active = selectedCommodity === commodity;
              return (
                <button
                  key={commodity}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCommodity(commodity)}
                  className={`px-3.5 py-2 text-xs font-mono rounded-[2px] border transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#17212B] text-[#F4F6F7] border-[#D8A64A]'
                      : 'bg-[#0A0D12] text-[#9AA8B5] border-[#273440] hover:text-[#F4F6F7]'
                  }`}
                >
                  {commodity}
                </button>
              );
            })}
          </div>
        </div>

        {/* Workspace Frame */}
        <div className="bg-[#0A0D12] border border-[#273440] rounded-[2px] overflow-hidden">
          {/* Workspace Header */}
          <div className="px-5 py-3 border-b border-[#273440] bg-[#111821]/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[#F4F6F7] font-medium">
                HarvestIQ Workspace / {selectedCommodity}
              </span>
              <span className="text-[#273440]">|</span>
              <span className="text-[#9AA8B5]">Regional Corridor View</span>
            </div>
            <span className="font-mono text-[11px] text-[#9AA8B5]">
              Illustrative mock data — for interface preview only
            </span>
          </div>

          {/* Overview Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#273440] divide-y sm:divide-y-0 sm:divide-x divide-[#273440]">
            {current.metrics.map((metric) => (
              <div key={metric.label} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5]">
                  {metric.label}
                </p>
                <p
                  className={`mt-2 font-mono text-2xl font-medium ${
                    metric.tone === 'signal'
                      ? 'text-[#72B89A]'
                      : metric.tone === 'accent'
                        ? 'text-[#D8A64A]'
                        : 'text-[#F4F6F7]'
                  }`}
                >
                  {metric.value}
                </p>
                <p className="mt-1 font-mono text-xs text-[#9AA8B5]">{metric.note}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#273440]">
            {/* Supply Forecast */}
            <div className="lg:col-span-6 p-6 border-b lg:border-b-0 lg:border-r border-[#273440]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-display text-base font-medium text-[#F4F6F7]">
                    Supply Forecast
                  </h3>
                  <p className="text-xs text-[#9AA8B5] mt-0.5">
                    Historical supply, projected supply &amp; uncertainty range
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#D8A64A]">Metric Tons</span>
              </div>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={current.supplyChart}
                    margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                  >
                    <CartesianGrid stroke="#273440" strokeDasharray="2 4" vertical={false} />
                    <XAxis dataKey="period" stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<WorkspaceTooltip />} />
                    <Area type="monotone" dataKey="rangeHigh" name="Upper bound" stroke="none" fill="#D8A64A" fillOpacity={0.14} />
                    <Area type="monotone" dataKey="rangeLow" name="Lower bound" stroke="none" fill="#0A0D12" fillOpacity={1} />
                    <Line type="monotone" dataKey="historical" name="Historical supply" stroke="#F4F6F7" strokeWidth={2} dot={{ r: 2.5, fill: '#F4F6F7' }} />
                    <Line type="monotone" dataKey="projected" name="Projected supply" stroke="#D8A64A" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 2.5, fill: '#D8A64A' }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Demand Forecast */}
            <div className="lg:col-span-6 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-display text-base font-medium text-[#F4F6F7]">
                    Demand Forecast
                  </h3>
                  <p className="text-xs text-[#9AA8B5] mt-0.5">
                    Historical demand compared with expected demand trajectory
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#72B89A]">Metric Tons</span>
              </div>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={current.demandChart}
                    margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
                  >
                    <CartesianGrid stroke="#273440" strokeDasharray="2 4" vertical={false} />
                    <XAxis dataKey="period" stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#9AA8B5" tick={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<WorkspaceTooltip />} />
                    <Area type="monotone" dataKey="expected" name="Expected demand" stroke="#72B89A" strokeWidth={2} fill="#72B89A" fillOpacity={0.1} />
                    <Line type="monotone" dataKey="historical" name="Historical demand" stroke="#9AA8B5" strokeWidth={1.75} dot={{ r: 2.5, fill: '#9AA8B5' }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Signals, Alerts, and Recommendation Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#273440]">
            {/* Market Signals */}
            <div className="lg:col-span-4 p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-4">
                Market Signals
              </h3>
              <ul className="space-y-4">
                {current.marketSignals.map((signal) => (
                  <li key={signal.title} className="text-sm">
                    <p className="text-[#F4F6F7] font-medium">{signal.title}</p>
                    <p className="text-xs text-[#9AA8B5] mt-0.5 leading-relaxed">
                      {signal.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk Alerts */}
            <div className="lg:col-span-4 p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-4">
                Risk Alerts
              </h3>
              <ul className="space-y-3.5">
                {current.riskAlerts.map((alert) => (
                  <li
                    key={alert.message}
                    className="border-l-2 border-[#D8A64A] pl-3 text-xs leading-relaxed"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D8A64A] block mb-0.5">
                      {alert.severity}
                    </span>
                    <span className="text-[#F4F6F7]">{alert.message}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="lg:col-span-4 p-6 bg-[#111821]/60 flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#72B89A] mb-4">
                  Recommendation
                </h3>
                <p className="font-display text-lg font-medium text-[#F4F6F7] mb-2">
                  {current.recommendation.title}
                </p>
                <p className="text-sm text-[#9AA8B5] leading-relaxed mb-4">
                  {current.recommendation.summary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#273440]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#D8A64A] mb-1">
                  Recommended Action
                </p>
                <p className="text-sm text-[#F4F6F7] leading-relaxed">
                  {current.recommendation.action}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
