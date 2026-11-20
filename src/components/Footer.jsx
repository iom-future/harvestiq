import { HarvestIQLogo } from './Logo';

const FOOTER_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Early Access', href: '#early-access' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0D12] py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-10 border-b border-[#273440]">
          <div className="max-w-sm space-y-3">
            <HarvestIQLogo />
            <p className="font-mono text-xs text-[#D8A64A]">
              See the Supply Before It Moves.
            </p>
            <p className="text-sm text-[#9AA8B5] leading-relaxed">
              HarvestIQ is building intelligent tools to help food businesses make better decisions
              across the supply chain.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#9AA8B5] hover:text-[#F4F6F7] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#9AA8B5]">
          <p>© 2026 HarvestIQ. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Food Supply Intelligence Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
