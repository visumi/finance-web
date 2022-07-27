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
      textLight: 'text-slate-50',
      textDark: 'text-slate-300',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 1,
    name: 'Roupas',
    style: {
      iconColor: 'text-blue-700',
      textLight: 'text-blue-50',
      textDark: 'text-blue-300',
      placeholder: 'placeholder-blue-300',
      bg: 'bg-blue-100 hover:bg-blue-200',
      card: 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700',
      icon: TShirt,
    },
  },
  {
    id: 2,
    name: 'Restaurante',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 3,
    name: 'Transporte',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 4,
    name: 'Entretenimento',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 5,
    name: 'Moradia',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 6,
    name: 'Mercado',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 7,
    name: 'Saúde',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 8,
    name: 'Pet',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
  {
    id: 9,
    name: 'Presentes',
    style: {
      iconColor: 'text-slate-700',
      textLight: '',
      textDark: '',
      placeholder: 'placeholder-slate-300',
      bg: 'bg-slate-100 hover:bg-slate-200',
      card: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700',
      icon: Asterisk,
    },
  },
];

export default categories;
