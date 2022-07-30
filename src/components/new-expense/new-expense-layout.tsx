import { Asterisk } from 'phosphor-react';
import { FC, ReactNode } from 'react';
import Category from '../../models/category';

interface newExpenseLayoutProps {
  category?: Category;
  children: ReactNode;
}

const NewExpenseLayout: FC<newExpenseLayoutProps> = ({
  category = {
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
      card: 'bg-gradient-to-r from-slate-500 to-slate-800',
      icon: Asterisk,
    },
  },
  children,
}) => {
  return (
    <div className={`flex w-full h-20 p-4 rounded-lg ${category.style.card}`}>
      {children}
    </div>
  );
};

export default NewExpenseLayout;
