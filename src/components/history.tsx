import {
  Buildings,
  Car,
  ForkKnife,
  Popcorn,
  ShoppingCart,
  TShirt,
} from 'phosphor-react';
import { FC } from 'react';
import { Expense as ExpenseModel } from '../models/expense';
import { getMonth } from '../utils/getMonth';
import Expense from './expense';

const History: FC = () => {
  const data: ExpenseModel[] = [
    {
      category: {
        id: 1,
        name: 'Roupas',
        style: {
          iconColor: 'text-sky-700',
          iconColorDark: 'text-slate-700 hover:text-sky-700',
          textLight: 'text-sky-50',
          textDark: 'text-sky-300',
          placeholder: 'placeholder-sky-300',
          bg: 'bg-sky-100 hover:bg-sky-200',
          bgDark: 'bg-slate-100 hover:bg-sky-200',
          card: 'bg-gradient-to-r from-sky-500 to-sky-800',
          icon: TShirt,
        },
      },
      date: '2022-07-30',
      method: 'card',
      price: '500,00',
      name: 'xd',
    },
    {
      category: {
        id: 2,
        name: 'Restaurante',
        style: {
          iconColor: 'text-amber-700',
          iconColorDark: 'text-slate-700 hover:text-amber-700',
          textLight: 'text-amber-50',
          textDark: 'text-amber-300',
          placeholder: 'placeholder-amber-300',
          bg: 'bg-amber-100 hover:bg-amber-200',
          bgDark: 'bg-slate-100 hover:bg-amber-200',
          card: 'bg-gradient-to-r from-amber-500 to-amber-800',
          icon: ForkKnife,
        },
      },
      date: '2022-05-22',
      method: 'money',
      price: '1.000,20',
      name: 'Outback',
    },
    {
      category: {
        id: 3,
        name: 'Transporte',
        style: {
          iconColor: 'text-green-700',
          iconColorDark: 'text-slate-700 hover:text-green-700',
          textLight: 'text-green-50',
          textDark: 'text-green-300',
          placeholder: 'placeholder-green-300',
          bg: 'bg-green-100 hover:bg-green-200',
          bgDark: 'bg-slate-100 hover:bg-green-200',
          card: 'bg-gradient-to-r from-green-500 to-green-800',
          icon: Car,
        },
      },
      date: '2022-05-22',
      method: 'money',
      price: '1.000,20',
      name: 'Outback',
    },
    {
      category: {
        id: 4,
        name: 'Entretenimento',
        style: {
          iconColor: 'text-pink-700',
          iconColorDark: 'text-slate-700 hover:text-pink-700',
          textLight: 'text-pink-50',
          textDark: 'text-pink-300',
          placeholder: 'placeholder-pink-300',
          bg: 'bg-pink-100 hover:bg-pink-200',
          bgDark: 'bg-slate-100 hover:bg-pink-200',
          card: 'bg-gradient-to-r from-pink-500 to-pink-800',
          icon: Popcorn,
        },
      },
      date: '2022-05-22',
      method: 'money',
      price: '1.000,20',
      name: 'Outback',
    },
    {
      category: {
        id: 5,
        name: 'Moradia',
        style: {
          iconColor: 'text-teal-700',
          iconColorDark: 'text-slate-700 hover:text-teal-700',
          textLight: 'text-teal-50',
          textDark: 'text-teal-300',
          placeholder: 'placeholder-teal-300',
          bg: 'bg-teal-100 hover:bg-teal-200',
          bgDark: 'bg-slate-100 hover:bg-teal-200',
          card: 'bg-gradient-to-r from-teal-500 to-teal-800',
          icon: Buildings,
        },
      },
      date: '2022-05-22',
      method: 'money',
      price: '1.000,20',
      name: 'Outback',
    },
    {
      category: {
        id: 5,
        name: 'Moradia',
        style: {
          iconColor: 'text-teal-700',
          iconColorDark: 'text-slate-700 hover:text-teal-700',
          textLight: 'text-teal-50',
          textDark: 'text-teal-300',
          placeholder: 'placeholder-teal-300',
          bg: 'bg-teal-100 hover:bg-teal-200',
          bgDark: 'bg-slate-100 hover:bg-teal-200',
          card: 'bg-gradient-to-r from-teal-500 to-teal-800',
          icon: Buildings,
        },
      },
      date: '2022-05-22',
      method: 'money',
      price: '1.000,20',
      name: 'Outback',
    },
  ];

  return (
    <div className='w-2/5 h-screen max-h-screen p-4 mx-auto mb-8 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold text-purple-900'>
        HISTÓRICO DE GASTOS
      </h1>
      <h2 className='mb-4 text-lg font-bold text-purple-700'>
        {getMonth(new Date().toISOString(), true)} - {new Date().getFullYear()}
      </h2>
      <div className='h-full space-y-4 overflow-y-auto max-h-96'>
        {data.map((expense) => (
          <Expense data={expense} />
        ))}
      </div>
    </div>
  );
};

export default History;
