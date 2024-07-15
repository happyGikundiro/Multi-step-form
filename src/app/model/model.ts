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

  export interface adds{
    addon:string;
    description: string;
    duration:{
      monthly:{
        price: string;
        addToTotal: number
      }
      yearly:{
        price: string;
        addToTotal: number
      }
    }
    selected?: boolean;
  }