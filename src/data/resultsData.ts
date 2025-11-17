
import React from 'react';
import { TrendingUp, Users, Award, BarChart3, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Benefit, Testimonial, Statistic, ChartData } from '../types/results';

export const statistics: Statistic[] = [
  {
    label: "Aumento em Leads",
    value: "+67%",
    percentage: 67
  },
  {
    label: "Crescimento em Vendas",
    value: "+38%",
    percentage: 38
  },
  {
    label: "Reconhecimento da Marca",
    value: "+89%",
    percentage: 89
  }
];

export const chartData: ChartData[] = [
  { 
    name: 'Sem Website', 
    reconhecimento: 10,  
    msg: "Presença apenas física, sua marca é quase invisível no digital" 
  }, 
  { 
    name: 'Website Básico', 
    reconhecimento: 65,  
    msg: "Reconhecida online, conquistar espaço e gerar vendas" 
  }, 
  { 
    name: 'Website Profissional', 
    reconhecimento: 95,  
    msg: "Marca de referência, vista como autoridade e desejo no mercado" 
  }, 
];

export const benefits: Benefit[] = [
  {
    icon: React.createElement(TrendingUp, { className: "w-10 h-10 text-agency-red" }),
    title: "Maior Conversão",
    description: "Transforme visitantes em clientes com um site focado em conversão"
  },
  {
    icon: React.createElement(Award, { className: "w-10 h-10 text-agency-red" }),
    title: "Design Personalizado",
    description: "Crie uma identidade visual única que comunica sua marca"
  },
  {
    icon: React.createElement(Users, { className: "w-10 h-10 text-agency-red" }),
    title: "Conteúdo Persuasivo",
    description: "Textos profissionais que engajam e convertem seu público-alvo"
  },
  {
    icon: React.createElement(BarChart3, { className: "w-10 h-10 text-agency-red" }),
    title: "SEO Otimizado",
    description: "Apareça nos primeiros resultados de busca do Google"
  },
  {
    icon: React.createElement(ShieldCheck, { className: "w-10 h-10 text-agency-red" }),
    title: "Credibilidade",
    description: "Conquiste a confiança dos clientes com um site profissional"
  },
  {
    icon: React.createElement(ShoppingCart, { className: "w-10 h-10 text-agency-red" }),
    title: "Vendas 24/7",
    description: "Sua empresa vendendo mesmo quando você está dormindo"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "",
    author: "",
    company: "",
    image: ""
  },
  {
    quote: "",
    author: "",
    company: "",
    image: ""
  },
  {
    quote: "",
    author: "",
    company: "",
    image: ""
  }
];
