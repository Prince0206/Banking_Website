export interface AuthResponse {
  success: boolean;
  token?: string;
  mfaRequired?: boolean;
  mfaMethod?: "sms" | "email" | "authenticator";
  user?: User;
  error?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Account {
  id: string;
  accountNumber: string;
  accountType: "savings" | "checking" | "investment";
  balance: number;
  currency: string;
  status: "active" | "inactive" | "frozen";
}

export interface Transaction {
  id: string;
  accountId: string;
  type: "debit" | "credit";
  amount: number;
  currency: string;
  description: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
  category?: string;
}

export interface Product {
  id: string;
  name: string;
  category: "savings" | "loan" | "investment" | "digital";
  description: string;
  features: string[];
  interestRate?: number;
  minimumBalance?: number;
  fees?: {
    type: string;
    amount: number;
  }[];
}
