import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const SEGMENTS = [
  {
    title: 'Wholesalers',
    description:
      'Improve sourcing decisions, anticipate market changes, and manage inventory more effectively.',
    image: `${BASE}images/segment-wholesalers.jpg`,
    alt: 'Modern fresh produce wholesale distribution hall with stacked crates under warm architectural lighting',
    span: 'lg:col-span-7',
  },
  {
    title: 'Distributors',
    description:
      'Understand supply availability, plan movements, and identify potential disruptions earlier.',
    image: `${BASE}images/segment-distributors.jpg`,
    alt: 'Cold-chain refrigerated transport trucks docked at an architectural logistics center at dusk',
    span: 'lg:col-span-5',
  },
  {
    title: 'Producers',
    description:
      'Understand market demand, anticipate purchasing opportunities, and make more informed production and distribution decisions.',
    image: `${BASE}images/segment-producers.jpg`,
    alt: 'Freshly harvested heirloom tomatoes and peppers sorted in matte black crates inside a modern packing facility',
    span: 'lg:col-span-4',
  },
  {
    title: 'Retailers',
    description:
      'Forecast demand, plan inventory, and reduce the risk of shortages or excess stock.',
    image: `${BASE}images/segment-retailers.jpg`,
    alt: 'Contemporary architectural fresh-food retail market with dark steel displays under warm spotlights',
    span: 'lg:col-span-4',
  },
  {
    title: 'Food Supply Organizations',
    description:
      'Gain visibility into regional supply patterns and support better food distribution planning.',
    image: `${BASE}images/segment-organizations.jpg`,
    alt: 'High-angle view inside a regional food supply coordination warehouse with organized grain sacks and produce staging zones',
    span: 'lg:col-span-4',
  },
];

export default function WhoIsItForSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.segment-card', {
          y: 22,
          opacity: 0,
          duration: 0.7,
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
      id="solutions"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0A0D12] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
            Built for Food Businesses
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7]">
            Intelligence for every stage of the food supply chain.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {SEGMENTS.map((segment) => (
            <article
              key={segment.title}
              className={`segment-card group relative overflow-hidden bg-[#111821] border border-[#273440] rounded-[2px] flex flex-col justify-between ${segment.span}`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#0A0D12]">
                <img
                  src={segment.image}
                  alt={segment.alt}
                  width={960}
                  height={536}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 border-t border-[#273440]">
                <h3 className="font-display text-xl font-semibold text-[#F4F6F7] mb-2">
                  {segment.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9AA8B5]">
                  {segment.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
