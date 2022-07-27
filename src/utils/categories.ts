import { Asterisk, Buildings, Car, FirstAid, ForkKnife, Gift, PawPrint, Popcorn, ShoppingCart, TShirt } from 'phosphor-react';
import { Category } from '../models/category';

//Geral - Roupas - Restaurante - Transporte - Entretenimento - Moradia - Mercado - Saúde - Pet - Presentes

const categories: Category[] = [
  {
    id: 0,
    name: 'Geral',
    text: 'text-slate-700',
    bg: 'bg-slate-100 hover:bg-slate-200',
    icon: Asterisk,
  },
  {
    id: 1,
    name: 'Roupas',
    text: 'text-blue-700',
    bg: 'bg-blue-100 hover:bg-blue-200',
    icon: TShirt,
  },
  {
    id: 2,
    name: 'Restaurante',
    text: 'text-orange-700',
    bg: 'bg-orange-100 hover:bg-orange-200',
    icon: ForkKnife,
  },
  {
    id: 3,
    name: 'Transporte',
    text: 'text-teal-700',
    bg: 'bg-teal-100 hover:bg-teal-200',
    icon: Car,
  },
  {
    id: 4,
    name: 'Entretenimento',
    text: 'text-red-700',
    bg: 'bg-red-100 hover:bg-red-200',
    icon: Popcorn,
  },
  {
    id: 5,
    name: 'Moradia',
    text: 'text-cyan-700',
    bg: 'bg-cyan-100 hover:bg-cyan-200',
    icon: Buildings,
  },
  {
    id: 6,
    name: 'Mercado',
    text: 'text-amber-700',
    bg: 'bg-amber-100 hover:bg-amber-200',
    icon: ShoppingCart,
  },
  {
    id: 7,
    name: 'Saúde',
    text: 'text-rose-700',
    bg: 'bg-rose-100 hover:bg-rose-200',
    icon: FirstAid,
  },
  {
    id: 8,
    name: 'Pet',
    text: 'text-lime-700',
    bg: 'bg-lime-100 hover:bg-lime-200',
    icon: PawPrint,
  },
  {
    id: 9,
    name: 'Presentes',
    text: 'text-fuchsia-700',
    bg: 'bg-fuchsia-100 hover:bg-fuchsia-200',
    icon: Gift,
  },
];

export default categories;
