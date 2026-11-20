import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HarvestIQLogo } from './Logo';

const NAV_LINKS = [
  { id: 'platform', label: 'Platform', href: '#platform' },
  { id: 'intelligence', label: 'Intelligence', href: '#intelligence' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'team', label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isClickScrollingRef = useRef(false);
  const unlockTimerRef = useRef(null);

  const lockScrollSpy = () => {
    isClickScrollingRef.current = true;
    if (unlockTimerRef.current) {
      window.clearTimeout(unlockTimerRef.current);
    }
    unlockTimerRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const updateOnScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      // Keep the clicked section active while smooth-scrolling so the underline
      // appears directly on the target instead of stepping through intermediate links.
      if (isClickScrollingRef.current) return;

      const offset = y + 140;
      let current = '';

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const sectionTop = el.getBoundingClientRect().top + y;
        if (offset >= sectionTop) {
          current = link.id;
        }
      }

      setActiveSection(current);
    };

    updateOnScroll();
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateOnScroll);
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    lockScrollSpy();
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0A0D12]/92 backdrop-blur-md border-b border-[#273440]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => {
            setActiveSection('');
            lockScrollSpy();
          }}
          className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D8A64A] rounded-xs"
          aria-label="HarvestIQ Home"
        >
          <HarvestIQLogo />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 text-sm tracking-wide transition-colors duration-200 border-b-2 ${
                  isActive
                    ? 'text-[#F4F6F7] border-[#D8A64A]'
                    : 'text-[#9AA8B5] border-transparent hover:text-[#F4F6F7]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#early-access"
            onClick={() => {
              setActiveSection('');
              lockScrollSpy();
            }}
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
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`py-2 text-sm border-b ${
                    isActive
                      ? 'text-[#F4F6F7] border-[#D8A64A]'
                      : 'text-[#9AA8B5] border-[#273440]/50 hover:text-[#F4F6F7]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#early-access"
            onClick={() => {
              setActiveSection('');
              lockScrollSpy();
              setMobileOpen(false);
            }}
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
