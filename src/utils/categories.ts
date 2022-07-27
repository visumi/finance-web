import {
  Asterisk,
  Buildings,
  Car,
  FirstAid,
  ForkKnife,
  Gift,
  PawPrint,
  Popcorn,
  ShoppingCart,
  TShirt,
} from 'phosphor-react';
import { Category } from '../models/category';

//Geral - Roupas - Restaurante - Transporte - Entretenimento - Moradia - Mercado - Saúde - Pet - Presentes

const categories: Category[] = [
  {
    id: 0,
    name: 'Geral',
    style: {
      iconColor: 'text-slate-700',
      iconColorDark: 'text-slate-700',
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      bgDark: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 1,
    name: 'Roupas',
    style: {
      iconColor: 'text-blue-700',
      iconColorDark: 'text-slate-700 hover:text-blue-700',
      textLight: 'text-blue-50',
      textDark: 'text-blue-300',
      placeholder: 'placeholder-blue-300',
      bg: 'bg-blue-100 hover:bg-blue-200',
      bgDark: 'bg-slate-100 hover:bg-blue-200',
      card: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700',
      icon: TShirt,
    },
  },
  {
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
      card: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700',
      icon: ForkKnife,
    },
  },
  {
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
      card: 'bg-gradient-to-r from-green-400 via-green-500 to-green-700',
      icon: Car,
    },
  },
  {
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
      card: 'bg-gradient-to-r from-pink-400 via-pink-500 to-pink-700',
      icon: Popcorn,
    },
  },
  {
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
      card: 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-700',
      icon: Buildings,
    },
  },
  {
    id: 6,
    name: 'Mercado',
    style: {
      iconColor: 'text-violet-700',
      iconColorDark: 'text-slate-700 hover:text-violet-700',
      textLight: 'text-violet-50',
      textDark: 'text-violet-300',
      placeholder: 'placeholder-violet-300',
      bg: 'bg-violet-100 hover:bg-violet-200',
      bgDark: 'bg-slate-100 hover:bg-violet-200',
      card: 'bg-gradient-to-r from-violet-400 via-violet-500 to-violet-700',
      icon: ShoppingCart,
    },
  },
  {
    id: 7,
    name: 'Saúde',
    style: {
      iconColor: 'text-red-700',
      iconColorDark: 'text-slate-700 hover:text-red-700',
      textLight: 'text-red-50',
      textDark: 'text-red-300',
      placeholder: 'placeholder-red-300',
      bg: 'bg-red-100 hover:bg-red-200',
      bgDark: 'bg-slate-100 hover:bg-red-200',
      card: 'bg-gradient-to-r from-red-400 via-red-500 to-red-700',
      icon: FirstAid,
    },
  },
  {
    id: 8,
    name: 'Pet',
    style: {
      iconColor: 'text-orange-700',
      iconColorDark: 'text-slate-700 hover:text-orange-700',
      textLight: 'text-orange-50',
      textDark: 'text-orange-300',
      placeholder: 'placeholder-orange-300',
      bg: 'bg-orange-100 hover:bg-orange-200',
      bgDark: 'bg-slate-100 hover:bg-orange-200',
      card: 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700',
      icon: PawPrint,
    },
  },
  {
    id: 9,
    name: 'Presentes',
    style: {
      iconColor: 'text-cyan-700',
      iconColorDark: 'text-slate-700 hover:text-cyan-700',
      textLight: 'text-cyan-50',
      textDark: 'text-cyan-300',
      placeholder: 'placeholder-cyan-300',
      bg: 'bg-cyan-100 hover:bg-cyan-200',
      bgDark: 'bg-slate-100 hover:bg-cyan-200',
      card: 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700',
      icon: Gift,
    },
  },
];

export default categories;
