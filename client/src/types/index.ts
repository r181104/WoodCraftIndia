export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ProjectCalculation {
  projectType: string;
  woodType: string;
  length: number;
  width: number;
  finishType: string;
  description?: string;
  materialCost: number;
  laborCost: number;
  finishCost: number;
  totalEstimate: number;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

export interface WoodTypeOption {
  value: string;
  label: string;
  price: number;
}

export interface ProjectTypeOption {
  value: string;
  label: string;
  multiplier: number;
}

export interface FinishTypeOption {
  value: string;
  label: string;
  cost: number;
}
