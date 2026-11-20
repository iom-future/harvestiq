import { useState } from 'react';
import { NETWORK_NODES, NETWORK_ROUTES } from '../data/supplyData';

const NODE_TYPES = ['All', 'Production', 'Distribution', 'Market', 'Retail'];

function getNodeColor(type, riskLevel) {
  if (riskLevel === 'elevated') return '#D8A64A';
  if (type === 'Production') return '#72B89A';
  if (type === 'Retail') return '#D8A64A';
  return '#F4F6F7';
}

export default function SupplyNetworkSection() {
  const [selectedId, setSelectedId] = useState('lagos');
  const [filterType, setFilterType] = useState('All');

  const selectedNode =
    NETWORK_NODES.find((n) => n.id === selectedId) || NETWORK_NODES[0];

  const nodeMap = Object.fromEntries(NETWORK_NODES.map((n) => [n.id, n]));

  return (
    <section className="py-20 lg:py-28 bg-[#111821] border-b border-[#273440]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
              Connected Food Systems
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-4">
              Every movement tells a story.
            </h2>
            <p className="text-base leading-relaxed text-[#9AA8B5]">
              Food supply is a network of producers, markets, distributors, warehouses, transport
              routes, and retailers. Select any regional node below to inspect illustrative supply
              conditions, demand signals, and operational recommendations.
            </p>
          </div>

          {/* Filter toggles */}
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Filter supply network locations"
          >
            {NODE_TYPES.map((type) => {
              const active = filterType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 text-xs font-mono transition-colors rounded-[2px] border cursor-pointer ${
                    active
                      ? 'bg-[#17212B] text-[#F4F6F7] border-[#D8A64A]'
                      : 'bg-[#0A0D12] text-[#9AA8B5] border-[#273440] hover:text-[#F4F6F7]'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#273440] bg-[#0A0D12] rounded-[2px] overflow-hidden">
          {/* Interactive Network Map */}
          <div className="lg:col-span-7 xl:col-span-8 relative bg-grid-dense border-b lg:border-b-0 lg:border-r border-[#273440] p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 font-mono text-[11px] text-[#9AA8B5]">
              <span>Interactive Corridor Topology — Select a node</span>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#72B89A]" />
                  Production / Surplus
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D8A64A]" />
                  Demand / Risk Signal
                </span>
              </div>
            </div>

            <svg
              viewBox="0 0 680 480"
              className="w-full h-auto block"
              role="img"
              aria-label="Interactive regional food supply network visualization"
            >
              {/* Subtle regional outline */}
              <path
                d="M110 405 C140 315 215 200 325 115 C425 45 545 48 605 110 C640 165 620 325 535 435 C445 462 245 450 110 405 Z"
                fill="#111821"
                fillOpacity="0.65"
                stroke="#273440"
                strokeWidth="1"
              />

              {/* Supply Routes */}
              {NETWORK_ROUTES.map((route, idx) => {
                const a = nodeMap[route.from];
                const b = nodeMap[route.to];
                const isConnected =
                  selectedId === route.from || selectedId === route.to;
                const mx = (a.x + b.x) / 2;
                const my = (a.y + b.y) / 2 - 18;
                const pathD = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
                const strokeColor =
                  route.status === 'surplus'
                    ? '#72B89A'
                    : route.status === 'risk'
                      ? '#D8A64A'
                      : '#9AA8B5';

                return (
                  <g key={idx}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#273440"
                      strokeWidth={isConnected ? 2 : 1.2}
                    />
                    <path
                      d={pathD}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={isConnected ? 2 : 1.3}
                      strokeOpacity={isConnected ? 0.95 : 0.45}
                      className="animate-flow-line"
                    />
                  </g>
                );
              })}

              {/* Nodes */}
              {NETWORK_NODES.map((node) => {
                const isSelected = node.id === selectedId;
                const dimmed =
                  filterType !== 'All' && node.type !== filterType;
                const color = getNodeColor(node.type, node.riskLevel);

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer focus:outline-none"
                    style={{ opacity: dimmed ? 0.25 : 1 }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${node.name} (${node.type})`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedId(node.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedId(node.id);
                      }
                    }}
                  >
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="16"
                        fill={color}
                        fillOpacity="0.14"
                        stroke={color}
                        strokeWidth="1"
                        strokeOpacity="0.5"
                      />
                    )}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 7 : 5.5}
                      fill="#0A0D12"
                      stroke={color}
                      strokeWidth="2.2"
                    />
                    <text
                      x={node.x + 12}
                      y={node.y + 4}
                      fill={isSelected ? '#F4F6F7' : '#9AA8B5'}
                      fontSize="12"
                      fontWeight={isSelected ? '500' : '400'}
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {node.shortName}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Quick-select mobile/keyboard node strip */}
            <div className="mt-4 pt-4 border-t border-[#273440] flex flex-wrap gap-2">
              {NETWORK_NODES.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedId(node.id)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-[2px] border transition-colors cursor-pointer ${
                    selectedId === node.id
                      ? 'bg-[#17212B] border-[#D8A64A] text-[#F4F6F7]'
                      : 'border-[#273440] text-[#9AA8B5] hover:text-[#F4F6F7]'
                  }`}
                >
                  {node.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Contextual Regional Supply Overview Panel */}
          <div className="lg:col-span-5 xl:col-span-4 p-6 sm:p-7 flex flex-col justify-between bg-[#111821]/60">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#273440]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#D8A64A]">
                  Regional Supply Overview
                </span>
                <span className="font-mono text-[11px] text-[#9AA8B5]">
                  {selectedNode.type}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-[#F4F6F7]">
                {selectedNode.name}
              </h3>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="border-l-2 border-[#273440] pl-3.5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1">
                    Product Availability
                  </dt>
                  <dd className="text-[#F4F6F7] leading-relaxed">
                    {selectedNode.availability}
                  </dd>
                </div>

                <div className="border-l-2 border-[#273440] pl-3.5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1">
                    Expected Demand
                  </dt>
                  <dd className="text-[#F4F6F7] leading-relaxed">
                    {selectedNode.expectedDemand}
                  </dd>
                </div>

                <div className="border-l-2 border-[#273440] pl-3.5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1">
                    Market Trend
                  </dt>
                  <dd className="text-[#F4F6F7] leading-relaxed">
                    {selectedNode.marketTrend}
                  </dd>
                </div>

                <div className="border-l-2 border-[#D8A64A]/70 pl-3.5">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[#9AA8B5] mb-1">
                    Supply Risk
                  </dt>
                  <dd className="text-[#F4F6F7] leading-relaxed">
                    {selectedNode.supplyRisk}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 p-4 bg-[#0A0D12] border border-[#273440]">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#72B89A] mb-1.5">
                  Recommended Action
                </p>
                <p className="text-sm leading-relaxed text-[#F4F6F7]">
                  {selectedNode.recommendedAction}
                </p>
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-[#273440] font-mono text-[11px] text-[#9AA8B5]">
              Illustrative network overview · Sample regional scenarios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
