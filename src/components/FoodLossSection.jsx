const BENEFITS = [
  {
    title: 'Reduce Avoidable Surplus',
    description:
      'Identify potential excess supply before it becomes difficult to sell or distribute.',
  },
  {
    title: 'Improve Availability',
    description:
      'Better forecasting helps businesses prepare for demand and supply changes.',
  },
  {
    title: 'Make Better Distribution Decisions',
    description:
      'Understand where supply may be needed and where excess inventory may exist.',
  },
  {
    title: 'Support Measurable Impact',
    description:
      'Track operational outcomes and identify opportunities to reduce avoidable food loss.',
  },
];

export default function FoodLossSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0D12] border-b border-[#273440]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Explanation & Benefits */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#72B89A] mb-4">
                A More Efficient Food System
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-5">
                Better decisions can mean less food lost.
              </h2>
              <p className="text-base leading-relaxed text-[#9AA8B5]">
                Food loss often occurs when supply, demand, and distribution fail to align.
                HarvestIQ helps businesses identify potential inefficiencies earlier, creating
                opportunities to improve planning, distribution, and inventory decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#273440]">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="space-y-1.5">
                  <h3 className="font-display text-base font-medium text-[#F4F6F7]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9AA8B5]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Coordinated Supply Flow Visual */}
          <div className="lg:col-span-6">
            <div className="bg-[#111821] border border-[#273440] rounded-[2px] p-6 sm:p-7">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#273440]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4F6F7]">
                  Coordinated Supply Balancing
                </span>
                <span className="font-mono text-[11px] text-[#72B89A]">
                  Alignment Flow
                </span>
              </div>

              <svg
                viewBox="0 0 480 300"
                className="w-full h-auto"
                role="img"
                aria-label="Coordinated supply network showing surplus redirected from origin hubs to demand destinations before spoilage"
              >
                {/* Origin Nodes */}
                <rect x="16" y="34" width="116" height="44" rx="2" fill="#0A0D12" stroke="#273440" />
                <text x="74" y="53" textAnchor="middle" fill="#F4F6F7" fontSize="11" fontFamily="Space Grotesk">Harvest Origin A</text>
                <text x="74" y="68" textAnchor="middle" fill="#72B89A" fontSize="9.5" fontFamily="IBM Plex Mono">High yield window</text>

                <rect x="16" y="128" width="116" height="44" rx="2" fill="#0A0D12" stroke="#273440" />
                <text x="74" y="147" textAnchor="middle" fill="#F4F6F7" fontSize="11" fontFamily="Space Grotesk">Harvest Origin B</text>
                <text x="74" y="162" textAnchor="middle" fill="#9AA8B5" fontSize="9.5" fontFamily="IBM Plex Mono">Normal output</text>

                <rect x="16" y="222" width="116" height="44" rx="2" fill="#0A0D12" stroke="#273440" />
                <text x="74" y="241" textAnchor="middle" fill="#F4F6F7" fontSize="11" fontFamily="Space Grotesk">Cold Storage Hub</text>
                <text x="74" y="256" textAnchor="middle" fill="#D8A64A" fontSize="9.5" fontFamily="IBM Plex Mono">Buffer reserve</text>

                {/* Central Intelligence Routing Node */}
                <rect x="184" y="108" width="112" height="84" rx="2" fill="#17212B" stroke="#D8A64A" strokeWidth="1.25" />
                <text x="240" y="138" textAnchor="middle" fill="#D8A64A" fontSize="10" fontFamily="IBM Plex Mono">HARVESTIQ</text>
                <text x="240" y="156" textAnchor="middle" fill="#F4F6F7" fontSize="11.5" fontFamily="Space Grotesk">Early Alignment</text>
                <text x="240" y="174" textAnchor="middle" fill="#9AA8B5" fontSize="9.5" fontFamily="IBM Plex Mono">Supply ↔ Demand</text>

                {/* Destination Nodes */}
                <rect x="348" y="34" width="116" height="44" rx="2" fill="#0A0D12" stroke="#273440" />
                <text x="406" y="53" textAnchor="middle" fill="#F4F6F7" fontSize="11" fontFamily="Space Grotesk">Primary Retail</text>
                <text x="406" y="68" textAnchor="middle" fill="#72B89A" fontSize="9.5" fontFamily="IBM Plex Mono">Matched intake</text>

                <rect x="348" y="128" width="116" height="44" rx="2" fill="#0A0D12" stroke="#273440" />
                <text x="406" y="147" textAnchor="middle" fill="#F4F6F7" fontSize="11" fontFamily="Space Grotesk">Secondary Market</text>
                <text x="406" y="162" textAnchor="middle" fill="#D8A64A" fontSize="9.5" fontFamily="IBM Plex Mono">Surplus absorbed</text>

                <rect x="348" y="222" width="116" height="44" rx="2" fill="#0A0D12" stroke="#273440" />
                <text x="406" y="241" textAnchor="middle" fill="#F4F6F7" fontSize="11" fontFamily="Space Grotesk">Food Processors</text>
                <text x="406" y="256" textAnchor="middle" fill="#9AA8B5" fontSize="9.5" fontFamily="IBM Plex Mono">Early off-take</text>

                {/* Animated Paths Left -> Center */}
                <path d="M132 56 C160 56 160 132 184 132" fill="none" stroke="#72B89A" strokeWidth="1.5" className="animate-flow-line" />
                <path d="M132 150 L184 150" fill="none" stroke="#9AA8B5" strokeWidth="1.5" className="animate-flow-line-slow" />
                <path d="M132 244 C160 244 160 168 184 168" fill="none" stroke="#D8A64A" strokeWidth="1.5" className="animate-flow-line" />

                {/* Animated Paths Center -> Right */}
                <path d="M296 132 C320 132 320 56 348 56" fill="none" stroke="#72B89A" strokeWidth="1.5" className="animate-flow-line" />
                <path d="M296 150 L348 150" fill="none" stroke="#D8A64A" strokeWidth="1.5" className="animate-flow-line" />
                <path d="M296 168 C320 168 320 244 348 244" fill="none" stroke="#9AA8B5" strokeWidth="1.5" className="animate-flow-line-slow" />
              </svg>

              <p className="mt-4 pt-3 border-t border-[#273440] text-xs text-[#9AA8B5] leading-relaxed">
                Earlier visibility into emerging surpluses gives wholesalers and distributors time
                to reroute volume to secondary markets and processors before perishable value erodes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
