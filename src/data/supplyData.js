// Illustrative mock data for HarvestIQ interface previews

export const HERO_SUPPLY_OUTLOOK = [
  { category: 'Tomatoes', status: 'Supply surplus', tone: 'signal' },
  { category: 'Rice', status: 'Stable', tone: 'neutral' },
  { category: 'Fresh vegetables', status: 'Demand rising', tone: 'accent' },
  { category: 'Maize', status: 'Supply uncertainty', tone: 'warning' },
];

export const HERO_REGIONAL_DEMAND = [
  { region: 'Lagos', trend: 'Increasing', tone: 'accent' },
  { region: 'Abuja', trend: 'Stable', tone: 'neutral' },
  { region: 'Port Harcourt', trend: 'Increasing', tone: 'accent' },
];

export const SUPPLY_FORECAST_DATA = [
  { week: 'W1', actual: 420, projected: null, low: null, high: null },
  { week: 'W2', actual: 445, projected: null, low: null, high: null },
  { week: 'W3', actual: 430, projected: null, low: null, high: null },
  { week: 'W4', actual: 468, projected: 468, low: 455, high: 482 },
  { week: 'W5', actual: null, projected: 505, low: 472, high: 538 },
  { week: 'W6', actual: null, projected: 540, low: 495, high: 585 },
  { week: 'W7', actual: null, projected: 518, low: 465, high: 572 },
  { week: 'W8', actual: null, projected: 492, low: 432, high: 552 },
];

export const DEMAND_INTELLIGENCE_DATA = [
  { month: 'Jan', historical: 310, projected: 318 },
  { month: 'Feb', historical: 325, projected: 334 },
  { month: 'Mar', historical: 342, projected: 358 },
  { month: 'Apr', historical: 338, projected: 372 },
  { month: 'May', historical: 365, projected: 398 },
  { month: 'Jun', historical: 382, projected: 426 },
];

export const MARKET_PRICING_DATA = [
  { region: 'Lagos Mile 12', tomatoes: '₦48,200', delta: '-6.4%', status: 'Surplus easing', tone: 'signal' },
  { region: 'Abuja Deidei', tomatoes: '₦53,500', delta: '+1.2%', status: 'Balanced', tone: 'neutral' },
  { region: 'Port Harcourt', tomatoes: '₦59,100', delta: '+7.8%', status: 'Tightening', tone: 'accent' },
  { region: 'Kano Dawanau', tomatoes: '₦39,400', delta: '-9.1%', status: 'Peak inflow', tone: 'signal' },
];

