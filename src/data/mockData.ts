import { Account, Transaction, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Kirtan Desai',
  email: 'kirtan.desai@example.com',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
  accounts: [
    {
      id: '1',
      type: 'checking',
      balance: 8420.50,
      number: '**** 1234',
      name: 'Main Checking'
    },
    {
      id: '2',
      type: 'savings',
      balance: 25750.75,
      number: '**** 5678',
      name: 'Emergency Savings'
    },
    {
      id: '3',
      type: 'credit',
      balance: -1340.00,
      number: '**** 9012',
      name: 'Credit Card'
    }
  ]
};

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    amount: 85.50,
    description: 'Grocery Store',
    date: new Date('2024-03-15'),
    category: 'Shopping',
    recipient: 'Whole Foods'
  },
  {
    id: '2',
    type: 'credit',
    amount: 3500.00,
    description: 'Salary Deposit',
    date: new Date('2024-03-14'),
    category: 'Income',
    recipient: 'Employer Inc.'
  },
  {
    id: '3',
    type: 'debit',
    amount: 45.00,
    description: 'Restaurant',
    date: new Date('2024-03-13'),
    category: 'Dining',
    recipient: 'Local Bistro'
  },
  {
    id: '4',
    type: 'debit',
    amount: 120.00,
    description: 'Electric Bill',
    date: new Date('2024-03-12'),
    category: 'Utilities',
    recipient: 'Power Co.'
  }
];