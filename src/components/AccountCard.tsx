import React, { useState } from 'react';
import { Account } from '../types';
import { Plus, Minus, CreditCard } from 'lucide-react';

interface AccountCardProps {
  account: Account;
}

export default function AccountCard({ account }: AccountCardProps) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="rounded-lg bg-white shadow p-6 transform transition-all hover:scale-105 cursor-pointer"
         onClick={() => setShowActions(!showActions)}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{account.name}</h3>
          <p className="text-sm text-gray-500">{account.number}</p>
        </div>
        <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${
          account.type === 'credit' 
            ? 'bg-red-100 text-red-800' 
            : 'bg-primary-100 text-primary-800'
        }`}>
          {account.type.charAt(0).toUpperCase() + account.type.slice(1)}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-900">
          ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-500">Available Balance</p>
      </div>
      
      {showActions && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button className="flex items-center justify-center gap-1 p-2 text-sm rounded-md bg-primary-100 text-primary-700 hover:bg-primary-200">
            <Plus className="h-4 w-4" /> Add
          </button>
          <button className="flex items-center justify-center gap-1 p-2 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200">
            <Minus className="h-4 w-4" /> Pay
          </button>
          <button className="flex items-center justify-center gap-1 p-2 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
            <CreditCard className="h-4 w-4" /> Card
          </button>
        </div>
      )}
    </div>
  );
}