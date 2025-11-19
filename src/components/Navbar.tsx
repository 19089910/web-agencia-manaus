import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { navigationItems } from "@/constants/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-agency-dark shadow-lg py-2"
          : "bg-transparent py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
        >
          <span className="text-agency-red">Web</span>Agencia Manaus
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-agency-red transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="border-agency-red text-agency-red hover:bg-agency-red hover:text-white"
          >
            Solicitar Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-agency-dark-lighter fixed inset-0 pt-16 z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-agency-red transition-colors text-lg py-2"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="border-agency-red text-agency-red hover:bg-agency-red hover:text-white w-full py-6 mt-4"
            onClick={closeMenu}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
