
export interface SaasProduct {
  id: string;
  title: string;
  description: string;
  features: SaasFeature[];
  imageUrl: string;
  isPopular?: boolean;
}

export interface SaasFeature {
  title: string;
  description: string;
}
