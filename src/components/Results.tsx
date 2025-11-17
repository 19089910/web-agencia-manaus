
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { benefits, testimonials, statistics, chartData } from '@/data/resultsData';

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-agency-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-agency-red/5"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 rounded-full bg-agency-red/3"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 red-line">Resultados Comprovados</h2>
          <p className="text-gray-400 text-lg">
            Um site profissional não é um gasto, é um investimento com retorno mensurável para o seu negócio
          </p>
        </div>
        
        {/* New hero message */}
        <div className="bg-gradient-to-r from-agency-dark-lighter to-agency-dark-light p-8 rounded-lg mb-20 border border-agency-red/20">
          <h3 className="text-3xl font-bold mb-6 text-center gradient-text">A solução para crescer sem ter que investir rios de dinheiro</h3>
          <p className="text-xl text-center text-gray-300 mb-8">
            Uma solução moderna para problemas modernos!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="bg-agency-dark-lighter p-6 rounded-lg border border-agency-red/10 flex-1 max-w-md">
              <div className="text-4xl font-bold text-agency-red mb-2">61%</div>
              <p className="text-gray-300">dos Brasileiros compram mais pela internet do que em lojas físicas.</p>
            </div>
            
            <div className="bg-agency-dark-lighter p-6 rounded-lg border border-agency-red/10 flex-1 max-w-md">
              <div className="text-xl font-bold text-white mb-2">Oportunidades perdidas</div>
              <p className="text-gray-300">A cada dia que você não está na internet, você está perdendo a maioria das suas oportunidades de venda!</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6 red-line-left">Por que você precisa ter um site para o seu negócio</h3>
            <p className="text-gray-300 mb-8">
              Ter um site profissional é essencial para alcançar sucesso online. Com nossos serviços de construção de sites, 
              você terá um site que é mais do que apenas uma presença na web. Você terá um site que atrai e converte 
              clientes. Com um site bem projetado, você ganhará visibilidade, credibilidade e confiança dos seus clientes.
            </p>
            <p className="text-gray-300 mb-8">
              E a melhor parte? Quando você escolhe o nosso serviço de criação de sites, você pode começar a ver os 
              resultados imediatamente. Imagine ter um site incrível que atraia mais clientes, aumenta sua receita 
              e o ajuda a alcançar o sucesso que você merece. É possível com o nosso serviço de criação de sites.
            </p>

            <div className="space-y-6">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{stat.label}</span>
                    <span className="text-agency-red font-bold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-agency-red h-2 rounded-full" style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-agency-dark-light p-5 rounded-lg h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div style={{
                          backgroundColor: '#222',
                          border: '1px solid #333',
                          padding: '10px',
                          borderRadius: '6px'
                        }}>
                          <p style={{ color: '#fff', margin: 0 }}>{label}</p>
                          <p style={{ color: '#ff3333', margin: 0 }}>
                            Reconhecimento: {payload[0].value}%
                          </p>
                          <p style={{ color: '#ccc', fontSize: '0.85rem', marginTop: '4px' }}>
                            {payload[0].payload.msg}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="reconhecimento" fill="#ff3333" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">Benefícios que você pode esperar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-agency-dark-lighter p-6 rounded-lg border border-agency-red/10 hover:border-agency-red/30 transition-all hover:translate-y-[-5px]">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/**
        <h3 className="text-3xl font-bold mb-10 text-center">O Que Nossos Clientes Dizem</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-agency-dark-lighter p-6 rounded-lg border border-agency-dark-light relative">
              <div className="absolute -top-5 left-6 text-agency-red text-5xl">"</div>
              <p className="text-gray-300 mb-8 relative z-10 pt-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-agency-red"
                />
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div> 
        */}
      </div>
    </section>
  );
};

export default Results;
