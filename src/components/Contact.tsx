import React from 'react';
import ContactInterface from './ContactInterface';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-agency-dark-lighter relative">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-agency-red/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-px bg-agency-red/10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 red-line">Entre em Contato</h2>
          <p className="text-gray-400 text-lg">
            Agende sua consulta ou envie sua mensagem. Estamos prontos para ajudar!
          </p>
        </div>

        <div className="flex justify-center">
          <ContactInterface />
        </div>
      </div>
    </section>
  );
};

export default Contact;
