import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Code, Smartphone, Database } from "lucide-react";

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}> = ({ icon, title, description, benefits }) => (
  <Card className="bg-agency-dark-lighter border-agency-dark-light hover:border-agency-red transition-all duration-300 h-full">
    <CardHeader>
      <div className="text-agency-red mb-4">{icon}</div>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <CardDescription className="text-gray-400">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="text-agency-red mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <span className="text-gray-300">{benefit}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Websites Institucionais",
      description:
        "Sites profissionais que representam sua marca com excelência",
      benefits: [
        "Design personalizado e responsivo",
        "Otimizado para SEO e conversões",
        "Integração com redes sociais e analytics",
        "Experiência do usuário de alta qualidade",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web Personalizado rápido e seguro",
      description: "Soluções web sob medida para necessidades específicas",
      benefits: [
        "Funcionalidades específicas para seu negócio",
        "Sistemas internos e portais",
        "APIs e integrações com outros sistemas",
        "Manutenção e suporte contínuos",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Design Responsivo onde 80% dos clientes compram",
      description: "Sites que funcionam perfeitamente em todos os dispositivos",
      benefits: [
        "Experiência consistente em desktop e mobile",
        "Carregamento rápido em qualquer dispositivo",
        "Adaptação automática a diferentes telas",
        "Melhor posicionamento no Google",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Softwares como Serviço",
      description: "Aplicações web avançadas com modelo de assinatura",
      benefits: [
        "Desenvolvimento de plataformas completas",
        "Sistemas de pagamento e assinaturas",
        "Dashboards e relatórios personalizados",
        "Hospedagem e manutenção inclusos",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-agency-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-96 bg-gradient-to-b from-transparent via-agency-red/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-agency-red/30 to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 red-line">Nossos Serviços</h2>
          <p className="text-gray-400 text-lg">
            Oferecemos soluções digitais completas para impulsionar o
            crescimento do seu negócio com foco em resultados mensuráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
