import { SaasProduct } from "../types/saas";
import {
  Store,
  School,
  Calendar,
  Stethoscope,
} from "lucide-react";

export const saasProducts: SaasProduct[] = [
    {
    id: "doctor",
    icon: Stethoscope,
    title: "Doutor Agenda - Gestão Inteligente para Clínicas",
    shortTitle: "Doutor Agenda",
    description:
      "O sistema de gestão nº 1 para clínicas modernas. Controle múltiplos especialistas, agendas complexas e o relacionamento com pacientes em uma plataforma rápida, segura e pronta para escalar.",
    features: [
      {
        title: "Gestão Multi-Especialista",
        description:
          "Configure horários personalizados, valores por profissional e perfis completos para cada médico da sua clínica",
      },
      {
        title: "Agendamento Inteligente & CRM",
        description:
          "Histórico centralizado de pacientes, prevenção automática de conflitos de agenda e dados estruturados",
      },
      {
        title: "Infraestrutura de Alto Desempenho",
        description:
          "Sistema rápido com tecnologia Next.js, autenticação segura e arquitetura preparada para crescimento",
      },
      {
        title: "Planos e Assinaturas Flexíveis",
        description:
          "Gerencie planos, pagamentos e assinatura do software diretamente pelo painel, sem fidelidade",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f6f9?auto=format&fit=crop&q=80&w=1740",
    isPopular: true,
    // saibaMaisUrl: "/doutor",
    demoUrl: "https://doutor.webmanaus.com.br",
  },
  {
    id: "ecommerce",
    icon: Store,
    title: "Plataforma de E-commerce Completa",
    shortTitle: "E-commerce",
    description:
      "Uma solução completa para vender produtos online, gerenciar estoque, processar pagamentos e entregar uma experiência de compra excepcional aos seus clientes.",
    features: [
      {
        title: "Processamento de Pagamentos Integrado",
        description: "Aceite múltiplas formas de pagamento com total segurança",
      },
      {
        title: "Gestão de Estoque Automatizada",
        description:
          "Controle seu inventário em tempo real e evite vendas sem estoque",
      },
      {
        title: "Relatórios e Análises Detalhados",
        description:
          "Visualize o desempenho de vendas e comportamento dos clientes",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1740",
    isPopular: true,
  },
  {
    id: "reservation",
    icon: Calendar,
    title: "Sistema de Reserva de Assentos",
    shortTitle: "Reserva de Assentos",
    description:
      "Solução ideal para cinemas, teatros, eventos e transportes que precisam de um sistema eficiente de reservas e venda de ingressos online.",
    features: [
      {
        title: "Visualização Interativa de Assentos",
        description:
          "Mapa visual para seleção de lugares com status em tempo real",
      },
      {
        title: "Gestão de Eventos e Sessões",
        description:
          "Configure vários eventos com diferentes layouts de assentos",
      },
      {
        title: "Emissão de Ingressos e QR Codes",
        description:
          "Emita ingressos digitais com códigos verificáveis para controle de acesso",
      },
    ],
    imageUrl:
      "https://res.cloudinary.com/dms5ua8nm/image/upload/v1763400053/reservaAssentosHome.7fd26c43e26bba263159_vh3vrc.png",
  },
  {
    id: "school",
    icon: School,
    title: "Sistema de Gestão Escolar",
    shortTitle: "Gestão Escolar",
    description:
      "Uma plataforma completa para instituições de ensino gerenciarem alunos, professores, notas, frequência, financeiro e comunicação.",
    features: [
      {
        title: "Portal de Alunos e Responsáveis",
        description:
          "Acesso às notas, frequência, materiais didáticos e comunicados",
      },
      {
        title: "Sistema de Avaliação Integrado",
        description:
          "Crie provas, atribua notas e gere boletins automaticamente",
      },
      {
        title: "Gestão Financeira Completa",
        description:
          "Controle de mensalidades, pagamentos e emissão de boletos",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1740",
  },
];
