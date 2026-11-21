import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const TESTIMONIALS = [
  {
    quote:
      'In fresh produce wholesale, knowing a Kano tomato surge is arriving ten days early changes how you price, buy, and allocate cold-room space. HarvestIQ turns phone calls and guesswork into a structured operating picture.',
    author: 'Babajide Adewale',
    role: 'Managing Director, Mile 12 Produce Trading Co.',
    location: 'Lagos',
    image: `${BASE}images/testimonial-babajide.jpg`,
  },
  {
    quote:
      'Our biggest cost is not fuel—it is dispatching trucks into corridors where demand has already softened or supply is delayed at aggregation hubs. Having forward corridor signals helps us route volume before perishable value drops.',
    author: 'Hauwa Abdullahi',
    role: 'Head of Cold-Chain Logistics, Northern Corridor Foods',
    location: 'Abuja & Kaduna',
    image: `${BASE}images/testimonial-hauwa.jpg`,
  },
  {
    quote:
      'Supermarket produce teams constantly walk a tightrope between empty shelves and end-of-week markdowns. Seeing regional supply and demand side by side makes weekly procurement far more disciplined.',
    author: 'Emeka Nwosu',
    role: 'Fresh Procurement Lead, Coastal Grocer Group',
    location: 'Port Harcourt',
    image: `${BASE}images/testimonial-emeka.jpg`,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.testimonial-card', {
          y: 20,
          opacity: 0,
          duration: 0.65,
          stagger: 0.1,
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
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0A0D12] border-b border-[#273440]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D8A64A] mb-4">
              Partner Perspectives
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#F4F6F7]">
              Built alongside operators who move food every day.
            </h2>
          </div>
          <p className="text-sm text-[#9AA8B5] max-w-sm leading-relaxed">
            Insights from wholesalers, distributors, and retail procurement leaders shaping the
            HarvestIQ early access program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[#273440]">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.author}
              className="testimonial-card p-7 sm:p-8 bg-[#111821]/55 border-r border-b border-[#273440] flex flex-col justify-between gap-8"
            >
              <blockquote className="text-base leading-relaxed text-[#F4F6F7]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="pt-5 border-t border-[#273440]/80 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.author}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-12 h-12 shrink-0 object-cover object-top rounded-[2px] border border-[#273440] bg-[#17212B]"
                />
                <div className="min-w-0">
                  <p className="font-display text-base font-medium text-[#F4F6F7]">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#9AA8B5] mt-0.5 leading-snug">{item.role}</p>
                  <p className="font-mono text-[11px] text-[#D8A64A] mt-1">
                    {item.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
