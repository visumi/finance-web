import {
  Asterisk,
  Car,
  FirstAid,
  ForkKnife,
  Gift,
  House,
  PawPrint,
  Plus,
  Popcorn,
  ShoppingCart,
  TShirt,
} from 'phosphor-react';
import { useEffect, useState } from 'react';

interface CategorySelectorProps {
  changeCategory(category: string): void;
}

const CategorySelector = ({ changeCategory }: CategorySelectorProps) => {
  const [open, setOpen] = useState(false);
  let [category, setCategory] = useState('any');

  useEffect(() => {
    changeCategory(category);
  }, [category]);

  //Geral - Roupas - Restaurante - Transporte - Entretenimento - Moradia - Mercado - Saúde - Pet - Presentes

  return (
    <div onClick={() => setOpen(!open)} className='relative'>
      <div className='flex w-12 h-12 rounded-full bg-slate-100 hover:cursor-pointer hover:bg-slate-200'>
        <Plus
          className='mx-auto my-auto text-slate-700'
          size={24}
          weight='fill'
        />
      </div>
      {open && (
        <div className='absolute flex flex-col -bottom-13'>
          <div className='flex space-x-1'>
            <div
              onClick={() => setCategory('1')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <Asterisk
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='bold'
              />
            </div>
            <div
              onClick={() => setCategory('2')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <TShirt
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('3')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <Car
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('4')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <Popcorn
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('5')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <House
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
          </div>
          <div className='flex space-x-1'>
            <div
              onClick={() => setCategory('1')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <ShoppingCart
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('2')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <FirstAid
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('3')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <ForkKnife
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('4')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <Gift
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
            <div
              onClick={() => setCategory('5')}
              className='flex w-12 h-12 mt-1 rounded-full shadow-lg bg-slate-100 hover:cursor-pointer hover:bg-slate-200'
            >
              <PawPrint
                className='mx-auto my-auto text-slate-700'
                size={24}
                weight='fill'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
