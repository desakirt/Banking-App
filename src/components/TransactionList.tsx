import React, { useState } from 'react';
import { format } from 'date-fns';
import { Transaction } from '../types';
import { ArrowDownRight, ArrowUpRight, Trash2, Edit2, MoreVertical } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions: initialTransactions }: TransactionListProps) {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Transactions</h3>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className={`rounded-full p-2 ${
                  transaction.type === 'credit' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'credit' ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                    <div className="relative">
                      <button 
                        onClick={() => setSelectedTransaction(selectedTransaction === transaction.id ? null : transaction.id)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                      </button>
                      
                      {selectedTransaction === transaction.id && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1">
                            <button
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                              onClick={() => console.log('Edit', transaction.id)}
                            >
                              <Edit2 className="h-4 w-4 mr-2" /> Edit
                            </button>
                            <button
                              className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 w-full"
                              onClick={() => deleteTransaction(transaction.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" /> Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <div>
                      <p className="text-sm text-gray-500">{transaction.category}</p>
                      <p className="text-xs text-gray-400">{transaction.recipient}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${
                        transaction.type === 'credit' ? 'text-primary-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {format(transaction.date, 'MMM d, yyyy')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}