const DATA_SOURCES = [
  'Inventory records',
  'Sales and purchasing data',
  'Supplier information',
  'Production reports',
  'Market prices',
  'Weather data',
  'Logistics information',
  'Regional supply information',
];

const TECHNICAL_PRINCIPLES = [
  'Data integration',
  'Predictive analytics',
  'Machine learning',
  'Time-series forecasting',
  'Geospatial intelligence',
  'Explainable recommendations',
];

const ARCHITECTURE_LAYERS = [
  { name: 'Data Sources', detail: 'ERP, inventory, supplier feeds, market & weather' },
  { name: 'Intelligence Layer', detail: 'Schema unification, cleaning & entity linking' },
  { name: 'Forecasting', detail: 'Time-series & geospatial supply-demand models' },
  { name: 'Insights', detail: 'Surplus, shortage & price movement detection' },
  { name: 'Decisions', detail: 'Explainable purchasing & routing recommendations' },
];

export default function DataTechnologySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#111821] border-b border-[#273440]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
            Intelligence Built on Data
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7] mb-4">
            The more connected the system, the clearer the picture.
          </h2>
          <p className="text-base leading-relaxed text-[#9AA8B5]">
            HarvestIQ is designed to work with the data businesses already have, while gradually
            building a more comprehensive understanding of food supply networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layered Architecture Illustration */}
          <div className="lg:col-span-7 bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#273440]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#F4F6F7]">
                System Architecture
              </span>
              <span className="font-mono text-[11px] text-[#9AA8B5]">
                Layered Intelligence Stack
              </span>
            </div>

            <div className="relative space-y-3">
              {/* Vertical subtle animated spine */}
              <svg
                className="hidden sm:block absolute left-6 top-6 bottom-6 w-4 h-[calc(100%-3rem)] pointer-events-none"
                viewBox="0 0 16 320"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="8" y1="0" x2="8" y2="320" stroke="#273440" strokeWidth="1.5" />
                <line
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="320"
                  stroke="#D8A64A"
                  strokeWidth="1.5"
                  className="animate-flow-line-slow"
                />
              </svg>

              {ARCHITECTURE_LAYERS.map((layer, idx) => (
                <div
                  key={layer.name}
                  className="relative sm:pl-14 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-[#111821] border border-[#273440] rounded-[2px]"
                >
                  <span
                    className={`hidden sm:block absolute left-[21px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-[#0A0D12] ${
                      idx === ARCHITECTURE_LAYERS.length - 1
                        ? 'bg-[#72B89A]'
                        : idx === 2
                          ? 'bg-[#D8A64A]'
                          : 'bg-[#9AA8B5]'
                    }`}
                  />
                  <span className="font-display text-base font-medium text-[#F4F6F7]">
                    {layer.name}
                  </span>
                  <span className="font-mono text-xs text-[#9AA8B5]">{layer.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources & Technical Principles */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#D8A64A] mb-4">
                Potential Data Sources
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#F4F6F7]">
                {DATA_SOURCES.map((source) => (
                  <li key={source} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 bg-[#9AA8B5] shrink-0" />
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0A0D12] border border-[#273440] rounded-[2px] p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#72B89A] mb-4">
                Technical Principles
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#F4F6F7]">
                {TECHNICAL_PRINCIPLES.map((principle) => (
                  <li key={principle} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 bg-[#72B89A] shrink-0" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
