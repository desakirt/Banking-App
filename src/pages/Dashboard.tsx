import React from 'react';
import AccountCard from '../components/AccountCard';
import TransactionList from '../components/TransactionList';
import { mockUser, mockTransactions } from '../data/mockData';
import { PlusCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Welcome back, {mockUser.name}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Here's an overview of your accounts and recent activity
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <PlusCircle className="h-5 w-5 mr-2" />
          New Transaction
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockUser.accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>

      <TransactionList transactions={mockTransactions} />
    </div>
  );
}