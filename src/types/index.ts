export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: Date;
  category: string;
  recipient?: string;
}

export interface Account {
  id: string;
  type: 'checking' | 'savings' | 'credit';
  balance: number;
  number: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  accounts: Account[];
}