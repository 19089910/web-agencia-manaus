
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { portfolioItems } from '@/data/portfolioItems';

const Portfolio: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-agency-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 red-line">Nosso Portfólio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Confira alguns dos projetos de landing pages e websites que desenvolvemos para nossos clientes. Cada projeto é único e personalizado para atender às necessidades específicas de cada negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-agency-dark border border-agency-dark-light hover:border-agency-red/50 transition-all duration-300 group">
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <div className="relative h-48 sm:h-60 overflow-hidden group border border-red-500">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ transitionDuration: '2s' }}
                      className={`w-full h-auto transition-transform ease-linear translate-y-0 
                        ${item.id === 6 
                          ? "group-hover:translate-y-[-10%]" // só pro Açougue Rio Negro
                          : "group-hover:translate-y-[-85%]"} // padrão pros outros
                      `}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="text-xs font-medium text-agency-red uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-white mt-1">{item.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-3 sm:p-5">
                <div className="flex flex-wrap justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-400">{item.category}</span>
                {item.link !== "#" && (
                  <a 
                    href={item.link} 
                    className="text-agency-red hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300 flex items-center"
                  >
                    Ver Projeto
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
