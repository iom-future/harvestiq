import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const TEAM_MEMBERS = [
  {
    name: 'Chinedu Okafor',
    role: 'Co-Founder & Chief Executive Officer',
    bio: 'Leads strategy and commercial partnerships across Nigeria’s wholesale food corridors and institutional buyers.',
    image: `${BASE}images/team-chinedu.jpg`,
  },
  {
    name: 'Amina Bello',
    role: 'Co-Founder & Head of Predictive Intelligence',
    bio: 'Directs time-series forecasting, seasonal demand modeling, and anomaly detection systems.',
    image: `${BASE}images/team-amina.jpg`,
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Chief Technology Officer',
    bio: 'Architects the distributed data ingestion pipeline, geospatial supply graph, and enterprise platform.',
    image: `${BASE}images/team-tunde.jpg`,
  },
  {
    name: 'Ngozi Eze',
    role: 'Head of Supply Network Operations',
    bio: 'Oversees producer, aggregator, and cold-chain logistics integration across key regional trade routes.',
    image: `${BASE}images/team-ngozi.jpg`,
  },
  {
    name: 'Ibrahim Musa',
    role: 'Lead Market & Agricultural Economist',
    bio: 'Specializes in commodity price dynamics, harvest seasonality, and regional food-market behavior.',
    image: `${BASE}images/team-ibrahim.jpg`,
  },
  {
    name: 'Folake Ogunleye',
    role: 'Head of Product & Partner Experience',
    bio: 'Designs decision-support workflows and leads onboarding for wholesale and distribution pilot partners.',
    image: `${BASE}images/team-folake.jpg`,
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.team-card', {
          y: 22,
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
      id="team"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#111821] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
              Leadership &amp; Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7]">
              Grounded in data science and real-world food systems.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base leading-relaxed text-[#9AA8B5]">
              Our team combines machine learning, supply-chain engineering, and deep operational
              experience across Nigerian agricultural markets and distribution networks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="team-card group bg-[#0A0D12] border border-[#273440] rounded-[2px] overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#17212B]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width={600}
                  height={804}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6 border-t border-[#273440] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#F4F6F7]">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-[#D8A64A] mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#9AA8B5] leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
