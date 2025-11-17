
import React from 'react';
import { Button } from '@/components/ui/button';
import { heroStats } from '@/constants/heroData';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Red lines decoration */}
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-agency-red opacity-50"></div>
        <div className="absolute top-1/3 right-0 w-1/4 h-px bg-agency-red opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-1/2 h-px bg-agency-red opacity-40"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-agency-dark opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in">
            Transforme seu negócio com uma <span className="gradient-text">presença digital</span> poderosa
          </h1>
          
          <p className="text-lg sm:text-xl mb-8 text-gray-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Desenvolvimento web personalizado que gera resultados mensuráveis para sua empresa. Aumente vendas, visibilidade e conversões com uma plataforma web profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-agency-red hover:bg-agency-red-dark text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              Conheça Nossos Serviços
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              Ver Portfólio
            </Button>
          </div>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-agency-red">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Red animated indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff3333" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