export const NETWORK_NODES = [
  {
    id: 'kano',
    name: 'Kano Agricultural Corridor',
    shortName: 'Kano',
    type: 'Production',
    x: 495,
    y: 92,
    availability: 'High seasonal inflow — Tomatoes, Onions, Peppers',
    expectedDemand: 'Moderate regional intake; high southbound pull',
    marketTrend: 'Farmgate supply expanding ahead of dry-season peak',
    supplyRisk: 'Low production risk; transit congestion on southbound artery',
    riskLevel: 'low',
    recommendedAction: 'Pre-allocate refrigerated capacity for Lagos & Port Harcourt corridors before surplus compresses margins.',
  },
  {
    id: 'kaduna',
    name: 'Kaduna Consolidation Hub',
    shortName: 'Kaduna',
    type: 'Distribution',
    x: 428,
    y: 170,
    availability: 'Steady grain & fresh produce staging volumes',
    expectedDemand: 'Rising wholesale orders from central & southern buyers',
    marketTrend: 'Stable pricing with tightening maize inventory',
    supplyRisk: 'Moderate — corridor transit delays reported on western route',
    riskLevel: 'moderate',
    recommendedAction: 'Buffer 3-day safety stock on maize and stagger dispatch schedules.',
  },
  {
    id: 'jos',
    name: 'Jos Plateau Basin',
    shortName: 'Jos Plateau',
    type: 'Production',
    x: 560,
    y: 200,
    availability: 'Elevated fresh vegetable & Irish potato harvest',
    expectedDemand: 'Strong demand from Abuja and coastal retail chains',
    marketTrend: 'Downward price pressure expected within 10 days',
    supplyRisk: 'Low — favorable weather window across harvest zones',
    riskLevel: 'low',
    recommendedAction: 'Lock forward wholesale commitments early and expand secondary buyer allocation.',
  },
  {
    id: 'benue',
    name: 'Benue Valley Belt',
    shortName: 'Benue',
    type: 'Production',
    x: 525,
    y: 295,
    availability: 'Moderate yam, rice, and citrus output',
    expectedDemand: 'Increasing urban procurement ahead of month-end',
    marketTrend: 'Gradual upward drift in wholesale benchmarks',
    supplyRisk: 'Elevated — rainfall variability affecting feeder road access',
    riskLevel: 'elevated',
    recommendedAction: 'Diversify sourcing across secondary aggregators and monitor daily dispatch clearance.',
  },
  {
    id: 'abuja',
    name: 'Abuja Central Market Hub',
    shortName: 'Abuja',
    type: 'Market',
    x: 432,
    y: 262,
    availability: 'Balanced inventory across staple categories',
    expectedDemand: 'Stable institutional & retail consumption',
    marketTrend: 'Low volatility across rice and fresh produce',
    supplyRisk: 'Low — multi-corridor inflow maintaining equilibrium',
    riskLevel: 'low',
    recommendedAction: 'Maintain standard replenishment cadence; evaluate Jos Plateau surplus intake.',
  },
  {
    id: 'ibadan',
    name: 'Ibadan Regional Distribution',
    shortName: 'Ibadan',
    type: 'Distribution',
    x: 246,
    y: 325,
    availability: 'Tightening leafy greens; adequate root crops',
    expectedDemand: 'Rising spillover demand from Lagos metropolitan buyers',
    marketTrend: 'Short-term price firmness in perishable categories',
    supplyRisk: 'Moderate — cold-storage utilization approaching peak',
    riskLevel: 'moderate',
    recommendedAction: 'Prioritize rapid cross-docking for perishables and shift excess crates to coastal retail.',
  },
  {
    id: 'lagos',
    name: 'Lagos Metropolitan Retail',
    shortName: 'Lagos',
    type: 'Retail',
    x: 170,
    y: 392,
    availability: 'Tomato surplus building; fresh vegetables tightening',
    expectedDemand: 'Increasing across wholesale and supermarket channels',
    marketTrend: 'Divergent: soft tomato pricing, firm leafy green pricing',
    supplyRisk: 'Moderate — incoming northern volume may outpace storage capacity',
    riskLevel: 'moderate',
    recommendedAction: 'Review tomato purchasing commitments and accelerate redistribution to secondary markets.',
  },
  {
    id: 'ph',
    name: 'Port Harcourt Coastal Hub',
    shortName: 'Port Harcourt',
    type: 'Retail',
    x: 472,
    y: 422,
    availability: 'Constrained fresh produce arrival; steady rice supply',
    expectedDemand: 'Increasing retail & foodservice procurement',
    marketTrend: 'Upward price momentum in fresh tomatoes and peppers',
    supplyRisk: 'Elevated — inbound highway transit delays from northern corridors',
    riskLevel: 'elevated',
    recommendedAction: 'Route northern surplus volumes early and activate secondary Benue-axis suppliers.',
  },
];

export const NETWORK_ROUTES = [
  { from: 'kano', to: 'kaduna', volume: 'high', status: 'surplus' },
  { from: 'kano', to: 'jos', volume: 'medium', status: 'normal' },
  { from: 'kaduna', to: 'abuja', volume: 'high', status: 'normal' },
  { from: 'kaduna', to: 'ibadan', volume: 'high', status: 'risk' },
  { from: 'jos', to: 'abuja', volume: 'high', status: 'surplus' },
  { from: 'jos', to: 'benue', volume: 'medium', status: 'normal' },
  { from: 'abuja', to: 'ibadan', volume: 'medium', status: 'normal' },
  { from: 'benue', to: 'ph', volume: 'high', status: 'risk' },
  { from: 'abuja', to: 'ph', volume: 'medium', status: 'normal' },
  { from: 'ibadan', to: 'lagos', volume: 'high', status: 'surplus' },
];

