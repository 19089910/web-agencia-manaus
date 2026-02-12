import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { saasProducts } from "@/data/saasProducts";

const SaasProducts: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-agency-dark-lighter relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-agency-red opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-1/4 h-px bg-agency-red opacity-15"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 red-line">
            Nossas Soluções SaaS
          </h2>
          <p className="text-gray-400 text-lg">
            Plataformas profissionais prontas para uso imediato com todas as
            funcionalidades que seu negócio precisa
          </p>
        </div>

        <Tabs defaultValue="ecommerce" className="max-w-5xl mx-auto">
          <TabsList
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
              gap-2
              mb-12
              bg-agency-dark
              h-auto
            "
          >
            {saasProducts.map((product) => {
              const Icon = product.icon;

              return (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    justify-center
                    gap-2
                    px-2
                    py-3
                    md:py-2
                    text-center
                    h-full
                    w-full
                    data-[state=active]:bg-agency-red
                    data-[state=active]:text-white
                  "
                >
                  <Icon className="h-5 w-5 shrink-0" />

                  <span
                    className="
                      text-xs
                      md:text-sm
                      leading-tight
                      md:leading-snug
                      text-center
                      md:text-left
                      overflow-hidden
                      line-clamp-2
                      break-words
                      max-w-full
                    "
                  >
                    {product.shortTitle || product.title}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {saasProducts.map((product) => (
            <TabsContent
              key={product.id}
              value={product.id}
              className="border-0 p-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 red-line-left">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-agency-red/10 rounded-full p-1 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-agency-red"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-white">
                            {feature.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {(product.saibaMaisUrl || product.demoUrl) && (
                    <div className="flex gap-4">
                      {product.saibaMaisUrl && (
                        <Button asChild className="bg-agency-red hover:bg-agency-red-dark text-white">
                          <a
                            href={product.saibaMaisUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Saiba Mais
                          </a>
                        </Button>
                      )}

                      {product.demoUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={product.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Testar Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-agency-dark p-6 rounded-lg border border-agency-dark-light relative overflow-hidden">
                  {product.isPopular && (
                    <div className="absolute top-0 right-0 w-20 h-20">
                      <div className="absolute transform rotate-45 bg-agency-red text-white font-semibold py-1 right-[-35px] top-[30px] w-[170px] text-center text-sm">
                        Popular
                      </div>
                    </div>
                  )}

                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="rounded-md w-full h-auto shadow-lg border border-gray-800"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SaasProducts;
