import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HarvestIQLogo } from './Logo';

const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0D12]/92 backdrop-blur-md border-b border-[#273440]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D8A64A] rounded-xs"
          aria-label="HarvestIQ Home"
        >
          <HarvestIQLogo />
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#9AA8B5] hover:text-[#F4F6F7] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#early-access"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-[#D8A64A] text-[#0A0D12] hover:bg-[#e2b45d] transition-colors duration-200 rounded-[2px]"
          >
            Request Early Access
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[#9AA8B5] hover:text-[#F4F6F7] border border-[#273440] rounded-[2px]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0D12] border-b border-[#273440] px-5 py-5 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#9AA8B5] hover:text-[#F4F6F7] py-1.5 border-b border-[#273440]/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#early-access"
            onClick={() => setMobileOpen(false)}
            className="inline-flex w-full items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-[#D8A64A] text-[#0A0D12] rounded-[2px]"
          >
            Request Early Access
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