export const DASHBOARD_COMMODITIES = {
  Tomatoes: {
    metrics: [
      { label: 'Total Tracked Supply', value: '14,820 t', note: '+11.4% vs 30d avg' },
      { label: 'Expected Demand', value: '12,640 t', note: 'Next 14-day window' },
      { label: 'Supply-Demand Balance', value: '+2,180 t', note: 'Projected surplus', tone: 'signal' },
      { label: 'Active Risk Signals', value: '3 Alerts', note: '1 surplus · 2 transit', tone: 'accent' },
    ],
    supplyChart: [
      { period: 'Wk 1', historical: 2950, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 2', historical: 3120, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 3', historical: 3280, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 4', historical: 3490, projected: 3490, rangeLow: 3390, rangeHigh: 3590 },
      { period: 'Wk 5', historical: null, projected: 3820, rangeLow: 3580, rangeHigh: 4060 },
      { period: 'Wk 6', historical: null, projected: 4050, rangeLow: 3720, rangeHigh: 4380 },
      { period: 'Wk 7', historical: null, projected: 3760, rangeLow: 3380, rangeHigh: 4140 },
    ],
    demandChart: [
      { period: 'Wk 1', historical: 2890, expected: 2910 },
      { period: 'Wk 2', historical: 2980, expected: 3010 },
      { period: 'Wk 3', historical: 3060, expected: 3090 },
      { period: 'Wk 4', historical: 3120, expected: 3160 },
      { period: 'Wk 5', historical: null, expected: 3210 },
      { period: 'Wk 6', historical: null, expected: 3240 },
      { period: 'Wk 7', historical: null, expected: 3190 },
    ],
    marketSignals: [
      { title: 'Kano farmgate inflow accelerating', detail: 'Wholesale basket prices softened 6.4% week-over-week.' },
      { title: 'Lagos storage utilization rising', detail: 'Cold-room intake approaching 84% across tracked hubs.' },
      { title: 'Port Harcourt price spread widening', detail: 'Regional arbitrage window opening on southern corridor.' },
    ],
    riskAlerts: [
      { severity: 'Surplus', message: 'Potential inventory surplus detected across Lagos inbound lanes.' },
      { severity: 'Transit', message: 'Delivery disruption affecting availability on Kaduna–Ibadan axis.' },
      { severity: 'Market', message: 'Regional market prices changing rapidly in Kano and Mile 12.' },
    ],
    recommendation: {
      title: 'Potential tomato surplus detected',
      summary: 'Expected supply may exceed projected demand in the selected region over the next 10–14 days.',
      action: 'Review purchasing commitments and explore alternative distribution opportunities toward Port Harcourt and secondary urban markets.',
    },
  },
  Rice: {
    metrics: [
      { label: 'Total Tracked Supply', value: '28,400 t', note: '+2.1% vs 30d avg' },
      { label: 'Expected Demand', value: '27,950 t', note: 'Next 14-day window' },
      { label: 'Supply-Demand Balance', value: '+450 t', note: 'Balanced corridor', tone: 'neutral' },
      { label: 'Active Risk Signals', value: '1 Alert', note: '1 price watch', tone: 'accent' },
    ],
    supplyChart: [
      { period: 'Wk 1', historical: 6820, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 2', historical: 6950, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 3', historical: 7010, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 4', historical: 7100, projected: 7100, rangeLow: 6980, rangeHigh: 7220 },
      { period: 'Wk 5', historical: null, projected: 7180, rangeLow: 6950, rangeHigh: 7410 },
      { period: 'Wk 6', historical: null, projected: 7240, rangeLow: 6940, rangeHigh: 7540 },
      { period: 'Wk 7', historical: null, projected: 7200, rangeLow: 6860, rangeHigh: 7540 },
    ],
    demandChart: [
      { period: 'Wk 1', historical: 6780, expected: 6810 },
      { period: 'Wk 2', historical: 6890, expected: 6920 },
      { period: 'Wk 3', historical: 6960, expected: 6980 },
      { period: 'Wk 4', historical: 7020, expected: 7050 },
      { period: 'Wk 5', historical: null, expected: 7110 },
      { period: 'Wk 6', historical: null, expected: 7140 },
      { period: 'Wk 7', historical: null, expected: 7120 },
    ],
    marketSignals: [
      { title: 'Mill throughput remains consistent', detail: 'Northern and middle-belt mills tracking within seasonal norms.' },
      { title: 'Abuja wholesale pricing stable', detail: '50kg benchmark flat over the past 14 days.' },
      { title: 'Coastal port clearance normalizing', detail: 'Inbound warehousing lead times down by 1.2 days.' },
    ],
    riskAlerts: [
      { severity: 'Market', message: 'Regional market prices showing mild upward drift in eastern corridors.' },
      { severity: 'Logistics', message: 'Minor fuel-cost variance monitored across long-haul haulage.' },
    ],
    recommendation: {
      title: 'Stable supply corridor — optimize replenishment',
      summary: 'Tracked milled rice availability aligns closely with projected wholesale and retail demand.',
      action: 'Maintain scheduled contract replenishment and lock current haulage rates ahead of month-end restocking.',
    },
  },
  Maize: {
    metrics: [
      { label: 'Total Tracked Supply', value: '18,150 t', note: '-6.8% vs 30d avg' },
      { label: 'Expected Demand', value: '19,920 t', note: 'Next 14-day window' },
      { label: 'Supply-Demand Balance', value: '-1,770 t', note: 'Supply uncertainty', tone: 'accent' },
      { label: 'Active Risk Signals', value: '4 Alerts', note: '2 shortage · 2 weather', tone: 'accent' },
    ],
    supplyChart: [
      { period: 'Wk 1', historical: 5020, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 2', historical: 4880, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 3', historical: 4690, projected: null, rangeLow: null, rangeHigh: null },
      { period: 'Wk 4', historical: 4540, projected: 4540, rangeLow: 4410, rangeHigh: 4670 },
      { period: 'Wk 5', historical: null, projected: 4380, rangeLow: 4080, rangeHigh: 4680 },
      { period: 'Wk 6', historical: null, projected: 4290, rangeLow: 3920, rangeHigh: 4660 },
      { period: 'Wk 7', historical: null, projected: 4410, rangeLow: 3980, rangeHigh: 4840 },
    ],
    demandChart: [
      { period: 'Wk 1', historical: 4780, expected: 4810 },
      { period: 'Wk 2', historical: 4860, expected: 4890 },
      { period: 'Wk 3', historical: 4920, expected: 4960 },
      { period: 'Wk 4', historical: 4990, expected: 5040 },
      { period: 'Wk 5', historical: null, expected: 5090 },
      { period: 'Wk 6', historical: null, expected: 5140 },
      { period: 'Wk 7', historical: null, expected: 5180 },
    ],
    marketSignals: [
      { title: 'Feed-mill buying accelerating', detail: 'Industrial buyers competing with food wholesalers in Kaduna.' },
      { title: 'Feeder-road delays in Benue', detail: 'Aggregation timelines stretching by 2–3 days.' },
      { title: 'Regional stocks tightening', detail: 'Reserve buffers below seasonal midpoint.' },
    ],
    riskAlerts: [
      { severity: 'Shortage', message: 'Supply may fall below expected demand across southern wholesale lanes.' },
      { severity: 'Transit', message: 'Delivery disruption affecting availability from Benue aggregation points.' },
      { severity: 'Market', message: 'Regional market prices changing rapidly as buyers secure early stock.' },
    ],
    recommendation: {
      title: 'Early maize tightening signal detected',
      summary: 'Projected arrivals trail expected regional demand over the coming three-week horizon.',
      action: 'Explore alternative suppliers in northern consolidation hubs and advance purchasing commitments before spot rates firm further.',
    },
  },
};

export const FAQ_ITEMS = [
  {
    question: 'What is HarvestIQ?',
    answer:
      'HarvestIQ is an AI-powered food supply intelligence platform designed to help businesses understand supply, demand, market conditions, and potential operational risks.',
  },
  {
    question: 'Who is HarvestIQ designed for?',
    answer:
      'The platform is designed for food producers, wholesalers, distributors, retailers, and organizations involved in food supply and distribution.',
  },
  {
    question: 'How does HarvestIQ work?',
    answer:
      'HarvestIQ analyzes available operational and external data to identify patterns, forecast future conditions, and generate actionable insights.',
  },
  {
    question: 'Can HarvestIQ predict food prices?',
    answer:
      'The platform is designed to analyze market conditions and price trends. Predictions depend on available data, market conditions, and the specific products and regions being analyzed.',
  },
  {
    question: 'Does HarvestIQ replace existing systems?',
    answer:
      'No. HarvestIQ is intended to complement existing workflows and systems by providing additional intelligence and decision support.',
  },
  {
    question: 'Is HarvestIQ currently available?',
    answer:
      'HarvestIQ is currently being developed. Businesses interested in exploring the platform can join the early access program.',
  },
];
