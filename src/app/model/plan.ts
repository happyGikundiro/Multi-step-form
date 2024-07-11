export interface Plan {
    plan: string;
    icon: string;
    duration: {
      monthly: {
        price: string;
        addToTotal: number;
        promo: string;
      }
      yearly: {
        price: string;
        addToTotal: number;
        promo: string;
      },
    }
  
  }