type Company = {
  name: string;
  description: string;
  logoUrl: string;
  stockPrice: number;
  stockPriceChange: number;
  stockPriceChangePercentage: number;
  industry: string;
  foundedYear: number;
  headquarters: {
    city: string;
    state: string;
    country: string;
  };
  websiteUrl: string;
  ceo: string;
  employees: number;
  revenue: number;
  netIncome: number;
  products: string[];
  competitors: string[];
};
