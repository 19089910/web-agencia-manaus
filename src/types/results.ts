
export interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: string;
}

export interface Statistic {
  label: string;
  value: string;
  percentage: number;
}

export interface ChartData {
  name: string;
  reconhecimento: number;
  msg: string;
}