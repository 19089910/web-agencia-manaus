import { LucideIcon } from "lucide-react";

export type SaasProductId =
  | "ecommerce"
  | "reservation"
  | "school"
  | "doctor";

export interface SaasFeature {
  title: string;
  description: string;
}

export interface SaasProduct {
  id: SaasProductId;
  icon: LucideIcon;
  title: string;
  description: string;
  features: SaasFeature[];
  imageUrl: string;
  isPopular?: boolean;
  shortTitle?: string;
  saibaMaisUrl?: string;
  demoUrl?: string;
}
